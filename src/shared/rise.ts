// Sections rise into view once. The photos in an inner page's head and the closing photo move
// lightly with the scroll. Content is on the page from the start; this only moves it.
export function startRise(): void {
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
  document.querySelectorAll('.rise').forEach((el) => (still ? el.classList.add('in') : io.observe(el)));
  if (still) return;
  const head = [...document.querySelectorAll<HTMLElement>('.pagehead [data-par], .trial .window [data-par]')];
  const close = [...document.querySelectorAll<HTMLElement>('.close-pic [data-par]')];
  let ticking = false;
  const move = () => {
    // Same feel as the home hero: the head photos drift up a little as the page scrolls.
    const y = Math.min(scrollY, 900);
    head.forEach((img, i) => { img.style.transform = `translateY(${-y * (0.04 + i * 0.015)}px)`; });
    for (const img of close) { const r = img.parentElement!.getBoundingClientRect(); const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - innerHeight / 2) / innerHeight)); img.style.transform = `translateY(${p * -4}%)`; }
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(move); } }, { passive: true });
  move();
}
