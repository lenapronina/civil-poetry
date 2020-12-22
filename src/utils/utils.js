const animateTicker = (item, innerElementSelector, duration) => {
  const outerElement = item;
  const innerEl = outerElement.querySelector(innerElementSelector);
  const innerWidth = innerEl.offsetWidth;
  const cloneEl = innerEl.cloneNode(true);
  outerElement.appendChild(cloneEl);

  let start = performance.now();
  let progress;
  let translateX;

  requestAnimationFrame(function step(now) {
    progress = (now - start) / duration;

    if (progress > 1) {
      progress %= 1;
      start = now;
    }

    translateX = innerWidth * progress;

    innerEl.style.transform = `translate(-${translateX}px, 0 )`;
    cloneEl.style.transform = `translate(-${translateX}px, 0 )`;
    requestAnimationFrame(step);
  });
}

export { animateTicker };
