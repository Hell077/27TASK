let links = document.querySelectorAll("header a");

links.forEach(link => {
  link.addEventListener("click", async function (event) {
    event.preventDefault();
    let href = this.href;
    let data = await fetch(href);
    document.querySelector(".content").innerHTML = await data.text();
    window.location.hash = this.getAttribute("data-hash");
  });
});

async function start() {
  try {
    let hash = window.location.hash;
    if (hash === "") {
      hash = "main";
    } else {
      hash = hash.substring(1);
    }
    let response = await fetch(`${hash}.html`);
    if (!response.ok) throw new Error('Network response was not ok');
    let data = await response.text();
    document.querySelector(".content").innerHTML = data;
  } catch (error) {
    console.error('Fetch error: ', error);
  }
}

start();
