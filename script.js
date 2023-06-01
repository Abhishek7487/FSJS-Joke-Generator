const jokeEl = document.querySelector(".joke");
const jokeBtn = document.querySelector(".btn");

jokeBtn.addEventListener("click", () => {
  return fetch(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
  )
    .then((data) => {
      return data.json();
    })
    .then((jokeObj) => {
      jokeEl.textContent = jokeObj.joke;
    });
});
