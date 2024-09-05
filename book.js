export class Book {
    constructor(title, author, pages, releaseYear, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.releaseYear = releaseYear;
      this.read = read;
    }
  
    info() {
      let text = `The book ${this.title} was written by ${this.author}. It has ${this.pages} pages.`;
  
      if (this.read) {
        text += ` You have already read this title.`;
      } else {
        text += ` You haven't fully read this title yet.`;
      }
      return text;
    }
  }