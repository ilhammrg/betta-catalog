import betta from "./assets/scripts/data/betta-source.js";

const modalContainer = document.querySelector('.modal-container');

const renderModal = (bettaName, bettaDescription) => {
    const content = ` <div class="modal-content">
                            <div class="modal-row-1">
                                <h3>${bettaName} Betta</h3>
                                <img src="assets/images/${bettaName}.jpg" alt="${bettaName}">
                            </div>
                            <div class="modal-row-2">
                                <div class="modal-row-paragraf">
                                    <p>${bettaDescription}</p>
                                </div>
                            </div>
                            <div class="modal-row-3">
                                <button class="btn-close">Close</button>
                        </div>`;
    
    modalContainer.innerHTML = '';
    modalContainer.style.display = 'flex';
    modalContainer.innerHTML = content;
    return;
}

// detail button clicked event
const detailButtonClicked = betta => {
    const buttons = document.querySelectorAll('button');

    for (let button of buttons){
        button.addEventListener('click', element => {
            const index = element.target.dataset.index;
            renderModal(betta[index].name, betta[index].description);
        });
    }
}

document.addEventListener('DOMContentLoaded', detailButtonClicked(betta));

// hide modal
document.body.addEventListener('click', function(e) {
    const target = e.target;

    if (target.classList.contains('btn-close')) {
        modalContainer.style.display = 'none';
    }
});