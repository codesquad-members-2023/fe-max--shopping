import { createButtonEl } from "./button.js";

const navLoginTabEl = document.querySelector(".nav-bar__main-login");
const loginModalEl = createLoginModalEl();

export function initLoginModal() {
  navLoginTabEl.append(loginModalEl);
  delayedCallback(() => requestAnimationFrame(slowShowing.bind(null, "modal-login", 0, "opacity")), 1000);
}

function createLoginModalEl() {
  const modalEl = createModalEl("modal-login");
  const btnEl = createButtonEl("로그인");
  const captionEl = createCaptionEl();

  modalEl.append(btnEl);
  btnEl.insertAdjacentHTML("afterend", captionEl);

  return modalEl;
}

function createModalEl(className) {
  const modalEl = document.createElement("div");
  modalEl.className = className;
  return modalEl;
}

function createCaptionEl() {
  return `<span>기존 사용자가 아니십니까?<a href="">여기에서 시작합니다</a></span>`;
}

function delayedCallback(callback, ms) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve(callback()), ms);
    } catch (error) {
      reject(error);
    }
  });
}

function slowShowing(name, progress, ...properties) {
  const el = document.querySelector(`.${name}`);
  for (const p of properties) {
    if (p == "height") {
      el.style[p] = `${Math.min(progress / 100, 1) * 100}px`;
      continue;
    }
    el.style[p] = Math.min(progress / 100, 1);
  }
  if (progress < 100) {
    progress += 5;
    requestAnimationFrame(slowShowing.bind(null, name, progress, ...properties));
  }
}
