// Initialize UI events
export function initializeUIEvents() {
    const showAddBookModal = document.getElementById('addBook');
    const closeModal = document.getElementById('cancelBtn');

    showAddBookModal.addEventListener('click', () => {
        document.getElementById('add-modal').classList.remove('invisible');
    });

    closeModal.addEventListener('click', () => {
        document.getElementById('add-modal').classList.add('invisible');
    });
}
