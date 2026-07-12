// Portfolio Filter


const buttons =
document.querySelectorAll(".filter");


const items =
document.querySelectorAll(".photo-item");



buttons.forEach(button=>{


button.addEventListener("click",()=>{


let filter =
button.dataset.filter;



buttons.forEach(btn=>{

btn.classList.remove("active");

});


button.classList.add("active");



items.forEach(item=>{


if(filter==="all" || item.classList.contains(filter)){


item.style.display="block";


}else{


item.style.display="none";


}


});


});


});




// Lightbox


const photos =
document.querySelectorAll(".photo-item img");


const lightbox =
document.querySelector(".lightbox");


const lightboxImg =
document.querySelector(".lightbox-img");


const close =
document.querySelector(".close");



photos.forEach(photo=>{


photo.onclick=()=>{


lightbox.style.display="flex";


lightboxImg.src =
photo.src;


}


});



close.onclick=()=>{


lightbox.style.display="none";


}
