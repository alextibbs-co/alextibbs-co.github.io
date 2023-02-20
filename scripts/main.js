const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/abstract-painting-2.jpg") {
    myImage.setAttribute("src", "images/abstract-painting.jpg");
  } else {
    myImage.setAttribute("src", "images/abstract-painting-2.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${storedName}'s site`;
  }
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `${storedName}'s site`;
}

myButton.onclick = () => {
  setUserName();
};
