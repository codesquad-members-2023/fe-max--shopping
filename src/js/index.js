import { initLoginModal } from "../js/events/initLoginModal.js";
import { initShippingModal } from "../js/events/initShippingModal.js";
console.log(screen.width);
console.log(document.documentElement.scrollWidth);



const init = () =>{
    initLoginModal()
    initShippingModal()
}
init()