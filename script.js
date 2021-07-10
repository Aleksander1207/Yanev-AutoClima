function toggleNavigation(){
    let navLinks = document.getElementsByClassName('topnav');
    for(let i=0;i<navLinks.length;i++){
        if(navLinks[i].style.display == 'block'){
            navLinks[i].style.display = 'none';
        }
        else{
            navLinks[i].style.display = 'block';
        }
    }
    
}

function toggleServices(serviceNum){
    let dropdowns = document.getElementsByClassName('dropdown-content');
    let signs = document.getElementsByTagName('i');
    if(signs[serviceNum+1].className == 'fas fa-plus'){
        dropdowns[serviceNum].style.display = 'block';
        signs[serviceNum+1].className = 'fas fa-minus';
    }
    else{
        dropdowns[serviceNum].style.display = 'none';
        signs[serviceNum+1].className = 'fas fa-plus';
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let images = document.getElementsByClassName("image-container");
  let infos = document.getElementsByClassName("info-container");
  let dots = document.getElementsByClassName("dot");
  if (n > images.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = images.length}
  for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";  
      infos[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  images[slideIndex-1].style.display = "block";  
  infos[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}