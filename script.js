// this empty array will store all the books(objects)
let myLibrary = []

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
let gulliverstravel = new Book(`Gulliver's Travel`, 'Johnnathan swift', 600, true)

//Function to add the book object to the library array
function addBook(book) {
    myLibrary.push(book)
}


//Function to display the books in the library...
//*****on a table, card or list******


function showLibrary() {

}
