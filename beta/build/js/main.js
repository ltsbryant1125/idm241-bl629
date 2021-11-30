    
// var testDiv = document.getElementById('saints');
// var secondDiv = document.getElementById('preview');
    
document.getElementById('preview').addEventListener('mouseenter', swapImgWithVideo);
document.getElementById('preview').addEventListener('mouseout', swapVideoWithImg);

var gImgShowing = true;


function swapImgWithVideo() {
    console.log('swap image with video v7');

   if(gImgShowing == true) {
    document.getElementById('thumbnail').innerHTML="<video id='myVideo' width='416' height='208' src='images/New_Video416x206.mp4' autoplay></video>";
    gImgShowing = false;
   }

}

function swapVideoWithImg() {
    console.log('swap video with image v7');

    if(gImgShowing == false) {
        document.getElementById('thumbnail').innerHTML="<img src='images/test-image.jpeg' alt='The many saints of newark banner'>";
        gImgShowing = true;
    }

}


// document.getElementsByTagName('video')[0].onended = function() {
//     this.onload();
//     this.onplay();
// };