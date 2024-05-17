// Cerrar el menú al hacer scroll
window.addEventListener('scroll', function() {
    document.getElementById('toggle').checked = false;
  });
  

  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("banner");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  

  setTimeout(() => {
    plusSlides(1);
  }, 8000);
  }

let modal = document.getElementById("myModal");
let navbar = document.getElementById("navbar");

let img = document.getElementsByClassName("gallery")[0].getElementsByTagName("img");
let modalImg = document.getElementById("img01");

// for (let i = 0; i < img.length; i++) {
//   img[i].onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//   }
// }

for (let i = 0; i < img.length; i++) {
  img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    
    navbar.style.display = "none";
  }
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";

  navbar.style.display = "block";
}









