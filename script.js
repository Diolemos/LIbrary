import { addBook , removeBook, toggleRead} from './library.js';
import { Book } from './book.js';
import { handleFormSubmission } from './form.js';

// Get DOM elements and set gobal methods
window.removeBook = removeBook;
window.toggleRead = toggleRead;
const showAddBookModal = document.getElementById('addBook');
const closeModal = document.getElementById('cancelBtn');
const addBtn = document.getElementById('addBtn');

// Event Listeners
showAddBookModal.addEventListener('click', () => {
  document.getElementById('add-modal').classList.remove('invisible');
});

closeModal.addEventListener('click', () => {
  document.getElementById('add-modal').classList.add('invisible');
});

addBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form's default submission
  handleFormSubmission();
});


//solely for testing
 const book1984 = new Book(1984, 'George Orwell', 1949, 328);
 const oliverTwist = new Book('Oliver Twist',"Charlinho",250,1578,true)
 const dracula = new Book("Dracula", "Bram Stoker", 250, 1571, true)
 const thinkAndGrow= new Book("Think and Grow Rich", "Napoleon Hill", 300,1888,true)
 addBook(book1984)
 addBook(oliverTwist)
 addBook(dracula)
addBook(thinkAndGrow)