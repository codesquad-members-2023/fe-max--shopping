let start = null;
const element = document.getElementById('box');
element.style.position = 'absolute';

function step(timestamp) {
  if (!start) start = timestamp;
  const progress = timestamp - start;
  element.style.left = `${Math.min(progress / 10, 200)}px`;
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);