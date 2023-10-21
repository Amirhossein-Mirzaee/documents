let $ = document;
let autoCompleteWrapper = $.querySelector(".search-input");
let searchInpueElem = $.querySelector("input");
let autoCompleteBox = $.querySelector(".autocom-box");

searchInpueElem.addEventListener("keyup", () => {
  const searchValue = searchInpueElem.value;

  if (searchValue) {
    autoCompleteWrapper.classList.add("active");

    const filteredWords = suggestions.filter((word) => {
      return word.toLowerCase().includes(searchValue.toLowerCase());
    });
    suggestionWordsGenerator(filteredWords);
  } else {
    autoCompleteWrapper.classList.remove("active");
  }
});
const suggestionWordsGenerator = (arr) => {
  const generatedWord = arr.map((word) => {
    return "<li>" + word + "</li>";
  });
  let customWord;
  if (generatedWord.length === 0) {
    customWord = "<li>" + searchInpueElem + "</li>";
  } else {
    customWord = generatedWord.join("");
  }
  autoCompleteBox.innerHTML = customWord;
  select();
};
const select = () => {
  const allListItems = autoCompleteBox.querySelectorAll("li");
  allListItems.forEach((word) => {
    word.addEventListener("click", (event) => {
      searchInpueElem.value = event.target.textContent;
    autoCompleteWrapper.classList.remove("active");

    });
  });
};
