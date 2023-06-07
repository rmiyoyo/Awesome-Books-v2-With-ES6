import { getBookStorage, updateBookStorage, removeBookFromStorage } from './bookStorage.js';

export default class Book {
  constructor(bookheader, writer) {
    this.bookheader = bookheader;
    this.writer = writer;
  }
}

export const selectItems = () => {
  const bookStorage = getBookStorage();
  let markup = '';

  const removeItem = () => {
    const deleteElement = [...document.getElementsByClassName('eraseItem')];
    deleteElement.forEach((item) => {
      item.addEventListener('click', (e) => {
        const index = parseInt(e.target.id, 10);
        removeBookFromStorage(index);
        selectItems();
      });
    });
  };

  bookStorage.forEach((item, i) => {
    markup += `<div class="showRw">
      <p>"${item.bookheader}" by ${item.writer}</p>  
      <button type="button" class="eraseItem" id=${i}>Remove</button>
    </div>
    <hr class="divider"/>`;
  });

  document.querySelector('.all').innerHTML = markup;
  removeItem();
};

export const addBook = (bookheader, writer) => {
  const message = document.querySelector('.displayError');

  if (bookheader === '') {
    message.innerHTML = 'Please enter bookheader of book';
    message.style.color = 'tomato';
    message.style.fontWeight = 'bold';
    setTimeout(() => {
      message.innerHTML = '';
    }, 3000);
    return;
  }

  if (writer === '') {
    message.innerHTML = 'Please enter writer of book';
    message.style.color = 'tomato';
    message.style.fontWeight = 'bold';
    setTimeout(() => {
      message.innerHTML = '';
    }, 3000);
    return;
  }

  const newBook = new Book(bookheader, writer);
  updateBookStorage(newBook);
  selectItems();
  document.querySelector('.updateItems').reset();
};
