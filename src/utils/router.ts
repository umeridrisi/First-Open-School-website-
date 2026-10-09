import { ActiveTab, CodingSubTab, AgeTier } from '../types';

export interface AppRoute {
  tab: ActiveTab;
  curriculumTier?: AgeTier;
  letter?: string;
  digit?: number;
  entryId?: string;
  category?: string;
  poemId?: string;
  poemCategory?: string;
  tracingTarget?: string;
  drawingTemplateId?: string;
  drawingCategory?: string;
  codingSubTab?: CodingSubTab;
  codingTier?: AgeTier;
  missionId?: string;
  conceptId?: string;
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
    case 'curriculum':
      if (second) {
        return { tab: 'curriculum', curriculumTier: second.toLowerCase() as AgeTier };
      }
      return { tab: 'curriculum' };

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

    case 'coding':
      if (second === 'sandbox') {
        return { tab: 'coding', codingSubTab: 'sandbox' };
      }
      if (second === 'turtle') {
        return { tab: 'coding', codingSubTab: 'turtle' };
      }
      if (second === 'concepts') {
        return { tab: 'coding', codingSubTab: 'concepts', conceptId: segments[2]?.toLowerCase() };
      }
      if (second === 'tier' && segments[2]) {
        return { tab: 'coding', codingSubTab: 'quests', codingTier: segments[2].toLowerCase() as AgeTier };
      }
      if (second === 'mission' && segments[2]) {
        return { tab: 'coding', codingSubTab: 'quests', missionId: segments[2].toLowerCase() };
      }
      if (second) {
        return { tab: 'coding', codingSubTab: 'quests', missionId: second.toLowerCase() };
      }
      return { tab: 'coding', codingSubTab: 'quests' };

    case 'poems':
      if (segments[1] === 'category' && segments[2]) {
        return { tab: 'poems', poemCategory: segments[2].toLowerCase() };
      }
      if (second) {
        return { tab: 'poems', poemId: second.toLowerCase() };
      }
      return { tab: 'poems' };

    case 'drawings':
      if (segments[1] === 'category' && segments[2]) {
        return { tab: 'drawings', drawingCategory: segments[2].toLowerCase() };
      }
      if (second) {
        return { tab: 'drawings', drawingTemplateId: second.toLowerCase() };
      }
      return { tab: 'drawings' };

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

    case 'settings':
      return { tab: 'settings' };

    case 'privacy':
      return { tab: 'privacy' };

    case 'terms':
      return { tab: 'terms' };

    case 'data-safety':
      return { tab: 'data-safety' };

    case 'editorial-policy':
      return { tab: 'editorial-policy' };

    case 'about':
      return { tab: 'about' };

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

    case 'curriculum':
      return route.curriculumTier ? `/curriculum/${route.curriculumTier}` : '/curriculum';

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

    case 'coding':
      if (route.codingSubTab === 'sandbox') {
        return '/coding/sandbox';
      }
      if (route.codingSubTab === 'turtle') {
        return '/coding/turtle';
      }
      if (route.codingSubTab === 'concepts') {
        return route.conceptId ? `/coding/concepts/${route.conceptId}` : '/coding/concepts';
      }
      if (route.missionId) {
        return `/coding/mission/${route.missionId}`;
      }
      if (route.codingTier) {
        return `/coding/tier/${route.codingTier}`;
      }
      return '/coding';

    case 'poems':
      if (route.poemCategory) {
        return `/poems/category/${route.poemCategory}`;
      }
      if (route.poemId) {
        return `/poems/${route.poemId}`;
      }
      return '/poems';

    case 'drawings':
      if (route.drawingCategory) {
        return `/drawings/category/${route.drawingCategory}`;
      }
      if (route.drawingTemplateId) {
        return `/drawings/${route.drawingTemplateId}`;
      }
      return '/drawings';

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

    case 'settings':
      return '/settings';

    case 'privacy':
      return '/privacy';

    case 'terms':
      return '/terms';

    case 'data-safety':
      return '/data-safety';

    case 'editorial-policy':
      return '/editorial-policy';

    case 'about':
      return '/about';

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
