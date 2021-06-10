showImage()
setInterval(showImage, 3000);

function showImage() {
   var slideNumber = randNumber(1, 5);
   document.getElementById('aimg').src = "t" + slideNumber + ".jpg";
   
}

function randNumber(min, max) {
    return Math.floor(min + (max-min+1)*Math.random());
 }