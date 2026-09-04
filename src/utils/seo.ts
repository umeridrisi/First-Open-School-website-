import { AppRoute, formatRouteUrl } from './router';
import { ALPHABET_DATA, DIGIT_DATA } from '../data/curriculumData';
import { ENCYCLOPEDIA_ENTRIES } from '../data/encyclopediaData';

export interface SeoMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  ogImage: string;
  twitterCard: 'summary' | 'summary_large_image';
  keywords: string[];
  breadcrumbs: { name: string; url: string }[];
  jsonLd: Record<string, unknown>[];
}

const DEFAULT_SITE_NAME = 'First Open School';
const DEFAULT_IMAGE = '/assets/kids-learning-hero.png';

/**
 * Gets the current website origin or falls back to production canonical domain
 */
export function getBaseUrl(): string {
  if (typeof window !== 'undefined' && window.location && window.location.origin) {
    return window.location.origin;
  }
  return 'https://ais-pre-gbznslzu6ygwfzaeadu6hg-604883253335.asia-east1.run.app';
}

/**
 * Computes complete SEO metadata based on the active AppRoute
 */
export function getSeoMetadata(route: AppRoute): SeoMetadata {
  const baseUrl = getBaseUrl();
  const path = formatRouteUrl(route);
  const canonicalUrl = `${baseUrl}${path === '/' ? '' : path}`;

  const defaultKeywords = [
    'first open school',
    'kids early education',
    'phonics sounds',
    'alphabet a to z',
    'numbers 0-20',
    'handwriting tracing',
    'kids encyclopedia',
    'kindergarten learning',
    'pre-k literacy',
    'stem for kids'
  ];

  const defaultBreadcrumbs = [{ name: 'Home', url: baseUrl }];

  switch (route.tab) {
    case 'overview': {
      return {
        title: 'First Open School - Early Literacy, Phonics, Math & Kids Encyclopedia',
        description: 'Evidence-based early childhood school for ages 2-12+. Master alphabet phonics, numbers 0-20, handwriting tracing, decodable stories, and CDE-style kids encyclopedia.',
        canonicalUrl,
        ogTitle: 'First Open School - Early Literacy, Phonics, Math & Kids Encyclopedia',
        ogDescription: 'Interactive early learning school for kids. Master alphabet phonics, numbers 0-20, tracing, games, and rich knowledge encyclopedia.',
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: defaultKeywords,
        breadcrumbs: defaultBreadcrumbs,
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: DEFAULT_SITE_NAME,
            url: baseUrl,
            description: 'Early childhood literacy, phonics, numeracy, and kids encyclopedia platform.',
            potentialAction: {
              '@type': 'SearchAction',
              target: `${baseUrl}/encyclopedia?q={search_term_string}`,
              'query-input': 'required name=search_term_string'
            }
          },
          {
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: DEFAULT_SITE_NAME,
            url: baseUrl,
            description: 'Free open early education curriculum with interactive gamified phonics, handwriting tracing, and science encyclopedia for children.',
            audience: {
              '@type': 'EducationalAudience',
              educationalRole: 'student',
              audienceType: 'Children ages 2-12'
            }
          }
        ]
      };
    }

    case 'alphabets': {
      if (route.letter) {
        const char = route.letter.toUpperCase();
        const letter = ALPHABET_DATA.find(l => l.char === char) || ALPHABET_DATA[0];
        const pageTitle = `Letter ${char} Phonics Sound, Pronunciation & Tracing | First Open School`;
        const pageDesc = `Learn Letter ${char} (${char}${char.toLowerCase()}): phonics sound '${letter.phonicsSound}', vocabulary word '${letter.exampleWord}', mouth shape mechanics, and interactive stroke tracing for kids.`;
        
        return {
          title: pageTitle,
          description: pageDesc,
          canonicalUrl,
          ogTitle: `Learn Letter ${char} (${char}${char.toLowerCase()}) - Phonics & Handwriting`,
          ogDescription: pageDesc,
          ogType: 'article',
          ogImage: DEFAULT_IMAGE,
          twitterCard: 'summary_large_image',
          keywords: [`letter ${char.toLowerCase()}`, `phonics sound ${letter.phonicsSound}`, `${letter.exampleWord} phonics`, 'alphabet for toddlers', 'letter tracing'],
          breadcrumbs: [
            ...defaultBreadcrumbs,
            { name: 'Alphabets A-Z', url: `${baseUrl}/alphabets` },
            { name: `Letter ${char}`, url: canonicalUrl }
          ],
          jsonLd: [
            {
              '@context': 'https://schema.org',
              '@type': 'LearningResource',
              name: `Letter ${char} Phonics Lesson`,
              description: pageDesc,
              educationalLevel: 'Pre-K to Kindergarten',
              learningResourceType: 'Interactive Lesson & Tracing',
              url: canonicalUrl
            }
          ]
        };
      }

      const pageTitle = 'Alphabets A to Z - Phonics Sounds, Mouth Shapes & Words | First Open School';
      const pageDesc = 'Explore all 26 English letters with voiced phonics audio, mouth formation guides, uppercase & lowercase pairs, vocabulary words, and tactile tracing practice.';
      return {
        title: pageTitle,
        description: pageDesc,
        canonicalUrl,
        ogTitle: 'Alphabet A to Z Curriculum for Early Readers',
        ogDescription: pageDesc,
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: ['alphabet a to z', 'abc phonics sounds', 'learn letters online', 'kindergarten reading', 'phonemic awareness'],
        breadcrumbs: [
          ...defaultBreadcrumbs,
          { name: 'Alphabets A-Z', url: canonicalUrl }
        ],
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Complete Alphabet A to Z Phonics Curriculum',
            description: pageDesc,
            provider: {
              '@type': 'Organization',
              name: DEFAULT_SITE_NAME,
              sameAs: baseUrl
            }
          }
        ]
      };
    }

    case 'digits': {
      if (route.digit !== undefined) {
        const val = route.digit;
        const digitObj = DIGIT_DATA.find(d => d.value === val) || DIGIT_DATA[0];
        const pageTitle = `Number ${val} (${digitObj.word}) - Counting, Math Sense & Tracing | First Open School`;
        const pageDesc = `Master Number ${val} (${digitObj.word}): visual grouping with ${digitObj.visualGroupEmoji}, math tip "${digitObj.mathTip}", audio counting, and tactile digit tracing.`;

        return {
          title: pageTitle,
          description: pageDesc,
          canonicalUrl,
          ogTitle: `Number ${val} (${digitObj.word}) - Math & Counting for Kids`,
          ogDescription: pageDesc,
          ogType: 'article',
          ogImage: DEFAULT_IMAGE,
          twitterCard: 'summary_large_image',
          keywords: [`number ${val}`, `count to ${val}`, `${digitObj.word} math`, 'subitizing numbers', 'kindergarten math'],
          breadcrumbs: [
            ...defaultBreadcrumbs,
            { name: 'Digits 0-20', url: `${baseUrl}/digits` },
            { name: `Number ${val} (${digitObj.word})`, url: canonicalUrl }
          ],
          jsonLd: [
            {
              '@context': 'https://schema.org',
              '@type': 'LearningResource',
              name: `Number ${val} Math Lesson`,
              description: pageDesc,
              educationalLevel: 'Early Numeracy (Pre-K to Grade 1)',
              learningResourceType: 'Interactive Math Lesson',
              url: canonicalUrl
            }
          ]
        };
      }

      const pageTitle = 'Numbers 0 to 20 - Number Sense, Subitizing & Math for Kids | First Open School';
      const pageDesc = 'Learn digits 0 through 20 with visual subitizing dots, interactive item groups, audio counting, number bonds, and touch tracing guides.';
      return {
        title: pageTitle,
        description: pageDesc,
        canonicalUrl,
        ogTitle: 'Numbers 0 to 20 Math Curriculum for Kids',
        ogDescription: pageDesc,
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: ['numbers 0 to 20', 'early math skills', 'subitizing for toddlers', 'counting games', 'zero concept for kids'],
        breadcrumbs: [
          ...defaultBreadcrumbs,
          { name: 'Digits 0-20', url: canonicalUrl }
        ],
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Numbers 0-20 & Early Math Foundations',
            description: pageDesc,
            provider: {
              '@type': 'Organization',
              name: DEFAULT_SITE_NAME,
              sameAs: baseUrl
            }
          }
        ]
      };
    }

    case 'encyclopedia': {
      if (route.entryId) {
        const entry = ENCYCLOPEDIA_ENTRIES.find(e => e.id === route.entryId);
        if (entry) {
          const pageTitle = `${entry.title} - Kids Encyclopedia with Analogies & Quiz | First Open School`;
          const pageDesc = `${entry.tagline} Phonetic pronunciation: ${entry.pronunciation}. Everyday analogy: ${entry.analogy.title}. Ancient origins, fun facts, and brain quiz.`;

          return {
            title: pageTitle,
            description: pageDesc,
            canonicalUrl,
            ogTitle: `${entry.title} - Kids Encyclopedia (${entry.category})`,
            ogDescription: pageDesc,
            ogType: 'article',
            ogImage: DEFAULT_IMAGE,
            twitterCard: 'summary_large_image',
            keywords: [entry.title.toLowerCase(), entry.category, 'kids encyclopedia', 'science for kids', 'plain english definition', entry.pronunciation],
            breadcrumbs: [
              ...defaultBreadcrumbs,
              { name: 'Kids Encyclopedia', url: `${baseUrl}/encyclopedia` },
              { name: entry.title, url: canonicalUrl }
            ],
            jsonLd: [
              {
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: entry.title,
                description: pageDesc,
                inLanguage: 'en-US',
                mainEntityOfPage: canonicalUrl,
                publisher: {
                  '@type': 'Organization',
                  name: DEFAULT_SITE_NAME,
                  url: baseUrl
                },
                about: {
                  '@type': 'Thing',
                  name: entry.title,
                  description: entry.tagline
                }
              }
            ]
          };
        }
      }

      if (route.category) {
        const catMap: Record<string, string> = {
          'alphabets': 'Alphabets A-Z Phonics & Letter Origins',
          'numbers': 'Numbers, Fractions & Math Superpowers',
          'solar-system': 'Solar System, Rockets & Cosmic Space',
          'earth-elements': 'Earth, Weather & Nature Elements',
          'animals-dinosaurs': 'Animals & Prehistoric Dinosaurs',
          'human-body': 'Human Body, Brain & 5 Senses',
          'how-things-work': 'How Things Work & Engineering Wonders',
          'countries-world': 'World Continents, Oceans & Geography'
        };
        const catName = catMap[route.category] || route.category;
        const pageTitle = `${catName} | Kids Encyclopedia | First Open School`;
        const pageDesc = `Read clear definitions, real-world kid analogies, and phonetic guides for ${catName} in the CDE-style Kids Encyclopedia.`;

        return {
          title: pageTitle,
          description: pageDesc,
          canonicalUrl,
          ogTitle: `${catName} - Kids Encyclopedia`,
          ogDescription: pageDesc,
          ogType: 'website',
          ogImage: DEFAULT_IMAGE,
          twitterCard: 'summary_large_image',
          keywords: [route.category, 'kids encyclopedia', 'child friendly definitions', 'science analogies'],
          breadcrumbs: [
            ...defaultBreadcrumbs,
            { name: 'Kids Encyclopedia', url: `${baseUrl}/encyclopedia` },
            { name: catName, url: canonicalUrl }
          ],
          jsonLd: [
            {
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: catName,
              description: pageDesc,
              url: canonicalUrl
            }
          ]
        };
      }

      const pageTitle = 'Kids Encyclopedia - Clear Definitions, Phonics & Science Analogies | First Open School';
      const pageDesc = 'CDE-inspired encyclopedia for curious kids: in-depth entries on all 26 alphabets, numbers, the solar system, earth elements, and world geography with vivid analogies and quizzes.';
      return {
        title: pageTitle,
        description: pageDesc,
        canonicalUrl,
        ogTitle: 'Kids Encyclopedia: Clear Definitions & Real-Life Analogies',
        ogDescription: pageDesc,
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: ['kids encyclopedia', 'children knowledge base', 'solar system for kids', 'alphabet origins', 'curious questions answered'],
        breadcrumbs: [
          ...defaultBreadcrumbs,
          { name: 'Kids Encyclopedia', url: canonicalUrl }
        ],
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'First Open School Kids Encyclopedia',
            description: pageDesc,
            url: canonicalUrl
          }
        ]
      };
    }

    case 'tracing': {
      const target = route.tracingTarget || 'A';
      const pageTitle = `Handwriting Tracing (${target}) - Guided Stroke Practice | First Open School`;
      const pageDesc = `Interactive handwriting canvas for letter '${target}': guided numbered stroke paths, live motor accuracy feedback, and celebration confetti for kids.`;
      return {
        title: pageTitle,
        description: pageDesc,
        canonicalUrl,
        ogTitle: `Handwriting Tracing - Practice ${target}`,
        ogDescription: pageDesc,
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: ['handwriting tracing', 'letter tracing', 'fine motor skills', 'touch canvas', 'learn to write'],
        breadcrumbs: [
          ...defaultBreadcrumbs,
          { name: 'Letter Tracing', url: canonicalUrl }
        ],
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'LearningResource',
            name: `Interactive Tracing Tool: ${target}`,
            description: pageDesc,
            learningResourceType: 'Practice Activity',
            url: canonicalUrl
          }
        ]
      };
    }

    case 'bubble-pop': {
      const pageTitle = 'Bubble Pop Phonics Game - Audio Letter Recall | First Open School';
      const pageDesc = 'Exciting bubble popping game reinforcing phonics listening comprehension, letter recognition, and hand-eye coordination for early learners.';
      return {
        title: pageTitle,
        description: pageDesc,
        canonicalUrl,
        ogTitle: 'Bubble Pop Phonics Game for Kids',
        ogDescription: pageDesc,
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: ['bubble pop game', 'phonics game', 'audio letter game', 'kindergarten game'],
        breadcrumbs: [...defaultBreadcrumbs, { name: 'Bubble Pop', url: canonicalUrl }],
        jsonLd: [{ '@context': 'https://schema.org', '@type': 'LearningResource', name: 'Bubble Pop Game', url: canonicalUrl }]
      };
    }

    case 'counting-feast': {
      const pageTitle = 'Monster Feast Counting Game - Subitizing & Numbers | First Open School';
      const pageDesc = 'Feed the hungry monster! Practice subitizing, counting food items, and math quantity associations in this fun kindergarten game.';
      return {
        title: pageTitle,
        description: pageDesc,
        canonicalUrl,
        ogTitle: 'Monster Feast Counting Game for Kids',
        ogDescription: pageDesc,
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: ['counting game', 'subitizing game', 'math for toddlers', 'feed the monster'],
        breadcrumbs: [...defaultBreadcrumbs, { name: 'Monster Feast', url: canonicalUrl }],
        jsonLd: [{ '@context': 'https://schema.org', '@type': 'LearningResource', name: 'Monster Feast Counting Game', url: canonicalUrl }]
      };
    }

    case 'card-match': {
      const pageTitle = 'Memory Match Card Game - Phonics & Letter Pairs | First Open School';
      const pageDesc = 'Flip cards to match letters with phonics pictures. Boosts working memory, visual discrimination, and letter-sound mastery.';
      return {
        title: pageTitle,
        description: pageDesc,
        canonicalUrl,
        ogTitle: 'Memory Match Phonics Game',
        ogDescription: pageDesc,
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: ['memory match game', 'phonics cards', 'card flip game', 'concentration game for kids'],
        breadcrumbs: [...defaultBreadcrumbs, { name: 'Card Match', url: canonicalUrl }],
        jsonLd: [{ '@context': 'https://schema.org', '@type': 'LearningResource', name: 'Memory Match Game', url: canonicalUrl }]
      };
    }

    case 'phonics-stories': {
      const pageTitle = 'Decodable Phonics Readers & Storybooks | First Open School';
      const pageDesc = 'Read decodable phonics storybooks with word-by-word audio narration, highlighting, and comprehension quizzes for emerging readers.';
      return {
        title: pageTitle,
        description: pageDesc,
        canonicalUrl,
        ogTitle: 'Decodable Phonics Readers for Kids',
        ogDescription: pageDesc,
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: ['decodable readers', 'phonics storybooks', 'early reading books', 'read aloud books for kids'],
        breadcrumbs: [...defaultBreadcrumbs, { name: 'Phonics Stories', url: canonicalUrl }],
        jsonLd: [{ '@context': 'https://schema.org', '@type': 'Course', name: 'Decodable Phonics Readers', url: canonicalUrl }]
      };
    }

    case 'assessment': {
      const pageTitle = 'Adaptive Phonics & Math Quiz Assessment | First Open School';
      const pageDesc = 'Gamified quiz assessing letter sounds, counting, and pattern skills with instant feedback, star awards, and graduation milestones.';
      return {
        title: pageTitle,
        description: pageDesc,
        canonicalUrl,
        ogTitle: 'Adaptive Learning Quiz & Assessment',
        ogDescription: pageDesc,
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: ['kindergarten quiz', 'phonics assessment', 'math quiz for kids', 'learning milestone test'],
        breadcrumbs: [...defaultBreadcrumbs, { name: 'Quiz Assessment', url: canonicalUrl }],
        jsonLd: [{ '@context': 'https://schema.org', '@type': 'LearningResource', name: 'Adaptive Learning Quiz', url: canonicalUrl }]
      };
    }

    case 'parental-dashboard': {
      const pageTitle = 'Parent & Teacher Learning Dashboard with AI Coach | First Open School';
      const pageDesc = 'Review child learning analytics, time on task, phonics mastery, AI pedagogical coaching advice, and print official completion certificates.';
      return {
        title: pageTitle,
        description: pageDesc,
        canonicalUrl,
        ogTitle: 'Parent & Educator Learning Analytics Dashboard',
        ogDescription: pageDesc,
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: ['parent dashboard', 'early learning analytics', 'pedagogical ai coach', 'kindergarten progress tracker', 'printable certificate'],
        breadcrumbs: [...defaultBreadcrumbs, { name: 'Parental Dashboard', url: canonicalUrl }],
        jsonLd: [{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Parent & Educator Dashboard', url: canonicalUrl }]
      };
    }

    default:
      return {
        title: 'First Open School - Early Literacy, Phonics, Math & Kids Encyclopedia',
        description: 'Interactive early learning school for kids ages 2-12+. Master alphabet phonics, numbers 0-20, handwriting tracing, and kids encyclopedia.',
        canonicalUrl,
        ogTitle: 'First Open School',
        ogDescription: 'Interactive early learning school for kids.',
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: defaultKeywords,
        breadcrumbs: defaultBreadcrumbs,
        jsonLd: []
      };
  }
}

/**
 * Updates DOM head elements with complete SEO tags
 */
export function applySeoMetadata(seo: SeoMetadata) {
  if (typeof document === 'undefined') return;

  // 1. Update Title
  document.title = seo.title;

  // Helper for meta tags
  const setMeta = (nameOrProp: string, value: string, isProperty: boolean = false) => {
    const selector = isProperty ? `meta[property="${nameOrProp}"]` : `meta[name="${nameOrProp}"]`;
    let el = document.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      if (isProperty) {
        el.setAttribute('property', nameOrProp);
      } else {
        el.setAttribute('name', nameOrProp);
      }
      document.head.appendChild(el);
    }
    el.setAttribute('content', value);
  };

  // 2. Standard Meta Tags
  setMeta('description', seo.description);
  setMeta('keywords', seo.keywords.join(', '));
  setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  setMeta('author', 'First Open School');

  // 3. Canonical Tag
  let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', seo.canonicalUrl);

  // 4. OpenGraph Tags
  setMeta('og:title', seo.ogTitle, true);
  setMeta('og:description', seo.ogDescription, true);
  setMeta('og:url', seo.canonicalUrl, true);
  setMeta('og:type', seo.ogType, true);
  setMeta('og:site_name', DEFAULT_SITE_NAME, true);
  setMeta('og:locale', 'en_US', true);
  setMeta('og:image', `${getBaseUrl()}${seo.ogImage.startsWith('/') ? '' : '/'}${seo.ogImage}`, true);

  // 5. Twitter Tags
  setMeta('twitter:card', seo.twitterCard);
  setMeta('twitter:title', seo.ogTitle);
  setMeta('twitter:description', seo.ogDescription);
  setMeta('twitter:image', `${getBaseUrl()}${seo.ogImage.startsWith('/') ? '' : '/'}${seo.ogImage}`);

  // 6. JSON-LD Structured Data Injection
  let jsonLdScript = document.getElementById('seo-json-ld') as HTMLScriptElement | null;
  if (!jsonLdScript) {
    jsonLdScript = document.createElement('script');
    jsonLdScript.id = 'seo-json-ld';
    jsonLdScript.type = 'application/ld+json';
    document.head.appendChild(jsonLdScript);
  }

  // Breadcrumb schema
  const breadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: seo.breadcrumbs.map((b, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: b.name,
      item: b.url
    }))
  };

  const combinedJsonLd = [...seo.jsonLd, breadcrumbListSchema];
  jsonLdScript.textContent = JSON.stringify(combinedJsonLd, null, 2);
}
