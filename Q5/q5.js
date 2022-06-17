const myBtn = document.getElementById("buttons");
myBtn.addEventListener("click", (e) => {
  if (e.target.className === "buttonClass") {
    console.log(e.target.className);
  } else {
    console.log("Click!");
  }
});