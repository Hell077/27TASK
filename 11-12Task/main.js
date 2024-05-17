const OpenPhoto = () => {
    let PhotoBlock = document.getElementById("add_new_photo")
    PhotoBlock.style.display = "flex";
    HideOverflow();
}

const ClosePhoto = () => {
    let PhotoBlock = document.getElementById("add_new_photo")
    PhotoBlock.style.display = "none"
    ShowOverflow();
}

function AddPhoto() {
    let Parent = document.getElementsByClassName("grid")[0];
    let inputUrl = document.getElementById("NewPhotoSrc");
    let inputUrlValue = inputUrl.value;
    let inputName = document.getElementById("NewPhotoName");
    let inputNameValue = inputName.value;

    if (inputUrlValue.trim() === '' || inputNameValue.trim() === '') {
        alert("Вставьте ссылку и/или название");
        return;
    }

    let newPhoto = document.createElement("div");
    let image = document.createElement("img");
    let title = document.createElement("p");

    image.src = inputUrlValue;
    title.textContent = inputNameValue;

    newPhoto.classList.add("photo");
    image.classList.add("Image");
    title.classList.add("Title");

    Parent.appendChild(newPhoto);
    newPhoto.appendChild(image);
    newPhoto.appendChild(title);

    newPhoto.addEventListener("click", function () {
        HideOverflow()
        let fullScreen = document.querySelector(".fullScreen");
        fullScreen.style.display = "flex";

        let fullScreenImage = document.querySelector(".fullScreenImage");
        let clickedImageSrc = this.querySelector("img").src;
        fullScreenImage.src = clickedImageSrc;
    });

    alert("Успех");
    ClosePhoto();
    ShowOverflow();
}


const HideOverflow = () => {
    let body = document.querySelector("body")
    body.style.overflow = "hidden"
}

const ShowOverflow = () => {
    let body = document.querySelector("body")
    body.style.overflow = "auto"
}

const ClosePhotoBlock = () => {
    let fullScreen = document.querySelector(".fullScreen");
    fullScreen.style.display = "none";
    ShowOverflow();
}


let photos = document.querySelectorAll(".photo");

photos.forEach(photo => {
   
    photo.addEventListener("click", function () {
        HideOverflow()
        let fullScreen = document.querySelector(".fullScreen");
        fullScreen.style.display = "flex";

        let fullScreenImage = document.querySelector(".fullScreenImage");
        let clickedImageSrc = this.querySelector("img").src;
        fullScreenImage.src = clickedImageSrc;

    });
});


