// Initialize the library array to store book objects
let myLibrary = [];

// Function to add a book object to the library array
export function addBook(book) {
    myLibrary.push(book);
    showLibrary(); // Refresh the display whenever a book is added
}

// Function to display the books in the library
export function showLibrary() {
    const cardDeck = document.getElementById("card-deck");
    let libraryEl = "";

    myLibrary.forEach((book, i) => {
        libraryEl += `
            <div class="card ${book.read ? 'read' : ''}" id="book${i}">
                <h4 class="card-title">${book.title}</h4>
                <p class="bookInfo">${book.author}, ${book.releaseYear}</p>
                <button class="removeBtn" onclick="removeBook(${i})">X</button>
                <label for="toggleRead${i}">Read
                    <input type="checkbox" id="toggleRead${i}" ${book.read ? 'checked' : ''} onchange="toggleRead(${i})">
                </label>
            </div>`;
    });

    cardDeck.innerHTML = libraryEl;
}

// Functions for removing and toggling read status
export function removeBook(elId) {
    myLibrary.splice(elId, 1);
    showLibrary();
}

export function toggleRead(elId) {
    myLibrary[elId].read = !myLibrary[elId].read;
    showLibrary();
}
