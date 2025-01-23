const qosh = document.querySelector("#qoshish"),
  ayir = document.querySelector("#ayirish"),
  text = document.querySelector("#counter");
let n = document.querySelector(".counter").textContent;
qosh.addEventListener("click", () => {
  n++;
  document.querySelector(".counter").textContent = ` ${n}`;
});
ayir.addEventListener("click", () => {
  n--;
  document.querySelector(".counter").textContent = ` ${n}`;
});
