function sayHello() {
  console.log("hello there!");
}

sayHello();
const mod = document.getElementById("change");
mod.addEventListener("click", () =>
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => console.log(data.value))
);

console.log("hello");
