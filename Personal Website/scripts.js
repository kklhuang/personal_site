function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



// source: https://alvarotrigo.com/blog/css-animations-scroll/


window.onload = choosePicIntro;

var myPix = new Array("photos/euphtromb.jpg","photos/intro_photo_1.jpg","photos/tromb.jpg", "photos/selfie.jpg");

function choosePicIntro() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPictureIntro").src = myPix[randomNum];
}

// source: https://www.peachpit.com/articles/article.aspx?p=2239154&seqNum=10
