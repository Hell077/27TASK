document.addEventListener("DOMContentLoaded", async () => {
  const links = document.querySelectorAll("header a");
  const contentDiv = document.querySelector(".content");

  links.forEach(link => {
    link.addEventListener("click", async function(e) {
      e.preventDefault();
      let href = this.href;
      await loadContent(href);
      saveLastVisitedPage(href);
    });
  });

  async function loadContent(href) {
    let data = await fetch(href);
    contentDiv.innerHTML = await data.text();
  }

  function saveLastVisitedPage(href) {
    localStorage.setItem("lastVisitedPage", href);
  }

  function loadLastVisitedPage() {
    const lastVisitedPage = localStorage.getItem("lastVisitedPage");
    if (lastVisitedPage) {
      loadContent(lastVisitedPage);
    } else {
      loadContent("main.html"); 
    }
  }

  loadLastVisitedPage()  });