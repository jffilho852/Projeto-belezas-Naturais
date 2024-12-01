

function openModal(modalId) {
    const modal = document.getElementById(`${modalId}`)


    modal.showModal();



}


function closeModal(modalId) {
    const modal = document.getElementById(`${modalId}`)


    modal.close();



}

let abrirmodal = document.querySelectorAll(".abrirModal")
let fecharmodal = document.querySelector(".fecharModal")



abrirmodal[0].addEventListener('click', () => {
    openModal('modal1')
});
abrirmodal[1].addEventListener('click', () => {
    openModal('modal2')
});
abrirmodal[2].addEventListener('click', () => {
    openModal('modal3')
});
abrirmodal[3].addEventListener('click', () => {
    openModal('modal4')
});
abrirmodal[4].addEventListener('click', () => {
    openModal('modal5')
});
abrirmodal[5].addEventListener('click', () => {
    openModal('modal6')
});






