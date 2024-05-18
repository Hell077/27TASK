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

document.addEventListener('DOMContentLoaded', function () {
  const imageUrls1 = [
    "https://source.unsplash.com/random/1000x1000?sig=1",
    "https://source.unsplash.com/random/1000x1000?sig=2",
    "https://source.unsplash.com/random/1000x1000?sig=3",
    "https://source.unsplash.com/random/1000x1000?sig=4",
    "https://source.unsplash.com/random/1000x1000?sig=5",
    "https://source.unsplash.com/random/1000x1000?sig=6",
    "https://source.unsplash.com/random/1000x1000?sig=7",
    "https://source.unsplash.com/random/1000x1000?sig=8",
    "https://source.unsplash.com/random/1000x1000?sig=9",
    "https://source.unsplash.com/random/1000x1000?sig=10"
  ];

  const imageUrls2 = [
    "https://source.unsplash.com/random/1000x1000?sig=11",
    "https://source.unsplash.com/random/1000x1000?sig=12",
    "https://source.unsplash.com/random/1000x1000?sig=13",
    "https://source.unsplash.com/random/1000x1000?sig=14",
    "https://source.unsplash.com/random/1000x1000?sig=15",
    "https://source.unsplash.com/random/1000x1000?sig=16",
    "https://source.unsplash.com/random/1000x1000?sig=17",
    "https://source.unsplash.com/random/1000x1000?sig=18",
    "https://source.unsplash.com/random/1000x1000?sig=19",
    "https://source.unsplash.com/random/1000x1000?sig=20"
  ];

  const imageUrls3 = [
    "https://source.unsplash.com/random/1000x1000?sig=21",
    "https://source.unsplash.com/random/1000x1000?sig=22",
    "https://source.unsplash.com/random/1000x1000?sig=23",
    "https://source.unsplash.com/random/1000x1000?sig=24",
    "https://source.unsplash.com/random/1000x1000?sig=25",
    "https://source.unsplash.com/random/1000x1000?sig=26",
    "https://source.unsplash.com/random/1000x1000?sig=27",
    "https://source.unsplash.com/random/1000x1000?sig=28",
    "https://source.unsplash.com/random/1000x1000?sig=29",
    "https://source.unsplash.com/random/1000x1000?sig=30"
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
