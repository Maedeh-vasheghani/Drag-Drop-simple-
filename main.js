// const titre = document.querySelectorById ('.text');
let base = document.querySelector(".base");
const premierCase = document.getElementById("premier-case");
const boxs = document.querySelectorAll(".case");
const destroy = document.querySelector(".destroy");
const allCases = [];

for (i = 0; i < boxs.length; i++) {
  allCases.push(boxs[i]);
}
allCases.push(destroy);

let indexPhoto = 1;
base.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`;

function nvBase() {
  const newBase = document.createElement("div");
  newBase.setAttribute("class", "base");
  newBase.setAttribute("draggable", "true");
  indexPhoto++;
  newBase.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`;
  premierCase.appendChild(newBase);
  base = newBase;
}

for (const vide of allCases) {
  vide.addEventListener("dragover", dragOver);
  vide.addEventListener("dragenter", dragEnter);
  vide.addEventListener("drop", dragDrop);
}

function dragDrop() {
  if (this.id === "premier-case"){
    return;
  }
  console.log(this.id=== 'destroy');
  //delet
  if (this.id === "destroy"){
    base.remove();
    nvBase();
    return;
  }
  // verouillage 

  this.removeEventListener('drop', dragDrop);
  this.removeEventListener('dragenter', dragEnter);
  this.removeEventListener('dragover', dragOver);

  this.appendChild(base);
  this.childNodes[0].setAttribute('draggable', false);
  nvBase();
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
}

//  titre.addEventListener('click', Coloration)
//  function Coloration(){
//   titre.style.background = '#ffb3b3'
//  }
