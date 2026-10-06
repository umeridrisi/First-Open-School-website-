import { Poem, PoemCategory } from '../types';
import { CLASSIC_POEMS } from './poems/classics';
import { WORLD_RHYMES_POEMS } from './poems/worldRhymes';
import { ANIMALS_NATURE_POEMS } from './poems/animalsNature';
import { BEDTIME_LULLABIES_POEMS } from './poems/bedtimeLullabies';
import { FUN_PLAYFUL_POEMS } from './poems/funPlayful';
import { GOOD_HABITS_POEMS } from './poems/goodHabits';
import { SEASONS_WEATHER_POEMS } from './poems/seasonsWeather';
import { PAKISTANI_RHYMES_POEMS } from './poems/pakistaniRhymes';

export interface PoemCategoryInfo {
  id: PoemCategory;
  label: string;
  icon: string;
  description: string;
  badgeColor: string;
  badgeBg: string;
}

export const POEM_CATEGORIES: PoemCategoryInfo[] = [
  {
    id: 'classics-rhymes',
    label: 'Classics & Nursery Rhymes',
    icon: '⭐',
    description: 'Timeless traditional rhymes with strong rhythm, steady cadence, and memorable phrases.',
    badgeColor: '#4D96FF',
    badgeBg: 'bg-blue-100 text-blue-800 border-blue-300'
  },
  {
    id: 'pakistani-rhymes',
    label: 'Pakistani Poems & Rhymes',
    icon: '🇵🇰',
    description: 'Beloved classic Urdu rhymes, moral poems by Allama Iqbal, counting games, and cultural verses from Pakistan.',
    badgeColor: '#10B981',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  {
    id: 'world-rhymes',
    label: 'Rhymes Around the World',
    icon: '🌍',
    description: 'Enchanting traditional folk poems, clapping games, and cultural verses from diverse nations across the globe.',
    badgeColor: '#EC4899',
    badgeBg: 'bg-pink-100 text-pink-800 border-pink-300'
  },
  {
    id: 'animals-nature',
    label: 'Animals & Nature Poems',
    icon: '🐛',
    description: 'Delightful verses about caterpillars, friendly cows, songbirds, spiders, and the natural outdoors.',
    badgeColor: '#6BCB77',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  {
    id: 'bedtime-lullabies',
    label: 'Bedtime & Lullabies',
    icon: '🌙',
    description: 'Gentle, soothing poems for evening calm, bedtime routines, and dreaming peacefully under the stars.',
    badgeColor: '#8B5CF6',
    badgeBg: 'bg-purple-100 text-purple-800 border-purple-300'
  },
  {
    id: 'fun-whimsical',
    label: 'Fun & Playful Verses',
    icon: '🎈',
    description: 'Giggle-filled bouncy poems with counting, clapping, silly actions, and energetic wordplay.',
    badgeColor: '#FF6B6B',
    badgeBg: 'bg-rose-100 text-rose-800 border-rose-300'
  },
  {
    id: 'good-habits',
    label: 'Manners & Daily Habits',
    icon: '🧼',
    description: 'Catchy rhyming verses teaching brushing teeth, hand-washing, magic polite words, and sharing.',
    badgeColor: '#F59E0B',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-300'
  },
  {
    id: 'seasons-weather',
    label: 'Seasons & Weather',
    icon: '🌦️',
    description: 'Vivid verses celebrating raindrops, golden autumn leaves, morning sunshine, rainbows, and winter breezes.',
    badgeColor: '#06B6D4',
    badgeBg: 'bg-cyan-100 text-cyan-800 border-cyan-300'
  }
];

export const POEMS_DATA: Poem[] = [
  ...CLASSIC_POEMS,
  ...PAKISTANI_RHYMES_POEMS,
  ...WORLD_RHYMES_POEMS,
  ...ANIMALS_NATURE_POEMS,
  ...BEDTIME_LULLABIES_POEMS,
  ...FUN_PLAYFUL_POEMS,
  ...GOOD_HABITS_POEMS,
  ...SEASONS_WEATHER_POEMS
];

/**
 * Finds a poem by its URL slug ID
 */
export function getPoemById(id: string): Poem | undefined {
  return POEMS_DATA.find(p => p.id === id);
}

/**
 * Finds all poems belonging to a specific category
 */
export function getPoemsByCategory(category: PoemCategory): Poem[] {
  return POEMS_DATA.filter(p => p.category === category);
}
