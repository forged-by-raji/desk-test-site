import assert from 'node:assert/strict';
import { test } from 'node:test';
import { coaches, glance, groups, gym, plans, rounds } from './facts.ts';

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
  const words = JSON.stringify({ gym, groups, rounds, plans, coaches });
  assert.ok(!/[‒-―]| - /.test(words));
});
