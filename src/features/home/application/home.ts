// The home page's state: the facts shaped for each section, and the photo and words for each picture.
// The ui files only read from this.
import { closing, coaches, freeClass, glance, groups, gym, plans, rounds } from '../../gym/domain/facts.ts';
import type { PhotoId } from '../../gym/domain/facts.ts';

export interface Pic { id: PhotoId; alt: string; position?: string }

const AI = ' (AI generated)';

export function useHomeScreen() {
  return {
    gym,
    hero: {
      headline: gym.headline,
      line: gym.line,
      glance: groups.map((g) => ({ id: g.id, label: g.id === 'adults' ? g.name : g.tag, when: glance(g) })),
      windows: [
        { caption: 'Juniors', pic: { id: 'master', alt: `A juniors class throwing a jab together on the blue mats, a coach calling the count${AI}`, position: '72% 100%' } },
        { caption: 'Pads', pic: { id: 'pads', alt: `Coach Dana kneeling to hold pads for a boy throwing a punch${AI}`, position: '55% 30%' } },
        { caption: 'Little Kickers', pic: { id: 'little-kickers', alt: `Little Kickers jumping a skipping rope held by Coach Marco, laughing${AI}`, position: '60% 35%' } },
      ] satisfies { caption: string; pic: Pic }[],
    },
    rounds: rounds.map((r) => ({ ...r, pic: { id: r.photo, alt: `${r.name}: ${r.what}${AI}` } satisfies Pic })),
    classNote: gym.classNote,
    week: groups.map((g) => ({
      ...g,
      pic: {
        id: g.id === 'kickers' ? 'little-kickers' : g.id === 'juniors' ? 'master' : 'adults',
        alt: `${g.name}, ${g.ages}${AI}`,
        position: g.id === 'kickers' ? '50% 45%' : g.id === 'juniors' ? '70% 80%' : '45% 50%',
      } satisfies Pic,
    })),
    freeClass,
    plans,
    coaches: coaches.map((c) => ({ ...c, pic: { id: c.photo, alt: `${c.name}, ${c.role.split('.')[0].toLowerCase()}${AI}` } satisfies Pic })),
    closing: { title: closing, pic: { id: 'gloves', alt: `Kids' gloves and hand wraps on the blue mat${AI}` } satisfies Pic },
  };
}
