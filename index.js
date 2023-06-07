import { addBook, selectItems } from './modules/books.js';
import * as dateTime from './modules/time.js';

const localDateTime = document.querySelector('.time');
localDateTime.innerHTML = `${dateTime.localDate} ${dateTime.hour}:${dateTime.min}`;

document.querySelector('.addItem').addEventListener('click', () => {
  const bookheader = document.getElementById('bookheader').value;
  const writer = document.getElementById('writer').value;
  addBook(bookheader, writer);
});

// Hide the add book section and contact section on initial load
const booksLists = document.querySelector('.bookslistadd');
const getInTouch = document.querySelector('.contact-info');
booksLists.style.display = 'none';
getInTouch.style.display = 'none';

selectItems();

const bookList = document.querySelector('.nav-list');
const seeBooks = document.querySelector('.display-books');

bookList.addEventListener('click', (e) => {
  if (e.target.innerHTML === 'List') {
    selectItems();
    booksLists.style.display = 'none';
    getInTouch.style.display = 'none';
    seeBooks.style.display = 'block';
  }
  if (e.target.innerHTML === 'Add New') {
    booksLists.style.display = 'block';
    getInTouch.style.display = 'none';
    seeBooks.style.display = 'none';
  }
  if (e.target.innerHTML === 'Contact') {
    booksLists.style.display = 'none';
    getInTouch.style.display = 'block';
    seeBooks.style.display = 'none';
  }
});
