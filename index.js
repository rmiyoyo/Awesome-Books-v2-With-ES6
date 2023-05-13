import Books from './modules/bookmanager.js';
import * as dateTime from './modules/time.js';

const localDateTime = document.querySelector('.localDateTime');
localDateTime.innerHTML = `${dateTime.localDate} ${dateTime.hour}:${dateTime.min}`;

const book = new Books();

book.updateItems();
book.selectItems();

const bookList = document.querySelector('.nav-list');
const booksLists = document.querySelector('.bookslistadd');
const getInTouch = document.querySelector('.contact-info');
const seeBooks = document.querySelector('.display-books');

bookList.addEventListener('click', (e) => {
  if (e.target.innerHTML === 'List') {
    book.selectItems();
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