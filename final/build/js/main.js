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
  previewObj.style.opacity = .5;
  playObj.style.opacity = .5;
  plusObj.style.opacity = .5;
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

playObj.addEventListener('mouseenter', function(evt){
    playObj.style.opacity = 1;
}, false);

playObj.addEventListener('mouseleave', function(evt) {
    playObj.style.opacity = .5;
}, false);

previewObj.addEventListener('mouseenter', function(evt){
    previewObj.style.opacity = 1;
}, false);

previewObj.addEventListener('mouseleave', function(evt){
    previewObj.style.opacity = .5;
}, false);

plusObj.addEventListener('mouseenter', function(evt){
    plusObj.style.opacity = 1;
}, false);

plusObj.addEventListener('mouseleave', function(evt){
    plusObj.style.opacity = .5;
}, false);

function createInput(){
    console.log('Added to watch list!');
}

plusObj.addEventListener('click', createInput);

const videoModal = document.getElementById('modal-video');
const modal = document.getElementById('modal');

const close = document.getElementsByClassName("toggle-modal")[0];

previewObj.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
    videoModal.pause();
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}