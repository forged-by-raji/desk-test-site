// The groups shaped as cards with their photos. Used on the home page and the Classes page.
import { groups } from '../domain/facts.ts';
import type { Group } from '../domain/facts.ts';
import { AI } from '../../../shared/photos.ts';
import type { Pic } from '../../../shared/photos.ts';

export type GroupCard = Group & { pic: Pic };

export function groupCards(): GroupCard[] {
  return groups.map((g) => ({
    ...g,
    pic: {
      id: g.id === 'kickers' ? 'little-kickers' : g.id === 'juniors' ? 'master' : 'adults',
      alt: `${g.name}, ${g.ages}${AI}`,
      position: g.id === 'kickers' ? '50% 45%' : g.id === 'juniors' ? '70% 80%' : '45% 50%',
    },
  }));
}
