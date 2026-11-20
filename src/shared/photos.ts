// The gym's photos. All are AI generated from one master (made up gym, see direction-sheet.md item 6).
import type { ImageMetadata } from 'astro';
import type { PhotoId } from '../features/gym/domain/facts.ts';
import master from '../assets/photos/master.png';
import pads from '../assets/photos/pads.png';
import littleKickers from '../assets/photos/little-kickers.png';
import adults from '../assets/photos/adults.png';
import coachDana from '../assets/photos/coach-dana.png';
import coachMarco from '../assets/photos/coach-marco.png';
import gloves from '../assets/photos/gloves.png';
import timer from '../assets/photos/timer.png';

export const photos: Record<PhotoId, ImageMetadata> = {
  master, pads, 'little-kickers': littleKickers, adults, 'coach-dana': coachDana, 'coach-marco': coachMarco, gloves, timer,
};
