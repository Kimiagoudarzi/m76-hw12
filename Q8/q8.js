const scriptTag = document.createElement("script");
scriptTag.setAttribute("src",
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.core.js"
);
document.body.appendChild(scriptTag);
const src = scriptTag.src;
console.log(src);