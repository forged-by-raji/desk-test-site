// The free trial booking: what the form holds, whether it is complete, and the message it sends.
// Until the gym has somewhere to receive bookings, the form opens WhatsApp with this message ready.
import { groups } from '../../gym/domain/facts.ts';
import type { GroupId } from '../../gym/domain/facts.ts';

export interface Booking { name: string; group: GroupId | ''; day: string; phone: string }

// Each group's days, in week order, as the form offers them.
export function daysFor(group: GroupId | ''): string[] {
  const g = groups.find((x) => x.id === group);
  if (!g) return [];
  return [...new Set(g.slots.flatMap((s) => s.on.map((d) => `${d} ${s.time}`)))];
}

export function problems(b: Booking): string[] {
  const out: string[] = [];
  if (b.name.trim().length < 2) out.push('Add a name.');
  if (!b.group) out.push('Choose who is coming.');
  else if (!daysFor(b.group).includes(b.day)) out.push('Choose a day.');
  if (b.phone.replace(/\D/g, '').length < 7) out.push('Add a phone number we can call.');
  return out;
}

export function message(b: Booking): string {
  const g = groups.find((x) => x.id === b.group);
  return `Hi, I would like to book a free first class.\nName: ${b.name.trim()}\nGroup: ${g ? g.name : ''}\nDay: ${b.day}\nPhone: ${b.phone.trim()}`;
}
