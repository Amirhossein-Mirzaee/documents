const $ = document;
const form = $.getElementById("book-form");
const titleInput = $.getElementById("title");
const authorInput = $.getElementById("author");
const yearInput = $.getElementById("year");
const addBtn = $.querySelector("button");
const bookListConatiner = $.getElementById("book-list");
const inputs = $.querySelectorAll("input");

let books = [];

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const titleInputValue = titleInput.value;
  const authorInputValue = authorInput.value;
  const yearInputValue = yearInput.value;
  if (
    titleInputValue.trim() === "" ||
    authorInputValue.trim() === "" ||
    yearInputValue.trim() === ""
  ) {
    alert("مقدار مناسب را وارد کن");
  } else {
    const newBookObj = {
      id: books.length + 1,
      title: titleInputValue,
      author: authorInputValue,
      year: yearInputValue,
    };
    books.push(newBookObj);
    inputs.forEach((input) => {
      input.value = "";
    });
  }
  setIntoLocal(books);
  // booksGenerator(books);
});

const setIntoLocal = (allBooksArray) => {
  localStorage.setItem("books", JSON.stringify(allBooksArray));
  booksGenerator(allBooksArray);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

const booksGenerator = (allBooksArray) => {
  bookListConatiner.innerHTML = "";
  allBooksArray.forEach((book) => {
    const newBookTr = $.createElement("tr");
    const newBookTitleTh = $.createElement("th");
    newBookTitleTh.innerHTML = book.title;
    const newBookAuthorTh = $.createElement("th");
    newBookAuthorTh.innerHTML = book.author;
    const newBookYearTh = $.createElement("th");
    newBookYearTh.innerHTML = book.year;

    newBookTr.append(newBookTitleTh, newBookAuthorTh, newBookYearTh);
    bookListConatiner.append(newBookTr);
  });
};
const getBooksLocal = () => {
  const localStoragebBooks = JSON.parse(localStorage.getItem("books"));
  if (localStoragebBooks) {
    books = localStoragebBooks;
    booksGenerator(books);
  } else {
    books = [];
  }
};
window.addEventListener("load", getBooksLocal);
