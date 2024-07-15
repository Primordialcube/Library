const myLibrary = [
    "The C Programming Language",
    "Monkey King",
    "Can't Hurt Me",
    "Never Finished"
];

let text = "";

for (let i = 0; i < myLibrary.length; i++) {
    text += [i] + ":" + "&nbsp" + myLibrary[i] + "<br>";

}

document.getElementById("demo").innerHTML = text;


function Book() {
  
}

function addBookToLibrary() {

}
