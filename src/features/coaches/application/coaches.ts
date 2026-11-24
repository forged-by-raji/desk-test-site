// The Coaches page's state.
import { coaches, coachesPage } from '../../gym/domain/facts.ts';
import { AI } from '../../../shared/photos.ts';
import type { Pic } from '../../../shared/photos.ts';

export function useCoachesScreen() {
  return {
    page: coachesPage,
    windows: [
      { caption: 'Dana with a junior', pic: { id: 'pads', alt: `Coach Dana kneeling to hold pads for a boy${AI}`, position: '55% 30%' } },
      { caption: 'Marco with Little Kickers', pic: { id: 'little-kickers', alt: `Coach Marco holding the rope for Little Kickers${AI}`, position: '20% 40%' } },
    ] satisfies { caption: string; pic: Pic }[],
    coaches: coaches.map((c) => ({ ...c, pic: { id: c.photo, alt: `${c.name}, ${c.role.split('.')[0].toLowerCase()}${AI}` } satisfies Pic })),
  };
}
