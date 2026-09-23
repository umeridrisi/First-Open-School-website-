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
    description: 'Zero, Pi, Fibonacci spirals, addition, multiplication, fractions, clocks, money, geometry, and infinity.',
    badgeColor: 'bg-[#6BCB77]/15 text-[#6BCB77] border-[#6BCB77]'
  },
  {
    id: 'solar-system',
    label: 'Solar System & Space',
    icon: '🪐',
    description: 'All 8 planets, Pluto, the Milky Way, comets, asteroids, James Webb telescope, and astronauts.',
    badgeColor: 'bg-[#4D96FF]/15 text-[#4D96FF] border-[#4D96FF]'
  },
  {
    id: 'earth-elements',
    label: 'Earth & Nature',
    icon: '🌍',
    description: 'Photosynthesis, trees, earthquakes, tornadoes, coral reefs, rocks, fossils, auroras, glaciers, and seasons.',
    badgeColor: 'bg-[#FFD93D]/25 text-[#2D2D2D] border-[#FFD93D]'
  },
  {
    id: 'animals-dinosaurs',
    label: 'Animals & Dinosaurs',
    icon: '🦖',
    description: 'T-Rex, Blue Whales, Polar Bears, Cheetahs, Lions, Honeybees, Sea Turtles, Elephants, and Octopuses.',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  {
    id: 'human-body',
    label: 'Human Body & Senses',
    icon: '🧠',
    description: 'Brain, heart, lungs, skeleton, eyes, ears, skin, liver, kidneys, spine, sleep, and immune defenses.',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300'
  },
  {
    id: 'how-things-work',
    label: 'How Things Work',
    icon: '⚙️',
    description: 'Airplanes, the internet, smartphones, touchscreens, electric cars, solar panels, magnets, robots, and bridges.',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300'
  },
  {
    id: 'countries-world',
    label: 'World & Continents',
    icon: '🗺️',
    description: 'The 7 continents, world oceans, Pakistan, UK, USA, Canada, Japan, Brazil, France, Egypt, and Australia.',
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
