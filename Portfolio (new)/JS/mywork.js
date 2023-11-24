//The following 7 script lines I got a lot of help fron GreatStack from his video: https://www.youtube.com/watch?v=sHG3Sf6XN9g&t=305s

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}


