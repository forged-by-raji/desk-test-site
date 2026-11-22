// The Prices page's state.
import { pricesPage } from '../../gym/domain/facts.ts';
import { AI } from '../../../shared/photos.ts';
import type { Pic } from '../../../shared/photos.ts';

export function usePricesScreen() {
  return {
    page: pricesPage,
    windows: [
      { caption: 'Pads', pic: { id: 'pads', alt: `Coach Dana kneeling to hold pads for a boy throwing a punch${AI}`, position: '55% 30%' } },
      { caption: 'Juniors', pic: { id: 'master', alt: `A juniors class throwing a jab together on the blue mats${AI}`, position: '72% 100%' } },
    ] satisfies { caption: string; pic: Pic }[],
    closingPic: { id: 'gloves', alt: `Kids' gloves and hand wraps on the blue mat${AI}` } satisfies Pic,
  };
}
