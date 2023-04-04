import { loginModalView } from "./loginModalView";

export const loginModalHandler = () => {
  setTimeout(appendLoginModal, 1000);
};

const appendLoginModal = () => {
  const $login = document.querySelector(".nav-bar__login");
  const modal = document.createElement("div");
  modal.innerHTML = loginModalView;

  $login?.appendChild(modal);
};
