// ----------------------Element2-Slider----------------------
const MOCK_API = "https://60d4611a61160900173cb070.mockapi.io/courses";
const t = document.querySelector.bind(document);
const ListElement = t(".elementor2-widget-slider");

// -----------------------GET_API--------------

const GetApi = (callback) => {
  fetch(MOCK_API)
    .then(function (respon) {
      return respon.json();
    })
    .then(callback);
};

const DomHtml = (get) => {
  const HTML = get.map((temp) => {
    let Starrate = ``;
    let StarnotRate = ``;
    for (let i = 0; i < temp.rate; ++i) {
      Starrate += `<p class="star"><i class="fa-regular fa-star" style="color: #ffc600"></i></p>`;
    }
    for (let i = 0; i < 5 - temp.rate; ++i) {
      StarnotRate += `<p class="star"><i class="fa-regular fa-star"></i></p>`;
    }
    return `
            <div class="widget-slider-container">
                <img src="${temp.image}" alt="">
                <div class="slider-container-box">
                <div class="container-box-rate">
                     ${Starrate}
                     ${StarnotRate} 
                     <p class="title-rate">${temp.rate}.00 (${temp.rate_quantity})</p>
                 </div>
                 <div class="container-box-title">
                      <p class="title-name">Learn JavaScript – Full Course for Beginners</p>
                      <div class="title-quantity">
                        <i class="fa-regular fa-user" style="color: yellow;"></i>
                        <p>${temp.total_enrolled}</p>
                         <i class="fa-regular fa-clock" style="color: yellow; margin-left:12px;"></i>
                         <p>${temp.duration}</p>
                      </div>
                      <div class="title-box">
                          <img src="./img/image/teacher_2.jpg" alt="">
                          <p>by <span>${temp.teacher}</span> in <span>${temp.categories}</span></p>
                      </div>
                 </div>
                <hr>
                <div class="container-box-price">
                   <div class="price-num">
                     <i class="fa-solid fa-lira-sign" style="color: yellow;"></i>
                     <p>${temp.price}</p>
                   </div>
                   <div class="price-get">
                    <i class="fa-solid fa-cart-shopping" style="color: yellow;"></i>
                    <a href="#">Get inrolled</a>
                   </div>
                </div>
               
              </div>
	      </div>
     `;
  });

  console.log(HTML);
  ListElement.innerHTML = HTML.join("");

  $(".elementor2-widget-slider").slick({
    slidesToShow: 3,
    slideToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: `${".box-control-prev"}`,
    nextArrow: `${".box-control-next"}`,

    responsive: [
      {
        breakpoint: 821,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 440,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });
};

GetApi(DomHtml);

// -----------------------------------Navbar-------------------------------
const opens = t(".icon-menu");
const navi = t(".navigation");

opens.addEventListener("click", function () {
  // navi.style.display = "block";
  if (navi.style.display === "block") {
    navi.style.display = "none";
    opens.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    navi.style.display = "block";
    opens.innerHTML = `<i class="fa-solid fa-xmark" style="font-size:25px;"></i>`;
  }
  // opens.innerHTML = `<i class="fa-solid fa-xmark" style="font-size:25px;"></i>`;
  // opens.setAttribute("class", "close-navi");
});

// const closes = t(".close-navi");

// closes.addEventListener("click", function () {
//   navi.style.display = "none";
//   opens.removeAttribute("class", "close-navi");
// });
