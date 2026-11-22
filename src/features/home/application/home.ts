// The home page's state: the facts shaped for each section, and the photo and words for each picture.
// The ui files only read from this.
import { coaches, freeClass, glance, groups, gym, plans, rounds } from '../../gym/domain/facts.ts';
import { groupCards } from '../../gym/application/cards.ts';
import type { Pic } from '../../../shared/photos.ts';
import { AI } from '../../../shared/photos.ts';

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
    week: groupCards(),
    freeClass,
    plans,
    coaches: coaches.map((c) => ({ ...c, pic: { id: c.photo, alt: `${c.name}, ${c.role.split('.')[0].toLowerCase()}${AI}` } satisfies Pic })),
  };
}
