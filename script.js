// Javascript Code

let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".button");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-green");

let string = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      screen.value = string;
    } else if (e.target.innerHTML == "C") {
      string = "0";
      screen.value = string;
    } else {
      string = string + e.target.innerHTML;

      screen.value = string;
    }
  });
});
