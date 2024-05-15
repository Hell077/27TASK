document.querySelector("h1").innerText = "Вывод через querySelector"
document.getElementsByTagName("h1")[3].innerText = "Вывод через тег нейм";
document.getElementById("h1Id").innerText = "Вывод через элемент Id"
let h1Elements = document.getElementsByClassName("h1Class");
for (let i = 0; i < h1Elements.length; i++) {
  h1Elements[i].innerText = "Вывод через Класс";
};


let body = document.querySelector("body")
body.innerHTML = body.innerHTML + "<div>Some div with Js ^_^</div>"

let div = document.querySelector("div")
div.style.width = "400px"
div.style.height = "400px"
div.style.border = "1px solid black"
div.style.backgroundColor = "rgba(100,100,100,1)"
div.style.display = "flex"
div.style.alignItems = "center"
div.style.justifyContent = "center"
div.style.fontSize = "40px"