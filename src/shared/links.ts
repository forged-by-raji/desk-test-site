// Where each link goes. Slice 1 has only the home page, so the section links point to its
// sections, and booking goes to WhatsApp with a ready message until the free trial page lands (slice 3).
import { gym } from '../features/gym/domain/facts.ts';

export const links = {
  classes: '/#week',
  prices: '/#prices',
  coaches: '/#coaches',
  book: `${gym.whatsapp.href}?text=${encodeURIComponent('Hi, I would like to book a free first class.')}`,
};
