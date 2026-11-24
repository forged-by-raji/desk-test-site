import assert from 'node:assert/strict';
import { test } from 'node:test';
import { daysFor, message, problems } from './booking.ts';

test('each group offers only its own days', () => {
  assert.deepEqual(daysFor('kickers'), ['Mon 4:30 PM', 'Wed 4:30 PM']);
  assert.deepEqual(daysFor('adults'), ['Mon 7:00 PM', 'Wed 7:00 PM', 'Sat 10:00 AM']);
  assert.deepEqual(daysFor(''), []);
});

test('a booking is complete only with a name, a group, one of its days and a phone', () => {
  assert.equal(problems({ name: 'Ada', group: 'juniors', day: 'Tue 5:30 PM', phone: '+1 555 0100' }).length, 0);
  assert.equal(problems({ name: 'Ada', group: 'juniors', day: 'Mon 4:30 PM', phone: '+1 555 0100' }).length, 1);
  assert.equal(problems({ name: '', group: '', day: '', phone: '12' }).length, 3);
});

test('the message carries every field', () => {
  const m = message({ name: ' Ada ', group: 'kickers', day: 'Wed 4:30 PM', phone: '555 0100' });
  assert.match(m, /Name: Ada\nGroup: Little Kickers\nDay: Wed 4:30 PM\nPhone: 555 0100$/);
});
