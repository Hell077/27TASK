document.getElementById("navbtn").addEventListener('click', function () {
    document.getElementById("menu").style.display = "flex";
    document.body.style.overflow = "hidden";
    document.querySelector(".menuFilter").style.display = "block"
  });

  document.getElementById("CloseMenu").addEventListener('click', function () {
    document.getElementById("menu").style.display = "none";
    document.body.style.overflow = "auto";
    document.querySelector(".menuFilter").style.display = "none"
  });