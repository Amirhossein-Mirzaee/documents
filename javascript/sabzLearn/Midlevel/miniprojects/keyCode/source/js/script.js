let $ = document;
let locationKey = $.querySelector("#location");
let title = $.querySelector("title");

let keyCodeElem = $.getElementById("keyCode");
let keyElem = $.getElementById("key");
let locationElem = $.getElementById("location");
let whichElem = $.getElementById("which");
let codeElem = $.getElementById("code");

$.body.addEventListener("keydown", (event) => {
  event.preventDefault();

  starter.style.display = "none";
  heading.style.display = "flex";
  ascii.style.display = "flex";
  infos.style.display = "flex";

  const eventKey = event.key;
  const eventLocation = event.location;
  const eventWhich = event.which;
  const eventCode = event.code;
  const eventKeyCode = event.keyCode;

  keyCodeElem.innerHTML = eventKeyCode;
  keyElem.innerHTML = eventKey;
  locationElem.innerHTML = eventLocation;
  whichElem.innerHTML = eventWhich;
  codeElem.innerHTML = eventCode;
});
