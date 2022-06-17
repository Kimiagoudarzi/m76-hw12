const myList = document.querySelectorAll(".item");
myList.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.style.textDecoration === "line-through") {
      e.target.style.textDecoration = "none";
    } else {
      e.target.style.textDecoration = "line-through";
    }
  });
});
