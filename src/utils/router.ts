import { ActiveTab } from '../types';

export interface AppRoute {
  tab: ActiveTab;
  letter?: string;
  digit?: number;
  entryId?: string;
  category?: string;
  tracingTarget?: string;
}

/**
 * Parses the current pathname into a structured AppRoute
 */
export function parsePath(pathname: string = (typeof window !== 'undefined' && window.location ? window.location.pathname : '/')): AppRoute {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '');
  if (!cleanPath) {
    return { tab: 'overview' };
  }

  const segments = cleanPath.split('/');
  const first = segments[0]?.toLowerCase();
  const second = segments[1];

  switch (first) {
    case 'alphabets':
      if (second) {
        return { tab: 'alphabets', letter: second.toUpperCase() };
      }
      return { tab: 'alphabets' };

    case 'digits':
      if (second !== undefined) {
        const val = parseInt(second, 10);
        return { tab: 'digits', digit: isNaN(val) ? 0 : val };
      }
      return { tab: 'digits' };

    case 'encyclopedia':
      if (segments[1] === 'category' && segments[2]) {
        return { tab: 'encyclopedia', category: segments[2].toLowerCase() };
      }
      if (second) {
        return { tab: 'encyclopedia', entryId: second.toLowerCase() };
      }
      return { tab: 'encyclopedia' };

    case 'tracing':
      if (second) {
        return { tab: 'tracing', tracingTarget: decodeURIComponent(second) };
      }
      return { tab: 'tracing' };

    case 'bubble-pop':
      return { tab: 'bubble-pop' };

    case 'counting-feast':
      return { tab: 'counting-feast' };

    case 'card-match':
      return { tab: 'card-match' };

    case 'phonics-stories':
      return { tab: 'phonics-stories' };

    case 'assessment':
      return { tab: 'assessment' };

    case 'parental-dashboard':
      return { tab: 'parental-dashboard' };

    default:
      return { tab: 'overview' };
  }
}

/**
 * Converts an AppRoute into a clean, human & SEO-friendly permalink
 */
export function formatRouteUrl(route: AppRoute): string {
  switch (route.tab) {
    case 'overview':
      return '/';

    case 'alphabets':
      return route.letter ? `/alphabets/${route.letter.toLowerCase()}` : '/alphabets';

    case 'digits':
      return route.digit !== undefined ? `/digits/${route.digit}` : '/digits';

    case 'encyclopedia':
      if (route.category) {
        return `/encyclopedia/category/${route.category}`;
      }
      if (route.entryId) {
        return `/encyclopedia/${route.entryId}`;
      }
      return '/encyclopedia';

    case 'tracing':
      return route.tracingTarget ? `/tracing/${encodeURIComponent(route.tracingTarget)}` : '/tracing';

    case 'bubble-pop':
      return '/bubble-pop';

    case 'counting-feast':
      return '/counting-feast';

    case 'card-match':
      return '/card-match';

    case 'phonics-stories':
      return '/phonics-stories';

    case 'assessment':
      return '/assessment';

    case 'parental-dashboard':
      return '/parental-dashboard';

    default:
      return '/';
  }
}

// Custom route change event name
export const ROUTE_CHANGE_EVENT = 'first_open_school_route_change';

/**
 * Pushes a new route onto browser history and notifies listeners
 */
export function navigateTo(route: AppRoute | string, replace: boolean = false) {
  const targetUrl = typeof route === 'string' ? route : formatRouteUrl(route);
  
  if (window.location.pathname !== targetUrl) {
    if (replace) {
      window.history.replaceState({ url: targetUrl }, '', targetUrl);
    } else {
      window.history.pushState({ url: targetUrl }, '', targetUrl);
    }
    window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, { detail: { url: targetUrl } }));
  }
}
