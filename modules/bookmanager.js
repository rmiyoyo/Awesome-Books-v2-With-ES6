const bookStorage = JSON.parse(localStorage.getItem('bookList')) || [];

export default class Books {
  constructor(bookheader, writer) {
    this.bookheader = bookheader;
    this.writer = writer;
  }

  updateItems() {
    document.querySelector('.addItem').addEventListener('click', () => {
      const bookheader = document.getElementById('bookheader').value;
      const writer = document.getElementById('writer').value;

      if (bookheader && writer) {
        const newBook = {
          bookheader,
          writer,
        };
        bookStorage.push(newBook);
        localStorage.setItem('bookList', JSON.stringify(bookStorage));
        this.selectItems();
        document.querySelector('.updateItems').reset();
      }
    });
  }

  selectItems() {
    let markup = '';
    bookStorage.forEach((item, i) => {
      markup += `<div class="showRw">
      <p>"${item.bookheader}" by ${item.writer}</p>  
      <button type="button" class="eraseItem" id=${i}>Remove</button>
  </div>
  <hr class="divider"/>`;
    });
    document.querySelector('.all').innerHTML = markup;

    const removeItem = () => {
      const deleteElement = [...document.getElementsByClassName('eraseItem')];
      deleteElement.forEach((item) => {
        item.addEventListener('click', (e) => {
          bookStorage.splice(e.target.id, 1);
          localStorage.setItem('bookList', JSON.stringify(bookStorage));
          this.selectItems();
        });
      });
    };
    removeItem();
  }
}