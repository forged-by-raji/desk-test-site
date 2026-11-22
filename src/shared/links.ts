// Where each link goes. Coaches is a section of the home page, and booking goes to WhatsApp with a
// ready message, until the Coaches and Free trial pages land (slice 3).
import { gym } from '../features/gym/domain/facts.ts';

export const links = {
  classes: '/classes/',
  prices: '/prices/',
  coaches: '/#coaches',
  book: `${gym.whatsapp.href}?text=${encodeURIComponent('Hi, I would like to book a free first class.')}`,
};
