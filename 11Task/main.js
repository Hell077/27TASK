const OpenPhoto = () =>{
    let PhotoBlock = document.getElementById("add_new_photo")
    PhotoBlock.style.display = "flex";
}

const ClosePhoto = () =>{
    let PhotoBlock = document.getElementById("add_new_photo")
    PhotoBlock.style.display = "none"
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
}

