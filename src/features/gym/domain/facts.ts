// Every fact the site shows, in one place. The Desk changes a time, a price or a line here,
// and every page that shows it follows. Source of each: copy.md (approved 20 Nov 2026).
// This gym is made up for testing.

export type GroupId = 'kickers' | 'juniors' | 'adults';

export type Day = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
export const week: Day[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const dayNames: Record<Day, string> = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday' };

// "days" drives the wall board; "label" is how the copy says it.
export interface Slot { on: Day[]; days: string; short: string; time: string }
export interface Group { id: GroupId; name: string; ages: string; tag: string; slots: Slot[] }
export interface Plan { who: string; price: number; per: string; what: string }
export interface Round { rounds: string; name: string; what: string; photo: PhotoId }
export interface Coach { name: string; role: string; quote: string; facts: string[]; photo: PhotoId }

export type PhotoId = 'master' | 'pads' | 'little-kickers' | 'adults' | 'coach-dana' | 'coach-marco' | 'gloves' | 'timer';

export const gym = {
  name: 'Test Gym Kickboxing',
  address: '12 Example Street, Testville',
  whatsapp: { label: '+1 555 0142', href: 'https://wa.me/15550142' },
  headline: ['One hour.', 'Twelve rounds.', 'First class free.'],
  line: 'Kickboxing for kids aged 6 to 13 and for adult beginners, at 12 Example Street, Testville.',
  action: 'Book your first class free',
  classNote: 'One hour, twelve rounds of three minutes on and one minute rest, with the bell between.',
  made: 'Test Gym Kickboxing is a made up gym for testing. Every photo on this page is AI generated.',
};

export const groups: Group[] = [
  { id: 'kickers', name: 'Little Kickers', ages: 'ages 6 to 8', tag: 'Little Kickers, 6 to 8', slots: [{ on: ['Mon', 'Wed'], days: 'Mondays and Wednesdays', short: 'Mon, Wed', time: '4:30 PM' }] },
  { id: 'juniors', name: 'Juniors', ages: 'ages 9 to 13', tag: 'Juniors, 9 to 13', slots: [{ on: ['Tue', 'Thu'], days: 'Tuesdays and Thursdays', short: 'Tue, Thu', time: '5:30 PM' }] },
  { id: 'adults', name: 'Adults', ages: 'beginners', tag: 'Adults', slots: [{ on: ['Mon', 'Wed'], days: 'Mondays and Wednesdays', short: 'Mon, Wed', time: '7:00 PM' }, { on: ['Sat'], days: 'Saturdays', short: 'Sat', time: '10:00 AM' }] },
];

export const classesPage = {
  title: 'Classes and times',
  line: 'Pick your group and a day. Your first class is free.',
  bring: 'Comfortable clothes, a water bottle and bare feet on the mat. Gloves and pads are lent for your first class.',
};

export const pricesPage = {
  title: 'Prices',
  free: { head: 'Your first class is free.', line: 'Come once, then decide.' },
  plans: [
    { who: 'Kids', price: 60, per: 'a month', what: 'Two classes a week, for Little Kickers or Juniors.' },
    { who: 'Adults', price: 70, per: 'a month', what: 'Any adult class.' },
    { who: 'Drop in', price: 15, per: 'a class', what: 'One class, no plan.' },
  ] satisfies Plan[],
  noContract: 'No contract. Plans run month to month, and you can stop with one message.',
};

export const rounds: Round[] = [
  { rounds: 'Round 1 to 2', name: 'Warm up', what: 'Skipping, footwork, getting loose.', photo: 'little-kickers' },
  { rounds: 'Round 3 to 5', name: 'Pads', what: 'Punches and kicks with a coach holding pads.', photo: 'pads' },
  { rounds: 'Round 6 to 8', name: 'Bag', what: 'Combinations on the bag.', photo: 'adults' },
  { rounds: 'Round 9 to 10', name: 'Games', what: 'Drills that feel like play.', photo: 'master' },
  { rounds: 'Round 11 to 12', name: 'Cool down', what: 'Stretching, and a word from the coach.', photo: 'timer' },
];

export const plans: Plan[] = [
  { who: 'Kids', price: 60, per: 'a month', what: 'Two classes a week.' },
  { who: 'Adults', price: 70, per: 'a month', what: 'Any class.' },
  { who: 'Drop in', price: 15, per: 'a class', what: 'One class, no plan.' },
];

export const freeClass = 'Your first class is free, whichever you choose.';

export const coaches: Coach[] = [
  { name: 'Dana Okafor', role: 'Head coach. Teaches Little Kickers and Juniors.', quote: 'Kids learn fastest when the class feels like a game they want to win.', facts: ['Ten years coaching', 'First aid certified, background checked', 'Favourite drill: the reaction ball'], photo: 'coach-dana' },
  { name: 'Marco Lind', role: 'Adults coach. Teaches every adult class.', quote: 'Your first round is the hardest. After that you are just coming back for more.', facts: ['Eight years coaching', 'First aid certified, background checked', 'Favourite drill: three minute pad rounds'], photo: 'coach-marco' },
];

export const closing = 'Come and try a class.';

// The short line used in the hero's week at a glance: "Mon, Wed 4:30 PM" or "Mon, Wed 7 PM, Sat 10 AM".
export function glance(g: Group): string {
  const short = (t: string) => t.replace(':00', '');
  return g.slots.map((s) => `${s.on.join(', ')} ${g.slots.length > 1 ? short(s.time) : s.time}`).join(', ');
}

// Minutes after midnight, so the board can sort by time.
export function minutes(time: string): number {
  const m = /^(\d{1,2}):(\d{2}) (AM|PM)$/.exec(time);
  if (!m) throw new Error(`Not a time: "${time}"`);
  return (Number(m[1]) % 12 + (m[3] === 'PM' ? 12 : 0)) * 60 + Number(m[2]);
}

export interface BoardRow { time: string; cells: { day: Day; groups: Group[] }[] }

// The wall board: one row per class time, earliest first, one cell per day of the week.
export function board(gs: Group[]): BoardRow[] {
  const times = [...new Set(gs.flatMap((g) => g.slots.map((s) => s.time)))].sort((a, b) => minutes(a) - minutes(b));
  return times.map((time) => ({
    time,
    cells: week.map((day) => ({ day, groups: gs.filter((g) => g.slots.some((s) => s.time === time && s.on.includes(day))) })),
  }));
}

export const coachesPage = { title: 'Your coaches', line: 'Who teaches your child, and why you can trust them.' };

export const trialPage = {
  title: 'Your first class is free',
  steps: [
    { name: 'Book', what: 'Tell us who is coming and which day suits.' },
    { name: 'Come along', what: 'Arrive ten minutes early.' },
    { name: 'Decide', what: 'Join if you liked it, with no pressure.' },
  ],
  button: 'Book my free class',
  after: 'Thanks. We will call you within a day to confirm.',
};
