    
// var testDiv = document.getElementById('saints');
// var secondDiv = document.getElementById('preview');
    
// document.getElementById('preview').addEventListener('mouseenter', swapImgWithVideo);
// document.getElementById('preview').addEventListener('mouseout', swapVideoWithImg);

// var gImgShowing = true;


// function swapImgWithVideo() {
//     console.log('swap image with video v7');

//    if(gImgShowing == true) {
//     document.getElementById('thumbnail').innerHTML="<video id='myVideo' width='416' height='208' src='images/New_Video416x206.mp4' autoplay></video>";
//     gImgShowing = false;
//    }

// }

// function swapVideoWithImg() {
//     console.log('swap video with image v7');

//     if(gImgShowing == false) {
//         document.getElementById('thumbnail').innerHTML="<img src='images/test-image.jpeg' alt='The many saints of newark banner'>";
//         gImgShowing = true;
//     }

// }


// document.getElementsByTagName('video')[0].onended = function() {
//     this.onload();
//     this.onplay();
// };

let imgVidDisplayObj = document.getElementById("imgVidDisplay");
let videoObj = document.getElementById("myVid");
let thumbnailObj = document.getElementById("myThumbnail");
let descriptionObj = document.getElementById("descriptionText");
let wrapperObj = document.getElementById("wrapper");
let shadowObj = document.getElementById("shadow");
let playObj = document.getElementById("playButton");
let plusObj = document.getElementById("plusButton");
let previewObj = document.getElementById("previewButton");

imgVidDisplayObj.addEventListener('mouseenter', function (evt) {
  videoObj.play();
  imgVidDisplayObj.style.borderRadius = "10px";
  previewObj.style.opacity = 1;
  playObj.style.opacity = 1;
  plusObj.style.opacity = 1;
  shadowObj.style.opacity = 1;
  thumbnailObj.style.opacity = 0;
  wrapperObj.style.transform = "scale(1.2)";
  descriptionObj.style.opacity = 1;
}, false);

imgVidDisplayObj.addEventListener('mouseleave', function (evt) {
    videoObj.pause();
    previewObj.style.opacity = 0;
    playObj.style.opacity = 0;
    plusObj.style. opacity = 0;
    shadowObj.style.opacity = 0;
    thumbnailObj.style.opacity = 100;
    wrapperObj.style.transform = "scale(1.0)";
    descriptionObj.style.opacity = 0;
  }, false);

function createInput(){
    console.log('Added to watch list!');
}

plusObj.addEventListener('click', createInput);

const modal = document.getElementById('modal');

const close = document.getElementsByClassName("toggle-modal")[0];

previewObj.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.targe == modal) {modal.style.display = "none";
    }
}
