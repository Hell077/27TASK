$(document).ready(function () {
  $('.slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev">Назад</button>',
    nextArrow: '<button type="button" class="slick-next">Вперед</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});


function ShowMenu() {
  document.getElementById("menu").style.display = "flex"
}

function closeMenu(){
  document.getElementById("menu").style.display = "none"
}


function add(){
  let link = document.getElementById("link").value
  console.log(link)
}





document.addEventListener('DOMContentLoaded', function () {
  const imageUrls1 = [
    "https://source.unsplash.com/random/1000x1000?sig=1",
    "https://source.unsplash.com/random/1000x1000?sig=2",
    "https://source.unsplash.com/random/1000x1000?sig=3",
    "https://source.unsplash.com/random/1000x1000?sig=4"
  ];

  const imageUrls2 = [
    "https://source.unsplash.com/random/1000x1000?sig=11",
    "https://source.unsplash.com/random/1000x1000?sig=12",
    "https://source.unsplash.com/random/1000x1000?sig=13",
    "https://source.unsplash.com/random/1000x1000?sig=14"
  ];

  const imageUrls3 = [
    "https://source.unsplash.com/random/1000x1000?sig=21",
    "https://source.unsplash.com/random/1000x1000?sig=22",
    "https://source.unsplash.com/random/1000x1000?sig=23",
    "https://source.unsplash.com/random/1000x1000?sig=24"
  ];

  function createSlider(sliderId, imageUrls) {
    const slider = document.getElementById(sliderId);
    imageUrls.forEach(url => {
      const item = document.createElement('div');
      item.classList.add('slider__item');
      const img = document.createElement('img');
      img.src = url;
      item.appendChild(img);
      slider.appendChild(item);
    });

    $(slider).slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      prevArrow: '<button type="button" class="slick-prev">Назад</button>',
      nextArrow: '<button type="button" class="slick-next">Вперед</button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  }

  createSlider('slider1', imageUrls1);
  createSlider('slider2', imageUrls2);
  createSlider('slider3', imageUrls3);
});
