function showimage(name)
{
  document.getElementById("hide").style.display = "none";

  // document.getElementsByClassName("next").style.visibility = "visible";

  // document.getElementsByClassName("prev").style.visibility = "visible";
  
  // document.getElementsByClassName("dot").style.visibility = "visible";

  var image = document.getElementById('Slider1');
  image.src = './images/'+name+'1.png'; 

  var image = document.getElementById('Slider2');
  image.src = './images/'+name+'2.png'; 

  var image = document.getElementById('Slider3');
  image.src = './images/'+name+'3.png';
  
  currentSlide(1);
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n)
{
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n)
{
  showSlides(slideIndex = n);
}

function showSlides(n)
{ 
  let i;
  let slides = document.getElementsByClassName("Slider");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length)
  {slideIndex = 1}
  if (n < 1)
  {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++)
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}