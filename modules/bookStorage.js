const bookStorage = JSON.parse(localStorage.getItem('bookList')) || [];

export const getBookStorage = () => bookStorage;

export const updateBookStorage = (newBook) => {
  bookStorage.push(newBook);
  localStorage.setItem('bookList', JSON.stringify(bookStorage));
};

export const removeBookFromStorage = (index) => {
  bookStorage.splice(index, 1);
  localStorage.setItem('bookList', JSON.stringify(bookStorage));
};
