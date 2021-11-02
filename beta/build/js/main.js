
// test.addEventListener("mouseover", function(onmouseover){
    
// });


document.getElementById('img').innerHTML='';

    
    var testDiv = document.getElementById('saints');
    testDiv.innerHTML = "<video class='pic' width='416' height='208' autoplay muted><source src='images/Video_Trailer.mp4' type='video/mp4'></video>";
    document.getElementById('img').appendChild(testDiv);
    
// document.getElementById('img').addEventListener('mouseover', mouseOver);
// document.getElementById('img').addEventListener('mouseout', mouseOut);

// function mouseOver() {
    
// }



// function mouseOut() {
//     document.getElementById('saints').innerHTML='';

//     var secondDiv = document.getElementById('img');
//     secondDiv.innerHTML = "<img class='innerimg' src='images/test-image.jpeg' alt='The many saints of newark banner'>";
//     document.getElementById('saints').appendChild(secondDiv);
// }

document.getElementsByTagName('video')[0].onended = function() {
    this.onload();
    this.onplay();
};