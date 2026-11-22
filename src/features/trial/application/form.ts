// The booking form in the browser: offer the chosen group's days, check the fields, then open
// WhatsApp with the booking ready to send, and show what happens next.
import { gym } from '../../gym/domain/facts.ts';
import { daysFor, message, problems } from '../domain/booking.ts';
import type { Booking } from '../domain/booking.ts';

export function startForm(): void {
  const form = document.querySelector<HTMLFormElement>('#book');
  if (!form) return;
  const group = form.elements.namedItem('group') as HTMLSelectElement;
  const day = form.elements.namedItem('day') as HTMLSelectElement;
  const errors = form.querySelector<HTMLElement>('.errors')!;
  const done = document.querySelector<HTMLElement>('.done')!;

  const fillDays = () => {
    const days = daysFor(group.value as Booking['group']);
    day.replaceChildren(new Option(days.length ? 'Choose a day' : 'Choose who is coming first', ''), ...days.map((d) => new Option(d, d)));
    day.disabled = !days.length;
  };
  group.addEventListener('change', fillDays);
  fillDays();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const b: Booking = { name: String(data.get('name') ?? ''), group: String(data.get('group') ?? '') as Booking['group'], day: String(data.get('day') ?? ''), phone: String(data.get('phone') ?? '') };
    const found = problems(b);
    errors.replaceChildren(...found.map((p) => Object.assign(document.createElement('li'), { textContent: p })));
    if (found.length) { errors.hidden = false; errors.focus(); return; }
    errors.hidden = true;
    window.open(`${gym.whatsapp.href}?text=${encodeURIComponent(message(b))}`, '_blank', 'noopener');
    done.hidden = false;
    done.focus();
  });
}
