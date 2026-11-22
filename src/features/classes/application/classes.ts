// The Classes and times page's state.
import { board, classesPage, dayNames, groups } from '../../gym/domain/facts.ts';
import { groupCards } from '../../gym/application/cards.ts';
import { AI } from '../../../shared/photos.ts';
import type { Pic } from '../../../shared/photos.ts';

export function useClassesScreen() {
  const rows = board(groups);
  return {
    page: classesPage,
    days: rows[0]?.cells.map((c) => ({ short: c.day, name: dayNames[c.day] })) ?? [],
    rows,
    // The same week, read by day, for phones where a six column board does not fit.
    byDay: (rows[0]?.cells ?? []).map((_, i) => ({
      name: dayNames[rows[0].cells[i].day],
      classes: rows.flatMap((r) => r.cells[i].groups.map((g) => ({ time: r.time, group: g }))),
    })).filter((d) => d.classes.length),
    cards: groupCards(),
    windows: [
      { caption: 'Little Kickers', pic: { id: 'little-kickers', alt: `Little Kickers jumping a skipping rope, laughing${AI}`, position: '60% 35%' } },
      { caption: 'Adults', pic: { id: 'adults', alt: `Adult beginners kicking the heavy bags in the evening${AI}`, position: '40% 50%' } },
    ] satisfies { caption: string; pic: Pic }[],
    closingPic: { id: 'pads', alt: `Coach Dana kneeling to hold pads for a boy throwing a punch${AI}`, position: '50% 30%' } satisfies Pic,
    bringPic: { id: 'gloves', alt: `Kids' gloves and rolled hand wraps on the blue mat${AI}` } satisfies Pic,
  };
}
