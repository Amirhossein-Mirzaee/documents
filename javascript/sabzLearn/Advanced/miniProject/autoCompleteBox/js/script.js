let suggestions = [
  "Channel",
  "CodingLab",
  "CodingNepal",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Bollywood",
  "Vlogger",
  "Vechiles",
  "Facebook",
  "Freelancer",
  "Facebook Page",
  "Designer",
  "Developer",
  "Web Designer",
  "Web Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to become Freelancer",
  "How to become Web Designer",
  "How to start Gaming Channel",
  "How to start YouTube Channel",
  "What does HTML stands for?",
  "What does CSS stands for?",
];

// let $ = document;
// let autoCompleteWrapper = $.querySelector(".search-input");
// let searchInpueElem = $.querySelector("input");
// let autoCompleteBox = $.querySelector(".autocom-box");

// searchInpueElem.addEventListener("keyup", function () {
//   let searchValue = searchInpueElem.value;

//   if (searchValue) {
//     autoCompleteWrapper.classList.add("active");

//     let filteredWords = suggestions.filter(function (word) {
//       //   return word.toLowerCase().startsWith(searchValue.toLowerCase());
//       return word.toLowerCase().includes(searchValue.toLowerCase());
//     });
//     suggestionWordsGenerator(filteredWords);
//   } else {
//     autoCompleteWrapper.classList.remove("active");
//   }
// });
// const suggestionWordsGenerator = (wordsArray) => {
//   const generatedWord = wordsArray.map((word) => {
//     return "<li>" + word + "</li>";
//   });
//   let customWord;
//   if (generatedWord.lenght === 0) {
//     customWord = "<li>" + searchInpueElem + "</li>";
//   } else {
//     customWord = generatedWord.join("");
//   }
//   autoCompleteBox.innerHTML = customWord;
//   select();
// };
// const select = () => {
//   const allListItems = autoCompleteBox.querySelectorAll("li");
//   allListItems.forEach((word) => {
//     word.addEventListener("click", (event) => {
//       searchInpueElem.value = event.target.textContent;
//       autoCompleteWrapper.classList.remove("active");
//     });
//   });
// };
