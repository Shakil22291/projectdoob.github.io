function dropFunction(){document.getElementById("myDropdown").classList.toggle("show")}const navSlide=()=>{const e=document.querySelector(".burger"),s=document.querySelector(".main-nav");e.addEventListener("click",()=>{s.classList.toggle("nav-active")})};function navFunction(){document.querySelector(".main-nav").classList.remove("nav-active")}function burgerFuction(e){e.classList.toggle("change")}navSlide();const scrollUp=document.querySelector(".scrollUp");window.addEventListener("scroll",()=>{window.pageYOffset>100?scrollUp.classList.add("ative-scroll"):scrollUp.classList.remove("ative-scroll")});var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var s,l=document.getElementsByClassName("mySlides"),n=document.getElementsByClassName("dot");for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),s=0;s<l.length;s++)l[s].style.display="none";for(s=0;s<n.length;s++)n[s].className=n[s].className.replace(" active","");l[slideIndex-1].style.display="block",n[slideIndex-1].className+=" active"}showSlides(slideIndex);