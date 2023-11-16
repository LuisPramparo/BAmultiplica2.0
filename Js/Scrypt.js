const fullImgBox = document.getElementById("fullImgBox"),
fullImg = document.getElementById("fullImg");

function openFullImg(referencia){
    fullImgBox.style.display = "flex";
    fullImg.src = referencia
}

function closeImg(){
    fullImgBox.style.display = "none"
}