let menuBtn = document.getElementById("menuBtn")
function showPopUp(){
    let PopUp = document.getElementsByClassName("PopUp")[0];
    PopUp.style.display = "flex"; 
}
function closePopUp(){
    let PopUp = document.getElementsByClassName("PopUp")[0];
    PopUp.style.display = "none";
}

// let headerButton = document.querySelector(".mobile_icon"); 
// headerButton.addEventListener("click", function() { 
//     let header= document.querySelector("header"); 
//     if (header.classList.contains("open")) { 
//         closePopup(); 
//     } 
//     else{ 
//         header.classList.add("open"); 
//         headerButton.querySelector("img").src="cancel.png" 
//     } 
     
// }); 
 
// function closePopup() { 
//     document.querySelector("header").classList.remove("open"); 
//     headerButton.querySelector("img").src="align-left.png" 
// } 
 
// document.querySelector("#grid").addEventListener("click", closePopup, false); 
 
// document.querySelector("header .popup").addEventListener("click", closePopup, false); 
 
// document.querySelector("#show_add_photo").addEventListener("click", function() { 
//     document.querySelector("#add_new_photo").classList.add("open"); 
// }); 
 
// document.querySelector("#cancel").addEventListener("click", function() { 
//     document.querySelector("#add_new_photo").classList.remove("open"); 
// }); 
 
// document.querySelector("#add_photo").addEventListener("click", function() {  
//     let src = document.querySelector("#new_photo_src").value;  
//     let text = document.querySelector("#new_photo_text").value;  
//     if (src && text) { 
//         let newPhotoDiv = document.createElement("div"); 
//         newPhotoDiv.classList.add("photo"); 
//         let newImg = document.createElement("img"); 
//         newImg.src = src; 
//         newPhotoDiv.append(newImg); 
//         let newP = document.createElement("p"); 
//         newP.innerText = text; 
//         newPhotoDiv.append(newP); 
//         document.querySelector("#grid").prepend(newPhotoDiv); 
//         document.querySelector("#add_new_photo").classList.remove("open"); 
//         document.querySelector("#new_photo_src").value=""; 
//         document.querySelector("#new_photo_text").value=""; 
//         newPhotoDiv.addEventListener("click", open_Photo,false); 
//     } 
//     else { 
//         if (!src) { 
//             document.querySelector("#new_photo_src").classList.add('error'); 
//         } 
//         if (!text) { 
//             document.querySelector("#new_photo_text").classList.add("error"); 
//         } 
//     } 
     
// }); 
 
// function open_Photo() { 
//     let src = this.querySelector("img").src, 
//         popup_photo = document.querySelector("#popup_photo"); 
//     popup_photo.querySelector("img").src = src; 
//     popup_photo.classList.add("open"); 
// } 
 
// let photos = document.querySelectorAll(".photo"); // Заменяем querySelector на querySelectorAll 
// for (let photo of photos) { 
//     photo.addEventListener("click", open_Photo, false); 
// } 
 
// document.querySelector("#popup_photo").addEventListener("click",function(){ 
//     this.classList.remove("open"); 
// });