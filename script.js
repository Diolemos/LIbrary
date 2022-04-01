// this empty array will store all the books(objects)
let myLibrary = []

//The DOM Element where the library will be displayed
let cardDeck = document.getElementById('card-deck');

//buttons


let showAddBookModal = document.getElementById('addBook')

let closeModal = document.getElementById('cancelBtn');

let addBtn = document.getElementById('addBtn')


//form fields
let formTitle = document.getElementById('title')
let formAuthor = document.getElementById('author')
let formPages = document.getElementById('pages')
let formReleaseYear = document.getElementById('releaseYear')
let formRead = document.getElementById('isItRead')
const form = document.getElementById('form')

// constructor function to create the book objects

class Book {
    constructor(title, author, pages, releaseYear, read) {
        this.title = title;
        this.author = author;
        this.pages = pages
        this.releaseYear = releaseYear
        this.read = read
    }
    info() {
        let text = `The book ${this.title} was written by ${this.author}. It has ${this.pages} pages.`

        if (this.read) {
            text += ` You have already read this title`
        } else {
            text += `You haven't fully read this title yet`
        }
        return text;
    }
}


// function Book(title, author, pages, releaseYear, read) {

//     this.title = title
//     this.author = author

//     this.pages = pages
//     this.releaseYear = releaseYear
//     this.read = read
//     //Every book object will have acess to this info function book.info()
//     this.info = function () {
//         let text = `The book ${title} was written by ${author}. It has ${pages} pages.`

//         if (read) {
//             text += ` You have already read this title`
//         } else {
//             text += `You haven't fully read this title yet`
//         }
//         return text;
//     }
// }

// This creates the first book object
let gulliverstravel = new Book(`Gulliver's Travel`, 'Johnnathan swift', 600, 1775, true);

// I'll add a few books to the library so I can better style It
addBook(gulliverstravel)
let dracula = new Book('Dracula', 'Bram Stoker', 200, 1880, true);
addBook(dracula)
let tngr = new Book('Think and Grow Rich', 'Napoleon Hill', 275, 1920, false)
addBook(tngr)
let htwaip = new Book('How to win friends and influence people', 'Dale Carnigie', 200, 1922, true)
addBook(htwaip)

showLibrary() //displays the library

//Function to add the book object to the library array
function addBook(book) {
    myLibrary.push(book)
}


//Function to display the books in the library...
//*****on a table, card or list******


function showLibrary() {
    let libraryEl = ''

    for (i = 0; i < myLibrary.length; i++) {

        if (myLibrary[i].read == false) {
            libraryEl += `<div class="card" id="book${i}">
           <h4 class="card-title"> ${myLibrary[i].title} </h4>
           <p class="bookInfo">${myLibrary[i].author}, ${myLibrary[i].releaseYear}</p>
   
           <button class="removeBtn"  onclick="removeBook(${i})">X</button>
          <label for="toggleRead${i}" >Read<input type="checkbox" id="toggleRead${i}" onchange="toggleRead(${i})" ></label></div>`


        } else {
            libraryEl += `<div class="card read" id="book${i}">
        <h4 class="card-title"> ${myLibrary[i].title} </h4>
        <p class="bookInfo">${myLibrary[i].author}, ${myLibrary[i].releaseYear}</p>

        <button class="removeBtn"  onclick="removeBook(${i})">X</button>
       <label for="toggleRead${i}" >Read<input type="checkbox" checked id="toggleRead${i}" onchange="toggleRead(${i})" ></label></div>`

        }
    }

    cardDeck.innerHTML = libraryEl;
}


//Function to remove the book from the library
//An event listener has to be added to the 'libreryEl' text , inside the showLibrary(),since...
//The elements will be created after the page has been loaded and 
//JavaScript will not be able to identify them 

function removeBook(elId) {
    //removes element from DOM
    document.getElementById(`book${elId}`).remove()
    // Removes element from the array MyLibrary
    myLibrary.splice(elId, 1)
    //displays books on the page, rearranging the tags and IDs, 
    // Making It possible to delete other books in the future
    showLibrary()
}

//A button to toggle the 'read' class of the book;

function toggleRead(elId) {
    document.getElementById(`book${elId}`).classList.toggle('read')
}

showAddBookModal.addEventListener('click', () => {
    document.getElementById('add-modal').classList.remove('invisible')
})

closeModal.addEventListener('click', () => {
    document.getElementById('add-modal').classList.add('invisible')
})

addBtn.addEventListener('click', () => {
    addNewBook()
})


// function to submit the form and add a new book

function addNewBook() {

    addBook(new Book(formTitle.value, formAuthor.value, formPages.value, formReleaseYear.value, formRead.value))
    showLibrary()
    //reset form
    form.reset()


    document.getElementById('add-modal').classList.add('invisible')


}