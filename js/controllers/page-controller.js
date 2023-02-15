import * as modalController from './modal-controller.js';
export function init(){
    const contactLink = document.querySelector(".contac-link");
    contactLink.addEventListener('click', handleContactLinkClieck);
}

function handleContactLinkClieck(event){
    event.preventDefault();
    modalController.showModal();

}