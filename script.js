// this empty array will store all the books(objects)
let myLibrary = []

//The DOM Element where the library will be displayed
let cardDeck = document.getElementById('card-deck');

//constructor function to create the book objects

function Book(title, author, pages, read) {

    this.title = title
    this.author = author

    this.pages = pages
    this.read = read
    //Every book object will have acess to this info function book.info()
    this.info = function () {
        let text = `The book ${title} was written by ${author}. It has ${pages} pages.`

        if (read) {
            text += ` You have already read this title`
        } else {
            text += `You haven't fully read this title yet`
        }
        return text;
    }
}

// This creates the first book object
let gulliverstravel = new Book(`Gulliver's Travel`, 'Johnnathan swift', 600, true);

// I'll add a few books to the library so I can better style It
addBook(gulliverstravel)
let dracula = new Book('Dracula', 'Bram Stoker', 200, true);
addBook(dracula)
let tngr = new Book('Think and Grow Rich', 'Napoleon Hill', 275, false)
addBook(tngr)
let htwaip = new Book('How to win friends and influence people', 'Dale Carnigie', 200, true)
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
        libraryEl += `<div class="card" id="book${i}">
        <h4 class="card-title"> ${myLibrary[i].title} </h4>
        <button class="removeBtn"  onclick="removeBook(${i})">X</button>
     <button onclick="toggleRead(${i})">Read It?</button> </div>`
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