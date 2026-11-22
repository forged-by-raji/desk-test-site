// The Free trial page's state.
import { groups, gym, trialPage } from '../../gym/domain/facts.ts';
import { daysFor } from '../domain/booking.ts';
import { AI } from '../../../shared/photos.ts';
import type { Pic } from '../../../shared/photos.ts';

export function useTrialScreen() {
  return {
    page: trialPage,
    address: gym.address,
    groups: groups.map((g) => ({ id: g.id, label: `${g.name}, ${g.ages}`, days: daysFor(g.id) })),
    pic: { id: 'master', alt: `A juniors class throwing a jab together on the blue mats${AI}`, position: '70% 60%' } satisfies Pic,
  };
}
