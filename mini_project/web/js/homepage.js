//tabs
function world(evt, kingdom)
{
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++)
	{
		tabcontent[i].style.display = "none";
	}
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++)
	{
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  document.getElementById(kingdom).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

//gallery_spade
var slideIndex_spade = 1;
showSlides_spade(slideIndex_spade);

function currentSlide_spade(n) {
  showSlides_spade(slideIndex_spade = n);
}

function showSlides_spade(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_spade");
  var dots = document.getElementsByClassName("demo_spade");
  var captionText = document.getElementById("caption_spade");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_spade-1].style.display = "block";
  dots[slideIndex_spade-1].className += " active";
  captionText.innerHTML = dots[slideIndex_spade-1].alt;
}

//gallery_heart
var slideIndex_heart = 1;
showSlides_heart(slideIndex_heart);

function currentSlide_heart(n) {
  showSlides_heart(slideIndex_heart = n);
}

function showSlides_heart(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_heart");
  var dots = document.getElementsByClassName("demo_heart");
  var captionText = document.getElementById("caption_heart");
  if (n > slides.length) {slideIndex_heart= 1}
  if (n < 1) {slideIndex_heart = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_heart-1].style.display = "block";
  dots[slideIndex_heart-1].className += " active";
  captionText.innerHTML = dots[slideIndex_heart-1].alt;
}

//gallery_diamond
var slideIndex_diamond = 1;
showSlides_diamond(slideIndex_diamond);

function currentSlide_diamond(n) {
  showSlides_diamond(slideIndex_diamond = n);
}

function showSlides_diamond(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_diamond");
  var dots = document.getElementsByClassName("demo_diamond");
  var captionText = document.getElementById("caption_diamond");
  if (n > slides.length) {slideIndex_diamond= 1}
  if (n < 1) {slideIndex_diamond = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_diamond-1].style.display = "block";
  dots[slideIndex_diamond-1].className += " active";
  captionText.innerHTML = dots[slideIndex_diamond-1].alt;
}

//gallery_club
var slideIndex_club = 1;
showSlides_club(slideIndex_club);

function currentSlide_club(n) {
  showSlides_club(slideIndex_club = n);
}

function showSlides_club(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_club");
  var dots = document.getElementsByClassName("demo_club");
  var captionText = document.getElementById("caption_club");
  if (n > slides.length) {slideIndex_club= 1}
  if (n < 1) {slideIndex_club = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_club-1].style.display = "block";
  dots[slideIndex_club-1].className += " active";
  captionText.innerHTML = dots[slideIndex_club-1].alt;
}
