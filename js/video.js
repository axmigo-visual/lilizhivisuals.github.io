// ============================
// AXMIGO Visuals
// Video Player
// ============================

const modal = document.getElementById("videoModal");
const iframe = document.getElementById("youtubePlayer");

const playBtn = document.getElementById("playFilm");
const watchBtn = document.getElementById("watchButton");
const closeBtn = document.querySelector(".close-video");

// YouTube Embed URL
const videoURL =
"https://www.youtube.com/embed/9fQ0_QpvtAM?autoplay=1&rel=0";

// 打开播放器
function openVideo(){

    iframe.src = videoURL;

    modal.style.display = "flex";

    requestAnimationFrame(()=>{
        modal.classList.add("show");
    });

}

// 关闭播放器
function closeVideo(){

    modal.classList.remove("show");

    setTimeout(()=>{

        modal.style.display = "none";

        iframe.src = "";

    },300);

}

// 播放按钮
playBtn.addEventListener("click",openVideo);

watchBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    openVideo();

});

// 点击 X
closeBtn.addEventListener("click",closeVideo);

// 点击黑色背景
modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        closeVideo();

    }

});

// ESC
document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeVideo();

    }

});
