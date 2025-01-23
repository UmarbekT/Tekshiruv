let randomColor = document.getElementsByClassName("text"),
  arr = ["gray", "red", "blue", "black", "green"];
setInterval(() => {
  let randomId = Math.floor(Math.random() * arr.length),
    randomtag = Math.floor(Math.random() * randomColor.length);
  randomColor[randomtag].style.color = arr[randomId];
}, 2000);
