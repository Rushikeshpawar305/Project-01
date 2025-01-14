let btn = document.querySelector("button");
let body = document.querySelector("body");
let div = document.querySelector(".box");
let current = "light";

btn.addEventListener("click", () => {
  if (current == "light") {
    current = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    current = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }

  console.log(current);
});

div.addEventListener("mouseover", () => {
  if (current == "light") {
    current = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    current = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
});
