// this empty array will store all the books(objects)
let myLibrary = []

//constructor function to create the book objects

function Book(genre, title, author, edition, pages, read) {
    genre = this.genre;
    title = this.title;
    author = this.author;
    edition = this.edition;
    pages = this.pages;
    read = this.read;
    function info() {
        let text = `The book ${title} is ${genre} work. was written by ${author}. It has ${pages}. This is its edition number ${edition}`

        if (read) {
            text += ` You have already read this title`
        } else {
            text += `You haven't fully read this title yet`
        }
    }
}

//Function to add the book object to the library array


//Function to display the books in the library...
//*****on a table, card or list******


