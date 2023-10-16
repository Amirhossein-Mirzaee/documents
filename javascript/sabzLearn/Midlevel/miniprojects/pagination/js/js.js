const listItems = [
  { id: 1, name: "Amin", family: "Saeedi Rad" },
  { id: 2, name: "Amir", family: "Zehtab" },
  { id: 3, name: "Qadir", family: "Yolme" },
  { id: 4, name: "Babak", family: "Mohammadi" },
  { id: 5, name: "Hasan", family: "Ghahreman Zadeh" },

  { id: 6, name: "Amin", family: "Saeedi Rad" },
  { id: 7, name: "Amir", family: "Zehtab" },
  { id: 8, name: "Qadir", family: "Yolme" },
  { id: 9, name: "Babak", family: "Mohammadi" },
  { id: 10, name: "Hasan", family: "Ghahreman Zadeh" },

  { id: 11, name: "Saeed", family: "Ehsani" },
  { id: 12, name: "Siamak", family: "Modiri" },
  { id: 13, name: "Mohsen", family: "Ansari" },
  { id: 14, name: "Mehran", family: "Ali Pour" },
  { id: 15, name: "Amir Hossein", family: "Mahtabi" },

  { id: 16, name: "Hossein", family: "Amino" },
  { id: 17, name: "Melika", family: "Ehsani" },
  { id: 18, name: "Qadir", family: "Yolme" },
  { id: 19, name: "Fatemeh", family: "Alilou" },
  { id: 20, name: "Ehsan", family: "Tayyebi" },

  { id: 21, name: "Zahra", family: "Gholami" },
  { id: 22, name: "Matin", family: "Sahebi" },
];

const userListContainer = document.getElementById("list");
const paginationContainer = document.getElementById("pagination");

let row = 5;
let currentPage = 3;

const displayUesrsList = (
  allUesrsArray,
  usersContainer,
  rowsCount,
  currentPage
) => {
  usersContainer.innerHTML = "";
  const endIndex = rowsCount * currentPage;
  const startIndex = endIndex - rowsCount;
  const paginatedUsers = allUesrsArray.slice(startIndex, endIndex);
  paginatedUsers.forEach((user) => {
    const userElement = document.createElement("div");
    userElement.classList.add("item");
    userElement.innerHTML = user.name + " " + user.family;
    usersContainer.appendChild(userElement);
  });
};
const setupPagination = (allUesrsArray, paginationContainer, rowsCount) => {
  paginationContainer.innerHTML = "";
  const pageCount = Math.ceil(allUesrsArray.length / rowsCount);
  for (let i = 1; i < pageCount + 1; i++) {
    const btn = generateBtn(i, allUesrsArray);
    paginationContainer.appendChild(btn);
  }
};
const generateBtn = (page, allUesrsArray) => {
  const button = document.createElement("button");

  button.innerHTML = page;
  if (page === currentPage) {
    button.classList.add("active");
  }
  button.addEventListener("click", () => {
    console.log("clicked");
    currentPage = page;
    displayUesrsList(allUesrsArray, userListContainer, row, currentPage);
    const prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");
    button.classList.add("active");
  });

  return button;
};
displayUesrsList(listItems, userListContainer, row, currentPage);
setupPagination(listItems, paginationContainer, row);
