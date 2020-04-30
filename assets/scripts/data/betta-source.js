class betta {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    showModal() {
        const modalContainer = document.querySelector('.modal-container');
        const content = ` 
            <div class="modal-content">
                <div class="modal-row-1">
                    <img src="assets/images/${this.name}.jpg" alt="${this.name}">
                </div>
                <div class="modal-row-2">
                    <div class="modal-row-paragraf">
                        <h3>${this.name} Betta</h3>
                        <p>${this.description}</p>
                    </div>
                </div>
                <div class="modal-row-3">
                    <button class="btn-close">Close</button>
                </div>
            </div>
        `;

        modalContainer.style.display = 'flex';
        modalContainer.innerHTML = content;
        return;
    }
}