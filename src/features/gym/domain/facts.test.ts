import assert from 'node:assert/strict';
import { test } from 'node:test';
import { board, coaches, glance, groups, gym, minutes, plans, pricesPage, rounds } from './facts.ts';

test('the week at a glance reads the same as the approved still', () => {
  assert.deepEqual(groups.map(glance), ['Mon, Wed 4:30 PM', 'Tue, Thu 5:30 PM', 'Mon, Wed 7 PM, Sat 10 AM']);
});

test('twelve rounds, in order, with no gap or overlap', () => {
  const spans = rounds.map((r) => r.rounds.match(/(\d+) to (\d+)/)!.slice(1).map(Number));
  assert.equal(spans[0][0], 1);
  for (let i = 1; i < spans.length; i++) assert.equal(spans[i][0], spans[i - 1][1] + 1);
  assert.equal(spans.at(-1)![1], 12);
});

test('times are written one way: h:mm PM', () => {
  for (const g of groups) for (const s of g.slots) assert.match(s.time, /^\d{1,2}:\d{2} (AM|PM)$/, s.time);
});

test('no dashes in anything the site says', () => {
  const words = JSON.stringify({ gym, groups, rounds, plans, coaches, pricesPage });
  assert.ok(!/[‒-―]| - /.test(words));
});

test('the wall board: one row per time, earliest first, groups on their own days only', () => {
  const b = board(groups);
  assert.deepEqual(b.map((r) => r.time), ['10:00 AM', '4:30 PM', '5:30 PM', '7:00 PM']);
  const at = (time: string, day: string) => b.find((r) => r.time === time)!.cells.find((c) => c.day === day)!.groups.map((g) => g.id);
  assert.deepEqual(at('4:30 PM', 'Mon'), ['kickers']);
  assert.deepEqual(at('4:30 PM', 'Tue'), []);
  assert.deepEqual(at('5:30 PM', 'Thu'), ['juniors']);
  assert.deepEqual(at('10:00 AM', 'Sat'), ['adults']);
  assert.throws(() => minutes('half five'));
});

test('the day words and the day list say the same thing', () => {
  for (const g of groups) for (const s of g.slots) assert.equal(s.short, s.on.join(', '));
});
