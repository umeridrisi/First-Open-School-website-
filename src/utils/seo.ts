import { AppRoute, formatRouteUrl } from './router';
import { ALPHABET_DATA, DIGIT_DATA } from '../data/curriculumData';
import { ENCYCLOPEDIA_ENTRIES, ENCYCLOPEDIA_CATEGORIES } from '../data/encyclopediaData';
import { POEMS_DATA, POEM_CATEGORIES, getPoemById } from '../data/poemsData';
import { STORIES_COLLECTION, STORY_CATEGORIES } from '../data/storiesData';

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
 * Official canonical production domain
 */
export const CANONICAL_DOMAIN = 'https://firstopenschool.com';

/**
 * Gets the authoritative canonical domain (https://firstopenschool.com)
 */
export function getBaseUrl(): string {
  return CANONICAL_DOMAIN;
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

    case 'poems': {
      if (route.poemId) {
        const poem = getPoemById(route.poemId);
        if (poem) {
          const catInfo = POEM_CATEGORIES.find(c => c.id === poem.category);
          const pageTitle = `${poem.title} - Easy English Poem for Kids to Learn & Recite | First Open School`;
          const pageDesc = `${poem.tagline} By ${poem.poet}. Rhythm: ${poem.rhymeScheme}. Age: ${poem.ageTier}. Complete stanzas, audio read-aloud recitation, vocabulary words, and physical recital tips for kids.`;

          return {
            title: pageTitle,
            description: pageDesc,
            canonicalUrl,
            ogTitle: `${poem.title} - Easy English Recital Poem for Kids`,
            ogDescription: pageDesc,
            ogType: 'article',
            ogImage: DEFAULT_IMAGE,
            twitterCard: 'summary_large_image',
            keywords: [
              poem.title.toLowerCase(),
              'easy english poems for kids',
              'poems for kids to recite',
              'nursery rhyme',
              poem.poet.toLowerCase(),
              poem.category,
              'learn poems by heart',
              'rhyme scheme ' + poem.rhymeScheme,
              ...poem.vocabulary.map(v => v.word.toLowerCase())
            ],
            breadcrumbs: [
              ...defaultBreadcrumbs,
              { name: 'Poems & Rhymes', url: `${baseUrl}/poems` },
              ...(catInfo ? [{ name: catInfo.label, url: `${baseUrl}/poems/category/${catInfo.id}` }] : []),
              { name: poem.title, url: canonicalUrl }
            ],
            jsonLd: [
              {
                '@context': 'https://schema.org',
                '@type': 'CreativeWork',
                name: poem.title,
                headline: poem.title,
                author: {
                  '@type': 'Person',
                  name: poem.poet
                },
                description: pageDesc,
                genre: 'Children\'s Poetry',
                inLanguage: 'en-US',
                mainEntityOfPage: canonicalUrl,
                educationalLevel: poem.ageTier,
                publisher: {
                  '@type': 'Organization',
                  name: DEFAULT_SITE_NAME,
                  url: baseUrl
                },
                text: poem.stanzas.map(s => s.join('\n')).join('\n\n')
              },
              {
                '@context': 'https://schema.org',
                '@type': 'LearningResource',
                name: `Learn to Recite: ${poem.title}`,
                description: poem.tagline,
                learningResourceType: 'Poem Recitation & Vocabulary',
                educationalLevel: poem.ageTier,
                url: canonicalUrl
              }
            ]
          };
        }
      }

      if (route.poemCategory) {
        const cat = POEM_CATEGORIES.find(c => c.id === route.poemCategory);
        const catLabel = cat ? cat.label : route.poemCategory;
        const pageTitle = `${catLabel} - Easy English Poems for Kids to Learn & Recite | First Open School`;
        const pageDesc = cat ? `${cat.description} Explore easy rhyming poems with line-by-line recitation audio, vocabulary, and recital tips.` : `Read and recite children\'s poems in ${catLabel}.`;

        return {
          title: pageTitle,
          description: pageDesc,
          canonicalUrl,
          ogTitle: `${catLabel} - Easy English Poems for Kids`,
          ogDescription: pageDesc,
          ogType: 'website',
          ogImage: DEFAULT_IMAGE,
          twitterCard: 'summary_large_image',
          keywords: [route.poemCategory, 'kids poems', 'nursery rhymes', 'easy english poems', 'poem recitation for children'],
          breadcrumbs: [
            ...defaultBreadcrumbs,
            { name: 'Poems & Rhymes', url: `${baseUrl}/poems` },
            { name: catLabel, url: canonicalUrl }
          ],
          jsonLd: [
            {
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: catLabel,
              description: pageDesc,
              url: canonicalUrl
            }
          ]
        };
      }

      const pageTitle = '132 Easy English Poems & Global Rhymes for Kids | First Open School';
      const pageDesc = 'Discover over 130 easy English poems and traditional folk rhymes from around the world for kids to learn and recite! Timeless classics, global nursery rhymes, animal verses, and bedtime lullabies with read-aloud audio, stanza highlighting, vocabulary, and recital tips.';
      return {
        title: pageTitle,
        description: pageDesc,
        canonicalUrl,
        ogTitle: 'Easy English Poems for Kids to Learn and Recite',
        ogDescription: pageDesc,
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: [
          'easy english poems for kids',
          'poems for kids to recite',
          'nursery rhymes for children',
          'english poems to learn by heart',
          'kindergarten poem recitation',
          'rhyming verses for early readers',
          'twinkle twinkle little star',
          'humpty dumpty',
          'mary had a little lamb',
          'itsy bitsy spider'
        ],
        breadcrumbs: [
          ...defaultBreadcrumbs,
          { name: 'Poems & Rhymes', url: canonicalUrl }
        ],
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Easy English Poems for Kids to Learn and Recite',
            description: pageDesc,
            url: canonicalUrl,
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: POEMS_DATA.map((p, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: p.title,
                url: `${baseUrl}/poems/${p.id}`
              }))
            }
          },
          {
            '@context': 'https://schema.org',
            '@type': 'LearningResource',
            name: 'English Poetry & Recitation Curriculum for Kids',
            description: pageDesc,
            educationalLevel: 'Pre-K to Elementary',
            learningResourceType: 'Poetry Recitation & Rhyme Practice',
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
      const pageTitle = '110 Decodable Phonics Readers & Story World | First Open School';
      const pageDesc = 'Read over 100 whimsical one-line decodable stories for kids with interactive comprehension quizzes, audio narration, and star awards.';
      return {
        title: pageTitle,
        description: pageDesc,
        canonicalUrl,
        ogTitle: '110 One-Line Decodable Phonics Stories for Kids',
        ogDescription: pageDesc,
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: ['1 line stories', 'decodable readers', 'phonics storybooks', 'early reading stories', 'read aloud books for kids', 'first open school stories'],
        breadcrumbs: [...defaultBreadcrumbs, { name: 'Story World (110 Stories)', url: canonicalUrl }],
        jsonLd: [{ '@context': 'https://schema.org', '@type': 'Course', name: '110 Decodable Phonics Readers', url: canonicalUrl }]
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

    case 'privacy': {
      const pageTitle = 'Privacy Policy & COPPA Children Safety Pledge | First Open School';
      const pageDesc = 'Our strict COPPA, GDPR-K, and FERPA privacy policy. 100% ad-free, zero tracking, and local-only data storage for child learners.';
      return {
        title: pageTitle,
        description: pageDesc,
        canonicalUrl,
        ogTitle: 'Privacy Policy & Child Safe Harbor - First Open School',
        ogDescription: pageDesc,
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: ['first open school privacy policy', 'coppa compliant learning app', 'kids data privacy', 'safe early learning', 'gdpr kids policy'],
        breadcrumbs: [...defaultBreadcrumbs, { name: 'Privacy Policy', url: canonicalUrl }],
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Privacy Policy & Children Safety Harbor',
            url: canonicalUrl,
            description: pageDesc,
            publisher: {
              '@type': 'Organization',
              name: 'Arkade Digital Limited',
              founder: 'Umer Idrisi'
            }
          }
        ]
      };
    }

    case 'terms': {
      const pageTitle = 'Terms of Service & Open Access Charter | First Open School';
      const pageDesc = 'Educational terms of use for parents, teachers, and homeschoolers. Free open curriculum guidelines and copyright governance by Arkade Digital Limited.';
      return {
        title: pageTitle,
        description: pageDesc,
        canonicalUrl,
        ogTitle: 'Terms of Service - First Open School',
        ogDescription: pageDesc,
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: ['terms of service', 'classroom use license', 'open educational resource terms', 'first open school terms'],
        breadcrumbs: [...defaultBreadcrumbs, { name: 'Terms of Service', url: canonicalUrl }],
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Terms of Service',
            url: canonicalUrl,
            description: pageDesc
          }
        ]
      };
    }

    case 'data-safety': {
      const pageTitle = "Children's Data Safety & Multi-Layer Protection | First Open School";
      const pageDesc = "Explore First Open School's 5-pillar child data safety framework: Zero cloud tracking, no open chats, PIN-protected parental gates, and offline resilience.";
      return {
        title: pageTitle,
        description: pageDesc,
        canonicalUrl,
        ogTitle: "Children's Data Safety Pledge - First Open School",
        ogDescription: pageDesc,
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: ['kids data safety', 'child online protection', 'safe kids app', 'ad free educational app', 'offline kids learning'],
        breadcrumbs: [...defaultBreadcrumbs, { name: 'Data Safety', url: canonicalUrl }],
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: "Children's Data Safety Pledge",
            url: canonicalUrl,
            description: pageDesc
          }
        ]
      };
    }

    case 'editorial-policy': {
      const pageTitle = 'Pedagogical Framework & Editorial Standards | First Open School';
      const pageDesc: string = 'Evidence-based early literacy methodology: Synthetic phonics, mouth mechanics, concrete-representational numeracy, and CDE-style clarity standard.';
      return {
        title: pageTitle,
        description: pageDesc,
        canonicalUrl,
        ogTitle: 'Pedagogical & Editorial Standards - First Open School',
        ogDescription: pageDesc,
        ogType: 'article',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: ['pedagogical standards', 'synthetic phonics methodology', 'cde clarity style', 'early childhood curriculum', 'orton gillingham foundations'],
        breadcrumbs: [...defaultBreadcrumbs, { name: 'Editorial Policy', url: canonicalUrl }],
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Pedagogical Framework & Editorial Standards',
            url: canonicalUrl,
            description: pageDesc
          }
        ]
      };
    }

    case 'about': {
      const pageTitle = 'About Us & Credits: Umer Idrisi & Arkade Digital Limited | First Open School';
      const pageDesc = 'Learn about First Open School, founded by Pakistani blogger & entrepreneur Umer Idrisi, and published by Arkade Digital Limited (UK).';
      return {
        title: pageTitle,
        description: pageDesc,
        canonicalUrl,
        ogTitle: 'About First Open School - Created by Umer Idrisi (Arkade Digital Limited)',
        ogDescription: pageDesc,
        ogType: 'website',
        ogImage: DEFAULT_IMAGE,
        twitterCard: 'summary_large_image',
        keywords: ['about first open school', 'umer idrisi', 'arkade digital limited', 'pakistani edtech entrepreneur', 'free kids school'],
        breadcrumbs: [...defaultBreadcrumbs, { name: 'About & Credits', url: canonicalUrl }],
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About First Open School',
            url: canonicalUrl,
            description: pageDesc,
            mainEntity: {
              '@type': 'Person',
              name: 'Umer Idrisi',
              jobTitle: 'Founder, Blogger & Entrepreneur',
              nationality: 'Pakistani',
              sameAs: 'https://firstopenschool.com/about'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Arkade Digital Limited',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'UK'
              }
            }
          }
        ]
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

function escapeHtmlAttr(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlText(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Generates semantic, crawlable HTML for search engine web crawlers.
 * Ensures Googlebot can parse full headings, definitions, analogies, facts, and internal links in Raw HTML.
 */
export function renderSemanticRouteHtml(route: AppRoute): string {
  const seo = getSeoMetadata(route);
  const baseUrl = CANONICAL_DOMAIN;

  // Header Nav Links
  const headerHtml = `
    <header style="background:#ffffff;border-bottom:4px solid #ffd93d;padding:1rem 1.5rem;font-family:system-ui,-apple-system,sans-serif;">
      <div style="max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
        <div style="display:flex;align-items:center;gap:0.75rem;">
          <a href="/" style="font-size:1.5rem;font-weight:900;color:#4d96ff;text-decoration:none;letter-spacing:-0.5px;">FIRST OPEN SCHOOL</a>
          <span style="background:#6bcb77;color:#fff;font-size:0.75rem;font-weight:800;padding:0.25rem 0.6rem;border-radius:9999px;">Ad-Free & Safe</span>
        </div>
        <nav aria-label="Main Navigation" style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;font-weight:800;font-size:0.875rem;">
          <a href="/" style="color:#2d2d2d;text-decoration:none;padding:0.4rem 0.8rem;border-radius:0.75rem;background:#fff9f0;border:2px solid #ffd93d;">Home</a>
          <a href="/alphabets" style="color:#2d2d2d;text-decoration:none;padding:0.4rem 0.8rem;border-radius:0.75rem;background:#fff9f0;border:2px solid #ff6b6b;">Alphabets A-Z</a>
          <a href="/digits" style="color:#2d2d2d;text-decoration:none;padding:0.4rem 0.8rem;border-radius:0.75rem;background:#fff9f0;border:2px solid #6bcb77;">Digits 0-20</a>
          <a href="/encyclopedia" style="color:#2d2d2d;text-decoration:none;padding:0.4rem 0.8rem;border-radius:0.75rem;background:#ffd93d;border:2px solid #2d2d2d;">Kids Encyclopedia 📚</a>
          <a href="/poems" style="color:#2d2d2d;text-decoration:none;padding:0.4rem 0.8rem;border-radius:0.75rem;background:#fff9f0;border:2px solid #8b5cf6;">Poems & Rhymes ⭐</a>
          <a href="/tracing" style="color:#2d2d2d;text-decoration:none;padding:0.4rem 0.8rem;border-radius:0.75rem;background:#fff9f0;border:2px solid #ffd93d;">Tracing</a>
          <a href="/phonics-stories" style="color:#2d2d2d;text-decoration:none;padding:0.4rem 0.8rem;border-radius:0.75rem;background:#fff9f0;border:2px solid #4d96ff;">Stories</a>
          <a href="/assessment" style="color:#2d2d2d;text-decoration:none;padding:0.4rem 0.8rem;border-radius:0.75rem;background:#fff9f0;border:2px solid #ffd93d;">Quiz</a>
          <a href="/about" style="color:#2d2d2d;text-decoration:none;padding:0.4rem 0.8rem;border-radius:0.75rem;background:#fff9f0;border:2px solid #2d2d2d;">About & Credits</a>
        </nav>
      </div>
    </header>
  `;

  // Breadcrumbs
  const breadcrumbHtml = `
    <nav aria-label="Breadcrumb" style="max-width:1200px;margin:1rem auto 0 auto;padding:0 1.5rem;font-size:0.875rem;color:#666;font-family:system-ui,-apple-system,sans-serif;">
      <ol style="list-style:none;padding:0;margin:0;display:flex;align-items:center;flex-wrap:wrap;gap:0.5rem;">
        ${seo.breadcrumbs.map((b, i) => `
          <li>
            ${i > 0 ? '<span style="margin-right:0.5rem;">/</span>' : ''}
            <a href="${escapeHtmlAttr(b.url)}" style="color:#4d96ff;text-decoration:none;font-weight:700;">${escapeHtmlText(b.name)}</a>
          </li>
        `).join('')}
      </ol>
    </nav>
  `;

  // Specific Main Content
  let mainContentHtml = '';

  if (route.tab === 'encyclopedia') {
    if (route.entryId) {
      const entry = ENCYCLOPEDIA_ENTRIES.find(e => e.id === route.entryId);
      if (entry) {
        const related = ENCYCLOPEDIA_ENTRIES.filter(e => e.category === entry.category && e.id !== entry.id).slice(0, 6);
        mainContentHtml = `
          <article itemscope itemtype="https://schema.org/Article" style="background:#ffffff;border-radius:2rem;padding:2rem;border:4px solid #ffd93d;box-shadow:0 6px 0 #c9a92e;margin-top:1.5rem;">
            <div style="display:inline-block;background:#ffd93d;padding:0.35rem 0.85rem;border-radius:9999px;font-weight:900;font-size:0.75rem;text-transform:uppercase;margin-bottom:1rem;">
              <a href="/encyclopedia/category/${entry.category}" style="color:#2d2d2d;text-decoration:none;">Category: ${escapeHtmlText(entry.category)}</a>
            </div>
            <h1 itemprop="headline" style="font-size:2.5rem;font-weight:900;color:#2d2d2d;margin:0 0 0.5rem 0;line-height:1.2;">
              ${entry.symbol || '🌟'} ${escapeHtmlText(entry.title)}
            </h1>
            <p style="font-size:1.125rem;font-weight:700;color:#4d96ff;margin:0 0 1rem 0;">
              Phonetic Pronunciation: <span>${escapeHtmlText(entry.pronunciation)}</span>
            </p>
            <p itemprop="description" style="font-size:1.25rem;color:#444;line-height:1.6;margin:0 0 2rem 0;font-weight:600;">
              ${escapeHtmlText(entry.tagline)}
            </p>

            <section style="background:#fff9f0;border-left:6px solid #ff6b6b;padding:1.5rem;border-radius:1rem;margin-bottom:2rem;">
              <h2 style="font-size:1.35rem;font-weight:900;color:#ff6b6b;margin:0 0 0.75rem 0;">
                Everyday Kid Analogy: ${escapeHtmlText(entry.analogy.title)}
              </h2>
              <p style="font-size:1.1rem;color:#333;line-height:1.6;margin:0;">
                ${escapeHtmlText(entry.analogy.story)}
              </p>
            </section>

            <section style="margin-bottom:2rem;">
              <h2 style="font-size:1.35rem;font-weight:900;color:#2d2d2d;margin:0 0 1rem 0;">
                ${escapeHtmlText(entry.howItWorks.title || 'How It Works')}
              </h2>
              <ul style="padding-left:1.5rem;line-height:1.8;font-size:1.05rem;color:#333;">
                ${entry.howItWorks.points.map(pt => `<li>${escapeHtmlText(pt)}</li>`).join('')}
              </ul>
            </section>

            <section style="background:#f0f9ff;border:2px solid #bae6fd;padding:1.5rem;border-radius:1rem;margin-bottom:2rem;">
              <h2 style="font-size:1.35rem;font-weight:900;color:#0284c7;margin:0 0 1rem 0;">
                Mind-Blowing Fun Facts
              </h2>
              <ul style="padding-left:1.5rem;line-height:1.8;font-size:1.05rem;color:#333;">
                ${entry.funFacts.map(fact => `<li>${escapeHtmlText(fact)}</li>`).join('')}
              </ul>
            </section>

            <section style="background:#faf5ff;border:2px solid #e9d5ff;padding:1.5rem;border-radius:1rem;margin-bottom:2rem;">
              <h2 style="font-size:1.35rem;font-weight:900;color:#7e22ce;margin:0 0 0.75rem 0;">
                Did You Know & Origin Story
              </h2>
              <p style="font-size:1.05rem;color:#333;line-height:1.6;margin:0;">
                ${escapeHtmlText(entry.didYouKnowOrigin)}
              </p>
            </section>

            <section style="background:#ecfdf5;border:2px solid #a7f3d0;padding:1.5rem;border-radius:1rem;margin-bottom:2rem;">
              <h2 style="font-size:1.35rem;font-weight:900;color:#047857;margin:0 0 0.75rem 0;">
                Quick Brain Quiz
              </h2>
              <p style="font-size:1.1rem;font-weight:700;color:#2d2d2d;margin:0 0 1rem 0;">
                ${escapeHtmlText(entry.microQuiz.question)}
              </p>
              <ul style="list-style:none;padding:0;margin:0 0 1rem 0;">
                ${entry.microQuiz.options.map((opt, idx) => `
                  <li style="padding:0.5rem 1rem;background:#ffffff;border:1px solid #d1fae5;border-radius:0.5rem;margin-bottom:0.5rem;font-weight:600;">
                    ${idx + 1}. ${escapeHtmlText(opt)}
                  </li>
                `).join('')}
              </ul>
              <p style="font-size:0.95rem;color:#065f46;font-style:italic;">
                Answer Explanation: ${escapeHtmlText(entry.microQuiz.explanation)}
              </p>
            </section>

            <section style="margin-top:2rem;padding-top:1.5rem;border-top:2px solid #e5e7eb;">
              <h3 style="font-size:1.2rem;font-weight:900;color:#2d2d2d;margin:0 0 1rem 0;">
                Related Knowledge Articles in ${escapeHtmlText(entry.category)}:
              </h3>
              <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
                ${related.map(r => `
                  <a href="/encyclopedia/${r.id}" style="display:inline-block;padding:0.5rem 1rem;background:#fff9f0;border:2px solid #ffd93d;border-radius:0.75rem;color:#2d2d2d;text-decoration:none;font-weight:800;font-size:0.875rem;">
                    ${r.symbol || '📖'} ${escapeHtmlText(r.title)} &rarr;
                  </a>
                `).join('')}
              </div>
            </section>
          </article>
        `;
      }
    } else if (route.category) {
      const cat = ENCYCLOPEDIA_CATEGORIES.find(c => c.id === route.category);
      const entries = ENCYCLOPEDIA_ENTRIES.filter(e => e.category === route.category);
      mainContentHtml = `
        <section style="background:#ffffff;border-radius:2rem;padding:2rem;border:4px solid #ffd93d;box-shadow:0 6px 0 #c9a92e;margin-top:1.5rem;">
          <h1 style="font-size:2.25rem;font-weight:900;color:#2d2d2d;margin:0 0 0.5rem 0;">
            ${cat ? cat.icon : '📚'} ${cat ? escapeHtmlText(cat.label) : escapeHtmlText(route.category)} - Kids Encyclopedia
          </h1>
          <p style="font-size:1.15rem;color:#555;line-height:1.6;margin:0 0 2rem 0;font-weight:600;">
            ${cat ? escapeHtmlText(cat.description) : 'In-depth encyclopedia articles written in simple, clear language with relatable analogies for young learners.'}
          </p>

          <h2 style="font-size:1.4rem;font-weight:900;color:#2d2d2d;margin:0 0 1.5rem 0;">
            All ${entries.length} Articles in this Subject
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));gap:1rem;">
            ${entries.map(e => `
              <div style="background:#fff9f0;border:3px solid #ffd93d;border-radius:1rem;padding:1.25rem;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <h3 style="font-size:1.2rem;font-weight:900;color:#2d2d2d;margin:0 0 0.35rem 0;">
                    ${e.symbol || '🌟'} ${escapeHtmlText(e.title)}
                  </h3>
                  <p style="font-size:0.875rem;font-weight:700;color:#4d96ff;margin:0 0 0.5rem 0;">
                    ${escapeHtmlText(e.pronunciation)}
                  </p>
                  <p style="font-size:0.9rem;color:#555;line-height:1.5;margin:0 0 1rem 0;">
                    ${escapeHtmlText(e.tagline)}
                  </p>
                </div>
                <a href="/encyclopedia/${e.id}" style="display:inline-block;padding:0.5rem 1rem;background:#4d96ff;color:#ffffff;text-decoration:none;font-weight:900;font-size:0.85rem;border-radius:0.75rem;text-align:center;">
                  Read Article &rarr;
                </a>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    } else {
      mainContentHtml = `
        <section style="background:#ffffff;border-radius:2rem;padding:2rem;border:4px solid #ffd93d;box-shadow:0 6px 0 #c9a92e;margin-top:1.5rem;">
          <h1 style="font-size:2.5rem;font-weight:900;color:#2d2d2d;margin:0 0 0.75rem 0;">
            Kids Encyclopedia 📚
          </h1>
          <p style="font-size:1.2rem;color:#444;line-height:1.6;margin:0 0 2rem 0;font-weight:600;">
            Clear definitions, phonetic pronunciations, real-life analogies, and interactive brain quizzes. Explore all 8 educational knowledge subjects!
          </p>

          <h2 style="font-size:1.5rem;font-weight:900;color:#2d2d2d;margin:0 0 1.5rem 0;">
            Explore Encyclopedia Categories
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));gap:1.25rem;">
            ${ENCYCLOPEDIA_CATEGORIES.map(cat => {
              const count = ENCYCLOPEDIA_ENTRIES.filter(e => e.category === cat.id).length;
              return `
                <div style="background:#ffffff;border:3px solid #2d2d2d;border-radius:1.25rem;padding:1.5rem;box-shadow:0 4px 0 #000;">
                  <div style="font-size:2.5rem;margin-bottom:0.5rem;">${cat.icon}</div>
                  <h3 style="font-size:1.25rem;font-weight:900;color:#2d2d2d;margin:0 0 0.5rem 0;">
                    ${escapeHtmlText(cat.label)} (${count} articles)
                  </h3>
                  <p style="font-size:0.9rem;color:#666;line-height:1.5;margin:0 0 1.25rem 0;">
                    ${escapeHtmlText(cat.description)}
                  </p>
                  <a href="/encyclopedia/category/${cat.id}" style="display:inline-block;padding:0.5rem 1rem;background:#ffd93d;color:#2d2d2d;text-decoration:none;font-weight:900;font-size:0.875rem;border-radius:0.75rem;border:2px solid #2d2d2d;">
                    Browse ${escapeHtmlText(cat.label)} &rarr;
                  </a>
                </div>
              `;
            }).join('')}
          </div>
        </section>
      `;
    }
  } else if (route.tab === 'poems') {
    if (route.poemId) {
      const poem = getPoemById(route.poemId);
      if (poem) {
        const catInfo = POEM_CATEGORIES.find(c => c.id === poem.category);
        const related = POEMS_DATA.filter(p => p.category === poem.category && p.id !== poem.id).slice(0, 4);
        mainContentHtml = `
          <article itemscope itemtype="https://schema.org/CreativeWork" style="background:#ffffff;border-radius:2rem;padding:2rem;border:4px solid #8B5CF6;box-shadow:0 6px 0 #6D28D9;margin-top:1.5rem;">
            <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;margin-bottom:1rem;">
              <span style="display:inline-block;background:#EDE9FE;color:#5B21B6;border:2px solid #C4B5FD;padding:0.35rem 0.85rem;border-radius:9999px;font-weight:900;font-size:0.75rem;text-transform:uppercase;">
                <a href="/poems/category/${poem.category}" style="color:#5B21B6;text-decoration:none;">${catInfo ? catInfo.icon + ' ' + escapeHtmlText(catInfo.label) : escapeHtmlText(poem.category)}</a>
              </span>
              <span style="background:#FEF3C7;color:#92400E;padding:0.35rem 0.75rem;border-radius:9999px;font-weight:800;font-size:0.75rem;">
                Target: ${escapeHtmlText(poem.ageTier)}
              </span>
              <span style="background:#E0F2FE;color:#075985;padding:0.35rem 0.75rem;border-radius:9999px;font-weight:800;font-size:0.75rem;">
                Rhyme Scheme: ${escapeHtmlText(poem.rhymeScheme)}
              </span>
            </div>

            <h1 itemprop="headline" style="font-size:2.5rem;font-weight:900;color:#2d2d2d;margin:0 0 0.5rem 0;line-height:1.2;">
              ${poem.emoji} ${escapeHtmlText(poem.title)}
            </h1>
            <p style="font-size:1.1rem;font-weight:700;color:#6D28D9;margin:0 0 1rem 0;">
              By: <span itemprop="author">${escapeHtmlText(poem.poet)}</span>
            </p>
            <p itemprop="description" style="font-size:1.2rem;color:#444;line-height:1.6;margin:0 0 2rem 0;font-weight:600;">
              ${escapeHtmlText(poem.tagline)}
            </p>

            <section style="background:#FFF9F0;border-left:8px solid #8B5CF6;border-radius:1.5rem;padding:2rem;margin-bottom:2rem;">
              <div style="font-size:0.875rem;font-weight:900;color:#8B5CF6;text-transform:uppercase;letter-spacing:1px;margin-bottom:1rem;">
                Poem Verses to Learn and Recite:
              </div>
              <div itemprop="text" style="font-size:1.35rem;line-height:2.2;color:#1F2937;font-family:Georgia, serif;font-weight:500;">
                ${poem.stanzas.map((stanza, sIdx) => `
                  <div style="margin-bottom:${sIdx === poem.stanzas.length - 1 ? '0' : '1.75rem'};padding-left:0.5rem;">
                    ${stanza.map(line => `<div style="margin-bottom:0.25rem;">${escapeHtmlText(line)}</div>`).join('')}
                  </div>
                `).join('')}
              </div>
            </section>

            ${poem.vocabulary.length > 0 ? `
              <section style="margin-bottom:2rem;">
                <h2 style="font-size:1.35rem;font-weight:900;color:#2d2d2d;margin:0 0 1rem 0;">
                  Vocabulary & Rhyme Discovery 📖
                </h2>
                <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:1rem;">
                  ${poem.vocabulary.map(v => `
                    <div style="background:#F3F4F6;border-radius:1rem;padding:1rem;border:2px solid #E5E7EB;">
                      <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem;">
                        <span style="font-size:1.5rem;">${v.emoji}</span>
                        <strong style="font-size:1.1rem;color:#2D2D2D;">${escapeHtmlText(v.word)}</strong>
                      </div>
                      <p style="font-size:0.875rem;color:#555;margin:0;line-height:1.4;">${escapeHtmlText(v.meaning)}</p>
                    </div>
                  `).join('')}
                </div>
              </section>
            ` : ''}

            <section style="background:#ECFDF5;border:2px solid #6EE7B7;border-radius:1.25rem;padding:1.5rem;margin-bottom:2rem;">
              <h2 style="font-size:1.35rem;font-weight:900;color:#065F46;margin:0 0 0.75rem 0;">
                How to Recite This Poem with Expression 🌟
              </h2>
              <ul style="list-style:disc;padding-left:1.5rem;margin:0 0 1rem 0;color:#047857;line-height:1.8;font-weight:600;">
                ${poem.recitalTips.map(tip => `<li>${escapeHtmlText(tip)}</li>`).join('')}
              </ul>
              <div style="font-size:0.95rem;color:#065F46;font-weight:700;">
                Learning Takeaway: <span style="font-weight:500;">${escapeHtmlText(poem.educationalTakeaway)}</span>
              </div>
            </section>

            <section style="margin-top:2rem;padding-top:1.5rem;border-top:2px solid #E5E7EB;">
              <h3 style="font-size:1.2rem;font-weight:900;color:#2d2d2d;margin:0 0 1rem 0;">
                More ${catInfo ? escapeHtmlText(catInfo.label) : 'Related Poems'}:
              </h3>
              <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
                ${related.map(r => `
                  <a href="/poems/${r.id}" style="display:inline-block;padding:0.6rem 1.2rem;background:#FFF9F0;border:2px solid #8B5CF6;border-radius:0.75rem;color:#2d2d2d;text-decoration:none;font-weight:800;font-size:0.875rem;">
                    ${r.emoji} ${escapeHtmlText(r.title)} &rarr;
                  </a>
                `).join('')}
                <a href="/poems" style="display:inline-block;padding:0.6rem 1.2rem;background:#8B5CF6;border:2px solid #8B5CF6;border-radius:0.75rem;color:#ffffff;text-decoration:none;font-weight:800;font-size:0.875rem;">
                  Browse All ${POEMS_DATA.length} Easy English & World Poems &rarr;
                </a>
              </div>
            </section>
          </article>
        `;
      }
    } else if (route.poemCategory) {
      const cat = POEM_CATEGORIES.find(c => c.id === route.poemCategory);
      const poems = POEMS_DATA.filter(p => p.category === route.poemCategory);
      mainContentHtml = `
        <section style="background:#ffffff;border-radius:2rem;padding:2rem;border:4px solid #8B5CF6;box-shadow:0 6px 0 #6D28D9;margin-top:1.5rem;">
          <h1 style="font-size:2.25rem;font-weight:900;color:#2d2d2d;margin:0 0 0.5rem 0;">
            ${cat ? cat.icon : '⭐'} ${cat ? escapeHtmlText(cat.label) : escapeHtmlText(route.poemCategory)}
          </h1>
          <p style="font-size:1.15rem;color:#555;line-height:1.6;margin:0 0 2rem 0;font-weight:600;">
            ${cat ? escapeHtmlText(cat.description) : 'Easy English poems for kids to learn, practice pronunciation, and recite aloud.'}
          </p>

          <h2 style="font-size:1.4rem;font-weight:900;color:#2d2d2d;margin:0 0 1.5rem 0;">
            All ${poems.length} Poems in this Category:
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));gap:1.25rem;">
            ${poems.map(p => `
              <div style="background:#FFF9F0;border:3px solid #8B5CF6;border-radius:1.25rem;padding:1.5rem;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <div style="font-size:2.5rem;margin-bottom:0.5rem;">${p.emoji}</div>
                  <h3 style="font-size:1.25rem;font-weight:900;color:#2d2d2d;margin:0 0 0.25rem 0;">
                    ${escapeHtmlText(p.title)}
                  </h3>
                  <div style="font-size:0.875rem;font-weight:700;color:#6D28D9;margin-bottom:0.75rem;">
                    ${escapeHtmlText(p.poet)} &bull; ${escapeHtmlText(p.ageTier)}
                  </div>
                  <p style="font-size:0.9rem;color:#555;line-height:1.5;margin:0 0 1.25rem 0;">
                    ${escapeHtmlText(p.tagline)}
                  </p>
                </div>
                <a href="/poems/${p.id}" style="display:inline-block;padding:0.6rem 1rem;background:#8B5CF6;color:#ffffff;text-decoration:none;font-weight:900;font-size:0.875rem;border-radius:0.75rem;text-align:center;">
                  Read & Recite Poem &rarr;
                </a>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    } else {
      mainContentHtml = `
        <section style="background:#ffffff;border-radius:2rem;padding:2rem;border:4px solid #8B5CF6;box-shadow:0 6px 0 #6D28D9;margin-top:1.5rem;">
          <div style="display:inline-block;background:#EDE9FE;color:#5B21B6;border:2px solid #C4B5FD;padding:0.35rem 0.85rem;border-radius:9999px;font-weight:900;font-size:0.75rem;text-transform:uppercase;margin-bottom:1rem;">
            ✨ NEW CURRICULUM SECTION
          </div>
          <h1 style="font-size:2.5rem;font-weight:900;color:#2d2d2d;margin:0 0 0.75rem 0;">
            Easy English Poems for Kids to Learn and Recite ⭐
          </h1>
          <p style="font-size:1.2rem;color:#444;line-height:1.6;margin:0 0 2rem 0;font-weight:600;">
            Welcome to the expansive collection of ${POEMS_DATA.length} classic and international English poems, folk songs, and nursery rhymes! Specially curated for early learners, preschoolers, and elementary children from all over the world to build phonemic rhythm, memorize timeless verses, and practice expressive speech.
          </p>

          <h2 style="font-size:1.5rem;font-weight:900;color:#2d2d2d;margin:0 0 1.25rem 0;">
            Explore by Poem Category:
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));gap:1.25rem;margin-bottom:2.5rem;">
            ${POEM_CATEGORIES.map(cat => {
              const count = POEMS_DATA.filter(p => p.category === cat.id).length;
              return `
                <div style="background:#ffffff;border:3px solid #2d2d2d;border-radius:1.25rem;padding:1.5rem;box-shadow:0 4px 0 #000;">
                  <div style="font-size:2.5rem;margin-bottom:0.5rem;">${cat.icon}</div>
                  <h3 style="font-size:1.25rem;font-weight:900;color:#2d2d2d;margin:0 0 0.5rem 0;">
                    ${escapeHtmlText(cat.label)} (${count} poems)
                  </h3>
                  <p style="font-size:0.9rem;color:#666;line-height:1.5;margin:0 0 1.25rem 0;">
                    ${escapeHtmlText(cat.description)}
                  </p>
                  <a href="/poems/category/${cat.id}" style="display:inline-block;padding:0.5rem 1rem;background:#8B5CF6;color:#ffffff;text-decoration:none;font-weight:900;font-size:0.875rem;border-radius:0.75rem;border:2px solid #2d2d2d;">
                    View ${escapeHtmlText(cat.label)} &rarr;
                  </a>
                </div>
              `;
            }).join('')}
          </div>

          <h2 style="font-size:1.5rem;font-weight:900;color:#2d2d2d;margin:0 0 1.25rem 0;">
            Complete Directory of All ${POEMS_DATA.length} Easy English &amp; World Poems:
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(260px, 1fr));gap:1rem;">
            ${POEMS_DATA.map(p => `
              <a href="/poems/${p.id}" style="background:#FFF9F0;border:2px solid #8B5CF6;border-radius:1rem;padding:1rem;text-decoration:none;color:#2d2d2d;display:block;transition:transform 0.2s;">
                <div style="font-size:1.75rem;margin-bottom:0.25rem;">${p.emoji}</div>
                <div style="font-size:1.1rem;font-weight:900;color:#2d2d2d;margin-bottom:0.25rem;">${escapeHtmlText(p.title)}</div>
                <div style="font-size:0.75rem;font-weight:700;color:#6D28D9;margin-bottom:0.25rem;">${escapeHtmlText(p.poet)} &bull; ${escapeHtmlText(p.ageTier)}</div>
                <div style="font-size:0.8rem;color:#666;line-height:1.4;">${escapeHtmlText(p.tagline)}</div>
              </a>
            `).join('')}
          </div>

          <div style="background:#FEF3C7;border:2px solid #F59E0B;border-radius:1.5rem;padding:1.5rem;margin-top:2.5rem;">
            <h3 style="font-size:1.25rem;font-weight:900;color:#92400E;margin:0 0 0.5rem 0;">
              Why Poetry Recitation Matters for Children 💡
            </h3>
            <p style="font-size:0.95rem;color:#78350F;line-height:1.6;margin:0 0 0.75rem 0;">
              Learning and reciting simple English poems gives children phonemic cadence, expands their working vocabulary, sharpens memory retention, and fosters self-confidence in speaking clearly before others.
            </p>
            <div style="font-size:0.875rem;color:#92400E;font-weight:700;">
              Tip: Read the poem aloud together first, tap out the rhythm with your hands, and encourage children to use physical gestures while reciting!
            </div>
          </div>
        </section>
      `;
    }
  } else if (route.tab === 'phonics-stories') {
    mainContentHtml = `
      <section style="background:#ffffff;border-radius:2rem;padding:2.5rem;border:4px solid #4d96ff;box-shadow:0 8px 0 #3a72c1;margin-top:1.5rem;">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem;flex-wrap:wrap;">
          <span style="font-size:2.5rem;">📖</span>
          <div>
            <h1 style="font-size:2.25rem;font-weight:900;color:#2d2d2d;margin:0;">
              Story World: 110 One-Line Decodable Phonics Stories
            </h1>
            <div style="font-size:1rem;color:#4d96ff;font-weight:800;">
              Single-Sentence Early Reader Stories with Comprehension Checks & Audio Narration
            </div>
          </div>
        </div>

        <p style="font-size:1.1rem;line-height:1.7;color:#444;margin:1rem 0 2rem 0;">
          Welcome to the First Open School <strong>Story World</strong>! Featuring over 100 whimsical, single-sentence stories crafted specifically for emerging readers. Each story contains rich phonics patterns, high-frequency sight words, and an instant multiple-choice reading comprehension check.
        </p>

        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:2rem;">
          ${STORY_CATEGORIES.map(c => `
            <span style="padding:0.4rem 0.8rem;background:#f0f7ff;border:1px solid #4d96ff;border-radius:2rem;font-size:0.85rem;font-weight:800;color:#2b548f;">
              ${c.icon} ${escapeHtmlText(c.label)} (${c.count})
            </span>
          `).join('')}
        </div>

        <h2 style="font-size:1.5rem;font-weight:900;color:#2d2d2d;margin:0 0 1.25rem 0;">
          Complete Library of 110 One-Line Decodable Stories:
        </h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));gap:1rem;">
          ${STORIES_COLLECTION.map((s, idx) => `
            <div style="background:#fcfbf8;border:2px solid #e5e7eb;border-radius:1rem;padding:1.25rem;display:flex;flex-direction:column;justify-content:space-between;">
              <div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
                  <span style="font-size:1.75rem;">${s.emoji || '📖'}</span>
                  <span style="font-size:0.75rem;font-weight:800;color:#4d96ff;background:#eff6ff;padding:0.2rem 0.5rem;border-radius:0.5rem;">
                    #${idx + 1} &bull; ${escapeHtmlText(s.category || 'Story')}
                  </span>
                </div>
                <div style="font-size:1.05rem;font-weight:900;color:#2d2d2d;margin-bottom:0.35rem;">
                  ${escapeHtmlText(s.title)}
                </div>
                <div style="font-size:0.75rem;font-weight:800;color:#059669;margin-bottom:0.75rem;">
                  🎯 ${escapeHtmlText(s.phonicsFocus)}
                </div>
                <blockquote style="margin:0 0 0.75rem 0;font-size:0.95rem;color:#1e293b;line-height:1.5;font-style:italic;background:#ffffff;padding:0.75rem;border-radius:0.75rem;border:1px solid #cbd5e1;">
                  &ldquo;${escapeHtmlText(s.story)}&rdquo;
                </blockquote>
              </div>
              <div style="background:#fef3c7;padding:0.6rem;border-radius:0.5rem;font-size:0.8rem;color:#92400e;font-weight:700;">
                ❓ Question: ${escapeHtmlText(s.question)}
              </div>
            </div>
          `).join('')}
        </div>

        <div style="background:#f0fdf4;border:2px solid #22c55e;border-radius:1.5rem;padding:1.5rem;margin-top:2.5rem;">
          <h3 style="font-size:1.25rem;font-weight:900;color:#166534;margin:0 0 0.5rem 0;">
            The Science of One-Line Reading Stories 🧠
          </h3>
          <p style="font-size:0.95rem;color:#14532d;line-height:1.6;margin:0;">
            Early readers often experience cognitive overload when confronted with full paragraphs. By distilling stories into a single vivid sentence followed by an immediate comprehension quiz, children build phonemic confidence, exercise working memory, and experience genuine reading mastery without intimidation.
          </p>
        </div>
      </section>
    `;
  } else if (route.tab === 'alphabets') {
    if (route.letter) {
      const char = route.letter.toUpperCase();
      const letter = ALPHABET_DATA.find(l => l.char === char) || ALPHABET_DATA[0];
      mainContentHtml = `
        <article style="background:#ffffff;border-radius:2rem;padding:2rem;border:4px solid #ff6b6b;box-shadow:0 6px 0 #c44e4e;margin-top:1.5rem;">
          <h1 style="font-size:2.5rem;font-weight:900;color:#2d2d2d;margin:0 0 0.5rem 0;">
            Letter ${char} (${char}${letter.lowercase}) - Phonics Sound & Tracing
          </h1>
          <p style="font-size:1.25rem;font-weight:800;color:#ff6b6b;margin:0 0 1.5rem 0;">
            Phonics Sound: '${escapeHtmlText(letter.phonicsSound)}' | Example Word: '${escapeHtmlText(letter.exampleWord)}' ${letter.emoji}
          </p>

          <div style="background:#fff9f0;border:2px solid #ff6b6b;border-radius:1rem;padding:1.5rem;margin-bottom:2rem;">
            <h2 style="font-size:1.3rem;font-weight:900;color:#2d2d2d;margin:0 0 0.5rem 0;">How to Practice Letter ${char}</h2>
            <p style="font-size:1.05rem;line-height:1.6;color:#444;margin:0 0 1rem 0;">
              Listen to the sound '${letter.phonicsSound}', repeat the word '${letter.exampleWord}', and practice tracing the uppercase and lowercase strokes.
            </p>
            <a href="/tracing/${char}" style="display:inline-block;padding:0.75rem 1.5rem;background:#ffd93d;color:#2d2d2d;text-decoration:none;font-weight:900;border-radius:0.75rem;border:2px solid #2d2d2d;">
              Practice Tracing Letter ${char} Now &rarr;
            </a>
          </div>

          <h3 style="font-size:1.2rem;font-weight:900;color:#2d2d2d;margin:0 0 1rem 0;">Explore All 26 English Alphabets:</h3>
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
            ${ALPHABET_DATA.map(l => `
              <a href="/alphabets/${l.char.toLowerCase()}" style="display:inline-block;width:2.5rem;height:2.5rem;line-height:2.5rem;text-align:center;background:${l.char === char ? '#ff6b6b' : '#fff9f0'};color:${l.char === char ? '#ffffff' : '#2d2d2d'};border:2px solid #ff6b6b;border-radius:0.5rem;font-weight:900;text-decoration:none;">
                ${l.char}
              </a>
            `).join('')}
          </div>
        </article>
      `;
    } else {
      mainContentHtml = `
        <section style="background:#ffffff;border-radius:2rem;padding:2rem;border:4px solid #ff6b6b;box-shadow:0 6px 0 #c44e4e;margin-top:1.5rem;">
          <h1 style="font-size:2.5rem;font-weight:900;color:#2d2d2d;margin:0 0 0.75rem 0;">
            Alphabets A to Z Curriculum & Phonics Sounds 🔤
          </h1>
          <p style="font-size:1.15rem;color:#444;line-height:1.6;margin:0 0 2rem 0;font-weight:600;">
            Master all 26 letters of the English alphabet with synthetic phonics audio, mouth formation cues, vocabulary words, and tactile handwriting tracing.
          </p>
          <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(140px, 1fr));gap:1rem;">
            ${ALPHABET_DATA.map(l => `
              <a href="/alphabets/${l.char.toLowerCase()}" style="background:#fff9f0;border:2px solid #ff6b6b;border-radius:1rem;padding:1rem;text-align:center;text-decoration:none;color:#2d2d2d;display:block;">
                <div style="font-size:2rem;font-weight:900;color:#ff6b6b;">${l.char}${l.lowercase}</div>
                <div style="font-size:1.5rem;margin:0.25rem 0;">${l.emoji}</div>
                <div style="font-size:0.875rem;font-weight:800;">${escapeHtmlText(l.exampleWord)}</div>
                <div style="font-size:0.75rem;color:#666;margin-top:0.25rem;">Sound: ${escapeHtmlText(l.phonicsSound)}</div>
              </a>
            `).join('')}
          </div>
        </section>
      `;
    }
  } else if (route.tab === 'digits') {
    if (route.digit !== undefined) {
      const val = route.digit;
      const digitObj = DIGIT_DATA.find(d => d.value === val) || DIGIT_DATA[0];
      mainContentHtml = `
        <article style="background:#ffffff;border-radius:2rem;padding:2rem;border:4px solid #6bcb77;box-shadow:0 6px 0 #4e9b56;margin-top:1.5rem;">
          <h1 style="font-size:2.5rem;font-weight:900;color:#2d2d2d;margin:0 0 0.5rem 0;">
            Number ${val} (${escapeHtmlText(digitObj.word)}) - Early Math & Counting
          </h1>
          <p style="font-size:1.25rem;font-weight:800;color:#2e7d32;margin:0 0 1.5rem 0;">
            Visual Group: ${digitObj.visualGroupEmoji} | Math Sense: ${escapeHtmlText(digitObj.mathTip)}
          </p>

          <div style="background:#fff9f0;border:2px solid #6bcb77;border-radius:1rem;padding:1.5rem;margin-bottom:2rem;">
            <h2 style="font-size:1.3rem;font-weight:900;color:#2d2d2d;margin:0 0 0.5rem 0;">Learning Number ${val}</h2>
            <p style="font-size:1.05rem;line-height:1.6;color:#444;margin:0 0 1rem 0;">
              Count the items, listen to the number word '${digitObj.word}', and practice stroke tracing on the tactile canvas.
            </p>
            <a href="/tracing/${val}" style="display:inline-block;padding:0.75rem 1.5rem;background:#ffd93d;color:#2d2d2d;text-decoration:none;font-weight:900;border-radius:0.75rem;border:2px solid #2d2d2d;">
              Practice Tracing Number ${val} Now &rarr;
            </a>
          </div>

          <h3 style="font-size:1.2rem;font-weight:900;color:#2d2d2d;margin:0 0 1rem 0;">Explore All Digits 0 to 20:</h3>
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
            ${DIGIT_DATA.map(d => `
              <a href="/digits/${d.value}" style="display:inline-block;width:2.5rem;height:2.5rem;line-height:2.5rem;text-align:center;background:${d.value === val ? '#6bcb77' : '#fff9f0'};color:${d.value === val ? '#ffffff' : '#2d2d2d'};border:2px solid #6bcb77;border-radius:0.5rem;font-weight:900;text-decoration:none;">
                ${d.value}
              </a>
            `).join('')}
          </div>
        </article>
      `;
    } else {
      mainContentHtml = `
        <section style="background:#ffffff;border-radius:2rem;padding:2rem;border:4px solid #6bcb77;box-shadow:0 6px 0 #4e9b56;margin-top:1.5rem;">
          <h1 style="font-size:2.5rem;font-weight:900;color:#2d2d2d;margin:0 0 0.75rem 0;">
            Numbers 0 to 20 & Early Math Foundations 🔢
          </h1>
          <p style="font-size:1.15rem;color:#444;line-height:1.6;margin:0 0 2rem 0;font-weight:600;">
            Learn counting, visual subitizing, number bonds, and touch digit tracing from Zero to Twenty.
          </p>
          <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(130px, 1fr));gap:1rem;">
            ${DIGIT_DATA.map(d => `
              <a href="/digits/${d.value}" style="background:#fff9f0;border:2px solid #6bcb77;border-radius:1rem;padding:1rem;text-align:center;text-decoration:none;color:#2d2d2d;display:block;">
                <div style="font-size:2rem;font-weight:900;color:#6bcb77;">${d.value}</div>
                <div style="font-size:1.25rem;margin:0.25rem 0;">${d.visualGroupEmoji}</div>
                <div style="font-size:0.875rem;font-weight:800;">${escapeHtmlText(d.word)}</div>
              </a>
            `).join('')}
          </div>
        </section>
      `;
    }
  } else if (route.tab === 'about') {
    mainContentHtml = `
      <article style="background:#ffffff;border-radius:2rem;padding:2rem;border:4px solid #2d2d2d;box-shadow:0 6px 0 #000;margin-top:1.5rem;">
        <h1 style="font-size:2.5rem;font-weight:900;color:#2d2d2d;margin:0 0 1rem 0;">About First Open School</h1>
        <p style="font-size:1.15rem;line-height:1.7;color:#333;margin:0 0 1.5rem 0;">
          First Open School is an open educational initiative founded by <strong>Umer Idrisi</strong>, a blogger and tech entrepreneur from Pakistan, and published under <strong>Arkade Digital Limited</strong> (registered in the United Kingdom).
        </p>
        <p style="font-size:1.15rem;line-height:1.7;color:#333;margin:0 0 1.5rem 0;">
          Our core mission is to democratize high-grade foundational literacy, numeracy, and scientific understanding for children aged 2 through 12+ across the world—completely free, ad-free, and accessible on any device.
        </p>
        <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-top:2rem;">
          <a href="/privacy" style="padding:0.75rem 1.5rem;background:#ffd93d;color:#2d2d2d;text-decoration:none;font-weight:900;border-radius:0.75rem;border:2px solid #2d2d2d;">Privacy Policy</a>
          <a href="/data-safety" style="padding:0.75rem 1.5rem;background:#6bcb77;color:#fff;text-decoration:none;font-weight:900;border-radius:0.75rem;">Data Safety Pledge</a>
          <a href="/editorial-policy" style="padding:0.75rem 1.5rem;background:#4d96ff;color:#fff;text-decoration:none;font-weight:900;border-radius:0.75rem;">Editorial Standards</a>
        </div>
      </article>
    `;
  } else if (route.tab === 'privacy' || route.tab === 'terms' || route.tab === 'data-safety' || route.tab === 'editorial-policy') {
    mainContentHtml = `
      <article style="background:#ffffff;border-radius:2rem;padding:2rem;border:4px solid #ffd93d;box-shadow:0 6px 0 #c9a92e;margin-top:1.5rem;">
        <h1 style="font-size:2.25rem;font-weight:900;color:#2d2d2d;margin:0 0 1rem 0;">${escapeHtmlText(seo.title)}</h1>
        <p style="font-size:1.15rem;line-height:1.7;color:#444;margin:0 0 1.5rem 0;">${escapeHtmlText(seo.description)}</p>
        <div style="line-height:1.8;color:#333;font-size:1.05rem;">
          <p>First Open School strictly enforces the Children's Online Privacy Protection Act (COPPA), GDPR-K, and FERPA regulations. We do not display third-party advertisements, do not collect biometric data, and store student learning progress locally on the parent/school device.</p>
          <p>Created by Umer Idrisi. Published by Arkade Digital Limited (UK).</p>
        </div>
      </article>
    `;
  } else {
    // Overview / Root Hub
    mainContentHtml = `
      <section style="background:#ffffff;border-radius:2rem;padding:2.5rem;border:4px solid #4d96ff;box-shadow:0 8px 0 #3a72c1;margin-top:1.5rem;">
        <div style="display:inline-block;background:#ffd93d;padding:0.4rem 1rem;border-radius:9999px;font-weight:900;font-size:0.8rem;text-transform:uppercase;margin-bottom:1rem;">
          Early Literacy & Science Knowledge Hub
        </div>
        <h1 style="font-size:2.75rem;font-weight:900;color:#4d96ff;margin:0 0 1rem 0;line-height:1.2;">
          Welcome to First Open School 🚀
        </h1>
        <p style="font-size:1.25rem;color:#444;line-height:1.6;margin:0 0 2rem 0;font-weight:600;">
          A comprehensive, ad-free educational platform for young learners. Master phonics sounds for all 26 alphabets, early numeracy from 0 to 20, guided handwriting tracing, and a rich, CDE-style Kids Encyclopedia.
        </p>

        <div style="display:flex;flex-wrap:wrap;gap:1rem;margin-bottom:2.5rem;">
          <a href="/alphabets" style="padding:1rem 1.5rem;background:#ff6b6b;color:#ffffff;text-decoration:none;font-weight:900;border-radius:1rem;font-size:1rem;box-shadow:0 4px 0 #c44e4e;">
            EXPLORE ALPHABETS A-Z &rarr;
          </a>
          <a href="/digits" style="padding:1rem 1.5rem;background:#6bcb77;color:#ffffff;text-decoration:none;font-weight:900;border-radius:1rem;font-size:1rem;box-shadow:0 4px 0 #4e9b56;">
            COUNT DIGITS 0-20 &rarr;
          </a>
          <a href="/encyclopedia" style="padding:1rem 1.5rem;background:#ffd93d;color:#2d2d2d;text-decoration:none;font-weight:900;border-radius:1rem;font-size:1rem;border:2px solid #2d2d2d;box-shadow:0 4px 0 #000;">
            KIDS ENCYCLOPEDIA 📚 &rarr;
          </a>
          <a href="/tracing" style="padding:1rem 1.5rem;background:#fff9f0;color:#2d2d2d;text-decoration:none;font-weight:900;border-radius:1rem;font-size:1rem;border:2px solid #ffd93d;">
            HANDWRITING TRACING &rarr;
          </a>
        </div>

        <h2 style="font-size:1.6rem;font-weight:900;color:#2d2d2d;margin:2rem 0 1rem 0;">
          Kids Encyclopedia Knowledge Subjects
        </h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(240px, 1fr));gap:1rem;">
          ${ENCYCLOPEDIA_CATEGORIES.map(cat => `
            <a href="/encyclopedia/category/${cat.id}" style="background:#fff9f0;border:2px solid #ffd93d;border-radius:1rem;padding:1rem;text-decoration:none;color:#2d2d2d;display:block;">
              <div style="font-size:1.75rem;margin-bottom:0.25rem;">${cat.icon}</div>
              <div style="font-weight:900;font-size:1.1rem;">${escapeHtmlText(cat.label)}</div>
              <div style="font-size:0.85rem;color:#666;margin-top:0.25rem;">${escapeHtmlText(cat.description)}</div>
            </a>
          `).join('')}
        </div>
      </section>
    `;
  }

  // Crawlable Site Directory Footer
  const footerHtml = `
    <footer style="margin-top:3rem;background:#ffffff;border-top:4px solid #ffd93d;padding:2.5rem 1.5rem;font-family:system-ui,-apple-system,sans-serif;color:#2d2d2d;">
      <div style="max-width:1200px;margin:0 auto;display:flex;flex-direction:column;gap:2rem;">
        
        <div style="background:#fff9f0;border:3px solid #ffd93d;border-radius:1.5rem;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
          <div>
            <div style="font-weight:900;font-size:1.25rem;color:#2d2d2d;">First Open School</div>
            <p style="margin:0.25rem 0 0 0;font-size:0.875rem;color:#666;">
              Created by <strong>Umer Idrisi</strong> (Blogger & Entrepreneur from Pakistan) | A project of <strong>Arkade Digital Limited (UK)</strong>.
            </p>
          </div>
          <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
            <a href="/about" style="padding:0.5rem 1rem;background:#2d2d2d;color:#fff;text-decoration:none;font-weight:800;font-size:0.75rem;border-radius:0.5rem;">About & Credits</a>
            <a href="/data-safety" style="padding:0.5rem 1rem;background:#6bcb77;color:#fff;text-decoration:none;font-weight:800;font-size:0.75rem;border-radius:0.5rem;">Data Safety</a>
            <a href="/privacy" style="padding:0.5rem 1rem;background:#ff6b6b;color:#fff;text-decoration:none;font-weight:800;font-size:0.75rem;border-radius:0.5rem;">Privacy</a>
            <a href="/terms" style="padding:0.5rem 1rem;background:#4d96ff;color:#fff;text-decoration:none;font-weight:800;font-size:0.75rem;border-radius:0.5rem;">Terms</a>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));gap:1.5rem;font-size:0.875rem;">
          <div>
            <div style="font-weight:900;text-transform:uppercase;margin-bottom:0.75rem;color:#4d96ff;">Curriculum Hubs</div>
            <ul style="list-style:none;padding:0;margin:0;line-height:2;">
              <li><a href="/" style="color:#444;text-decoration:none;">Home Learning World</a></li>
              <li><a href="/alphabets" style="color:#444;text-decoration:none;">Alphabets A to Z</a></li>
              <li><a href="/digits" style="color:#444;text-decoration:none;">Digits 0 to 20</a></li>
              <li><a href="/encyclopedia" style="color:#444;text-decoration:none;">Kids Encyclopedia 📚</a></li>
              <li><a href="/poems" style="color:#444;text-decoration:none;">Poems & Rhymes ⭐</a></li>
              <li><a href="/tracing" style="color:#444;text-decoration:none;">Handwriting Tracing</a></li>
            </ul>
          </div>

          <div>
            <div style="font-weight:900;text-transform:uppercase;margin-bottom:0.75rem;color:#8b5cf6;">Poem Categories</div>
            <ul style="list-style:none;padding:0;margin:0;line-height:2;">
              <li><a href="/poems" style="color:#8b5cf6;font-weight:700;text-decoration:none;">⭐ All ${POEMS_DATA.length} Easy &amp; World Poems</a></li>
              ${POEM_CATEGORIES.map(cat => `
                <li><a href="/poems/category/${cat.id}" style="color:#444;text-decoration:none;">${cat.icon} ${escapeHtmlText(cat.label)}</a></li>
              `).join('')}
            </ul>
          </div>

          <div>
            <div style="font-weight:900;text-transform:uppercase;margin-bottom:0.75rem;color:#ff6b6b;">Encyclopedia Subjects</div>
            <ul style="list-style:none;padding:0;margin:0;line-height:2;">
              ${ENCYCLOPEDIA_CATEGORIES.map(cat => `
                <li><a href="/encyclopedia/category/${cat.id}" style="color:#444;text-decoration:none;">${cat.icon} ${escapeHtmlText(cat.label)}</a></li>
              `).join('')}
            </ul>
          </div>

          <div>
            <div style="font-weight:900;text-transform:uppercase;margin-bottom:0.75rem;color:#6bcb77;">Interactive Games</div>
            <ul style="list-style:none;padding:0;margin:0;line-height:2;">
              <li><a href="/bubble-pop" style="color:#444;text-decoration:none;">Bubble Pop Phonics</a></li>
              <li><a href="/counting-feast" style="color:#444;text-decoration:none;">Monster Feast Counting</a></li>
              <li><a href="/card-match" style="color:#444;text-decoration:none;">Memory Match Game</a></li>
              <li><a href="/phonics-stories" style="color:#444;text-decoration:none;">Decodable Storybooks</a></li>
              <li><a href="/assessment" style="color:#444;text-decoration:none;">Adaptive Star Quiz</a></li>
            </ul>
          </div>

          <div>
            <div style="font-weight:900;text-transform:uppercase;margin-bottom:0.75rem;color:#2d2d2d;">Search Engine Feeds</div>
            <ul style="list-style:none;padding:0;margin:0;line-height:2;">
              <li><a href="/sitemap.xml" style="color:#444;text-decoration:none;">Canonical XML Sitemap</a></li>
              <li><a href="/robots.txt" style="color:#444;text-decoration:none;">Robots Directives</a></li>
              <li><a href="/llms.txt" style="color:#444;text-decoration:none;">LLM Documentation (llms.txt)</a></li>
              <li><a href="/editorial-policy" style="color:#444;text-decoration:none;">Pedagogical Standards</a></li>
            </ul>
          </div>
        </div>

        <div style="border-top:1px solid #e5e7eb;padding-top:1rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;font-size:0.75rem;color:#666;">
          <div>&copy; ${new Date().getFullYear()} First Open School. All rights reserved. Self-Canonical Page: ${escapeHtmlText(seo.canonicalUrl)}</div>
          <div>Strict COPPA, GDPR-K and FERPA Safety Compliance.</div>
        </div>

      </div>
    </footer>
  `;

  return `
    <div style="min-height:100vh;display:flex;flex-direction:column;background:#fcfbf8;">
      ${headerHtml}
      ${breadcrumbHtml}
      <main style="max-width:1200px;margin:0 auto;padding:0 1.5rem;flex:1;width:100%;box-sizing:border-box;">
        ${mainContentHtml}
      </main>
      ${footerHtml}
    </div>
  `;
}

/**
 * Injects route-specific SEO tags into raw HTML on the server.
 * Guarantees that Raw HTML and Rendered HTML have identical Self-Canonical URLs,
 * titles, meta descriptions, OpenGraph tags, JSON-LD schemas, and indexable body text.
 */
export function injectSeoIntoHtml(html: string, route: AppRoute, injectBody: boolean = true): string {
  const seo = getSeoMetadata(route);
  const fullImageUrl = seo.ogImage.startsWith('http')
    ? seo.ogImage
    : `${CANONICAL_DOMAIN}${seo.ogImage.startsWith('/') ? '' : '/'}${seo.ogImage}`;

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
  const jsonLdString = JSON.stringify(combinedJsonLd, null, 2);

  let modified = html;

  // 1. Replace Title
  if (/<title>.*?<\/title>/i.test(modified)) {
    modified = modified.replace(/<title>.*?<\/title>/i, `<title>${escapeHtmlText(seo.title)}</title>`);
  }

  // 2. Replace or Inject Self-Canonical Tag
  if (/<link\s+[^>]*rel=["']canonical["'][^>]*>/i.test(modified)) {
    modified = modified.replace(
      /<link\s+[^>]*rel=["']canonical["'][^>]*>/i,
      `<link rel="canonical" href="${escapeHtmlAttr(seo.canonicalUrl)}" />`
    );
  } else {
    modified = modified.replace(
      /<\/head>/i,
      `  <link rel="canonical" href="${escapeHtmlAttr(seo.canonicalUrl)}" />\n</head>`
    );
  }

  // 3. Robots Meta Tag (Always enforce index, follow)
  if (/<meta\s+[^>]*name=["']robots["'][^>]*>/i.test(modified)) {
    modified = modified.replace(
      /<meta\s+[^>]*name=["']robots["'][^>]*>/i,
      `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`
    );
  } else {
    modified = modified.replace(
      /<\/head>/i,
      `  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />\n</head>`
    );
  }

  // 4. Meta Description
  if (/<meta\s+[^>]*name=["']description["'][^>]*>/i.test(modified)) {
    modified = modified.replace(
      /<meta\s+[^>]*name=["']description["'][^>]*>/i,
      `<meta name="description" content="${escapeHtmlAttr(seo.description)}" />`
    );
  }

  // 5. OpenGraph URL
  if (/<meta\s+[^>]*property=["']og:url["'][^>]*>/i.test(modified)) {
    modified = modified.replace(
      /<meta\s+[^>]*property=["']og:url["'][^>]*>/i,
      `<meta property="og:url" content="${escapeHtmlAttr(seo.canonicalUrl)}" />`
    );
  }

  // 6. OpenGraph Title
  if (/<meta\s+[^>]*property=["']og:title["'][^>]*>/i.test(modified)) {
    modified = modified.replace(
      /<meta\s+[^>]*property=["']og:title["'][^>]*>/i,
      `<meta property="og:title" content="${escapeHtmlAttr(seo.ogTitle)}" />`
    );
  }

  // 7. OpenGraph Description
  if (/<meta\s+[^>]*property=["']og:description["'][^>]*>/i.test(modified)) {
    modified = modified.replace(
      /<meta\s+[^>]*property=["']og:description["'][^>]*>/i,
      `<meta property="og:description" content="${escapeHtmlAttr(seo.ogDescription)}" />`
    );
  }

  // 8. OpenGraph Type
  if (/<meta\s+[^>]*property=["']og:type["'][^>]*>/i.test(modified)) {
    modified = modified.replace(
      /<meta\s+[^>]*property=["']og:type["'][^>]*>/i,
      `<meta property="og:type" content="${escapeHtmlAttr(seo.ogType)}" />`
    );
  }

  // 9. OpenGraph Image
  if (/<meta\s+[^>]*property=["']og:image["'][^>]*>/i.test(modified)) {
    modified = modified.replace(
      /<meta\s+[^>]*property=["']og:image["'][^>]*>/i,
      `<meta property="og:image" content="${escapeHtmlAttr(fullImageUrl)}" />`
    );
  }

  // 10. Twitter Tags
  if (/<meta\s+[^>]*name=["']twitter:title["'][^>]*>/i.test(modified)) {
    modified = modified.replace(
      /<meta\s+[^>]*name=["']twitter:title["'][^>]*>/i,
      `<meta name="twitter:title" content="${escapeHtmlAttr(seo.ogTitle)}" />`
    );
  }
  if (/<meta\s+[^>]*name=["']twitter:description["'][^>]*>/i.test(modified)) {
    modified = modified.replace(
      /<meta\s+[^>]*name=["']twitter:description["'][^>]*>/i,
      `<meta name="twitter:description" content="${escapeHtmlAttr(seo.ogDescription)}" />`
    );
  }

  // 11. Inject or replace JSON-LD structured data
  if (/<script\s+[^>]*id=["']seo-json-ld["'][^>]*>[\s\S]*?<\/script>/i.test(modified)) {
    modified = modified.replace(
      /<script\s+[^>]*id=["']seo-json-ld["'][^>]*>[\s\S]*?<\/script>/i,
      `<script id="seo-json-ld" type="application/ld+json">\n${jsonLdString}\n    </script>`
    );
  } else {
    modified = modified.replace(
      /<\/head>/i,
      `  <script id="seo-json-ld" type="application/ld+json">\n${jsonLdString}\n    </script>\n  </head>`
    );
  }

  // 12. Inject Crawlable Semantic Content into <div id="root">
  if (injectBody) {
    const semanticBody = renderSemanticRouteHtml(route);
    if (/<div id="root">[\s\S]*?<\/div>/i.test(modified)) {
      modified = modified.replace(
        /<div id="root">[\s\S]*?<\/div>/i,
        `<div id="root">\n${semanticBody}\n</div>`
      );
    }
  }

  return modified;
}

