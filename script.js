let div = document.querySelector("div");
let button = document.querySelector("button");
function randomHexColor() {
  let hex = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
}
// setInterval(() => {

// }, 500);
button.addEventListener("click", function () {
  div.style.backgroundColor = randomHexColor();
});
