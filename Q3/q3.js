const div = document.getElementsByClassName("cta_container")[0];
const btn = document.getElementsByClassName("cta_button")[0];

div.addEventListener("click", (e) => console.log(e.target.nodeName));
btn.addEventListener("click", (e) => console.log(e.target.nodeName));