const mybutton = document.getElementById("buttonChange");

mybutton.addEventListener("keydown", changeSize);

function changeSize(event) {
  let x = parseInt(mybutton.style.top) || 0;
  let y = parseInt(mybutton.style.left) || 0;

  if (event.key === "ArrowUp") {
    x = x - 10;
  }
  if (event.key === "ArrowDown") {
    x = x + 10;
  }
  if (event.key === "ArrowLeft") {
    y = y - 10;
  }
  if (event.key === "ArrowRight") {
    y = y + 10;
  }
  mybutton.style.left = y + "px";
  mybutton.style.top = x + "px";
}
