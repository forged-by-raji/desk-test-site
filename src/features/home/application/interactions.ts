// What moves on the home page (motion level 2). Content is on the page from the start; this only moves it.
export function startHome(): void {
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Sections rise into view once.
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
  document.querySelectorAll('.rise').forEach((el) => (still ? el.classList.add('in') : io.observe(el)));

  // A light scroll move on the hero photos.
  const par = [...document.querySelectorAll<HTMLElement>('[data-par]')];
  if (!still) {
    let ticking = false;
    const move = () => { const y = Math.min(scrollY, 900); par.forEach((img, i) => { img.style.transform = `translateY(${-y * (0.04 + i * 0.015)}px)`; }); ticking = false; };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(move); } }, { passive: true });
  }

  // Each phase name shows its photo: beside the row with a mouse (CSS), in place with a tap or a key.
  const rows = [...document.querySelectorAll<HTMLElement>('.round')];
  for (const row of rows) {
    const btn = row.querySelector('button')!;
    btn.addEventListener('click', () => {
      const open = row.dataset.open !== 'true';
      for (const r of rows) { r.dataset.open = 'false'; r.querySelector('button')!.setAttribute('aria-expanded', 'false'); }
      if (open) { row.dataset.open = 'true'; btn.setAttribute('aria-expanded', 'true'); }
    });
  }
}
