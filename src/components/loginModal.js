export function loginModal() {
    function fadeInLoginModal() {
        document.addEventListener("DOMContentLoaded", () => {
            const loginModal = document.querySelector(".login-modal");
            console.log(loginModal);
            setTimeout(() => {
                loginModal.classList.add("show");
            }, 1000);
        });
    }
    fadeInLoginModal();

    const login = document.querySelector(".login");

    login.addEventListener("mouseover", () => {
        console.log(login);
    });
}
