import { addBook } from './library.js';
import { Book } from './book.js';

// Validate form input values
function isFormValid(formTitle, formAuthor, formPages, formReleaseYear) {
    if (
        !formTitle.value.trim() ||
        !formAuthor.value.trim() ||
        !formPages.value ||
        !formReleaseYear.value
    ) {
        alert('Please fill in all required fields correctly.');
        return false;
    }

    const pages = parseInt(formPages.value, 10);
    const releaseYear = parseInt(formReleaseYear.value, 10);

    if (pages <= 0) {
        alert('Pages must be a positive number.');
        return false;
    }

    if (releaseYear <= 0) {
        alert('Release year must be a positive number.');
        return false;
    }

    return true;
}

// Extract form data and create a Book object
function getBookFromForm(formTitle, formAuthor, formPages, formReleaseYear, formRead) {
    const pages = parseInt(formPages.value, 10);
    const releaseYear = parseInt(formReleaseYear.value, 10);
    return new Book(formTitle.value, formAuthor.value, pages, releaseYear, formRead.checked);
}

// Handle form submission by validating input and adding a book
export function handleFormSubmission() {
    const formTitle = document.getElementById('title');
    const formAuthor = document.getElementById('author');
    const formPages = document.getElementById('pages');
    const formReleaseYear = document.getElementById('releaseYear');
    const formRead = document.getElementById('isItRead');

    // Validate form inputs
    if (!isFormValid(formTitle, formAuthor, formPages, formReleaseYear)) {
        return;
    }

    // Create a Book object and add it to the library
    const newBook = getBookFromForm(formTitle, formAuthor, formPages, formReleaseYear, formRead);
    addBook(newBook);

    // Reset the form and hide the modal
    document.getElementById('form').reset();
    document.getElementById('add-modal').classList.add('invisible');
}
