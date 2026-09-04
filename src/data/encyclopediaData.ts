import { EncyclopediaEntry, EncyclopediaCategory } from '../types';
import { ALPHABETS_ENTRIES } from './encyclopedia/alphabets';
import { NUMBERS_ENTRIES } from './encyclopedia/numbers';
import { SPACE_ENTRIES } from './encyclopedia/space';
import { NATURE_ENTRIES } from './encyclopedia/nature';
import { ANIMALS_ENTRIES } from './encyclopedia/animals';
import { HUMAN_BODY_ENTRIES } from './encyclopedia/humanBody';
import { HOW_THINGS_WORK_ENTRIES } from './encyclopedia/howThingsWork';
import { GEOGRAPHY_ENTRIES } from './encyclopedia/geography';

export const ENCYCLOPEDIA_CATEGORIES: { 
  id: EncyclopediaCategory; 
  label: string; 
  icon: string; 
  description: string; 
  badgeColor: string;
  count?: number;
}[] = [
  {
    id: 'alphabets',
    label: 'Alphabets A-Z',
    icon: '🔤',
    description: 'Every letter from A to Z explained with analogies, phonics, mouth shapes, and ancient origins.',
    badgeColor: 'bg-[#FF6B6B]/15 text-[#FF6B6B] border-[#FF6B6B]'
  },
  {
    id: 'numbers',
    label: 'Numbers & Math',
    icon: '🔢',
    description: 'From magical Zero to cosmic Infinity, fractions, shapes, and counting superpowers.',
    badgeColor: 'bg-[#6BCB77]/15 text-[#6BCB77] border-[#6BCB77]'
  },
  {
    id: 'solar-system',
    label: 'Solar System & Space',
    icon: '🪐',
    description: 'Blasting off through the Sun, Moon, ringed planets, black holes, and space rockets.',
    badgeColor: 'bg-[#4D96FF]/15 text-[#4D96FF] border-[#4D96FF]'
  },
  {
    id: 'earth-elements',
    label: 'Earth & Nature',
    icon: '🌍',
    description: 'Water cycle, rainbows, volcanoes, lightning, trees, photosynthesis, and the four seasons.',
    badgeColor: 'bg-[#FFD93D]/25 text-[#2D2D2D] border-[#FFD93D]'
  },
  {
    id: 'animals-dinosaurs',
    label: 'Animals & Dinosaurs',
    icon: '🦖',
    description: 'T-Rex, Blue Whales, Honeybees, Chameleons, Cheetahs, Owls, Butterflies, and Octopuses.',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  {
    id: 'human-body',
    label: 'Human Body & Senses',
    icon: '🧠',
    description: 'The brain supercomputer, pumping heart, 5 senses, skeleton scaffolding, and breathing lungs.',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300'
  },
  {
    id: 'how-things-work',
    label: 'How Things Work',
    icon: '⚙️',
    description: 'Inventions decoded: How airplanes fly, the internet works, clocks tick, and bridges stand.',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300'
  },
  {
    id: 'countries-world',
    label: 'World & Continents',
    icon: '🗺️',
    description: 'The 7 continents, vast oceans, Great Wall of China, Mount Everest, Egypt, and Antarctica.',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300'
  }
];

export const ENCYCLOPEDIA_ENTRIES: EncyclopediaEntry[] = [
  ...ALPHABETS_ENTRIES,
  ...NUMBERS_ENTRIES,
  ...SPACE_ENTRIES,
  ...NATURE_ENTRIES,
  ...ANIMALS_ENTRIES,
  ...HUMAN_BODY_ENTRIES,
  ...HOW_THINGS_WORK_ENTRIES,
  ...GEOGRAPHY_ENTRIES
];

// Helper to look up an entry by ID
export function getEncyclopediaEntryById(id: string): EncyclopediaEntry | undefined {
  return ENCYCLOPEDIA_ENTRIES.find(entry => entry.id.toLowerCase() === id.toLowerCase());
}

// Helper to get entries by category
export function getEncyclopediaEntriesByCategory(category: EncyclopediaCategory): EncyclopediaEntry[] {
  return ENCYCLOPEDIA_ENTRIES.filter(entry => entry.category === category);
}
