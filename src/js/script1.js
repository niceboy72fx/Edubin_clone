//-----------------Library---------------------

//-------------------------------------------------
const $$ = document.querySelector.bind(document);

// ------------------------Slider-----------------------
const slider_background = $$(".slider");
const slider_content = $$(".slider-container");
const next = document.getElementsByClassName("slider-right")[0];
const prev = document.getElementsByClassName("slider-left")[0];

const slider1 = `
     <div class="slider-container-name font-sans Roboto">
        Choose The Right <br>  Theme for Education
     </div>
     <p class="slider-container-text">
        Lorem dummy text of the printing and typesetting industry lorem ipsum <br> has been the industry's standard dummy text.     
     </p>
     <div class="slider-container-button">
        <a href="#" style="background-color: #ffc600;">Apply Now</a>
	 <a href="#" style="background-color: #ffff;">Learn More</a>    
     </div>
`;

const slider2 = `
     <div class="slider-container-name font-sans Roboto">
        Best LMS Education <br> WordPress Theme
     </div>
     <p class="slider-container-text">
        Lorem dummy text of the printing and typesetting industry lorem ipsum <br> has been the industry's standard dummy text.
     </p>
     <div class="slider-container-button">
        <a href="#" style="background-color: #ffc600;">Apply Now</a>
	    <a href="#" style="background-color: #ffff;">Learn More</a>   
     </div>
`;

var image = ["img/image/thumbnail.jpg", "img/image/thumbnail2.jpg"];
var sliders = [slider1, slider2];
var i = 0;

next.addEventListener("click", function (i) {
  if (i <= 0) {
    i = image.length;
  }
  i--;
  return Slider();
});

prev.addEventListener("click", function (i) {
  if (i >= 0) {
    i = image.length;
  }
  i++;
  return Slider();
});

const Slider = () => {
  if (i > image.length - 1) {
    i = 0;
  }
  slider_background.style.backgroundImage = `url(${image[i]})`;
  slider_content.innerHTML = `${sliders[i]}`;
  slider_background.style.transition = "all 3s";
  i++;
  setTimeout("Slider()", 26000);
};
Slider();

// -------------------Caroucell-slider--------------------
//- use Jquery

document.addEventListener("DOMContentLoaded", () => {
  $(".caroucell-container").slick({
    slidesToShow: 3,
    slideToScroll: 1,
    arrows: true,
    draggable: false,
    autoplaySpeed: 2000,
    prevArrow: `${".caroucell-left"}`,
    nextArrow: `${".caroucell-right"}`,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 2,
        },
      },
    ],
  });
});

// ----------------feedback------------
document.addEventListener("DOMContentLoaded", () => {
  $(".elementor5-widget-caroucell").slick({
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 2,
    infinite: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
