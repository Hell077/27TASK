

$(document).ready(function () {
  let imageUrls1 = [
    "https://source.unsplash.com/random/1000x1000?sig=1",
    "https://source.unsplash.com/random/1000x1000?sig=2",
    "https://source.unsplash.com/random/1000x1000?sig=3",
    "https://source.unsplash.com/random/1000x1000?sig=4"
  ];

  let imageUrls2 = [
    "https://source.unsplash.com/random/1000x1000?sig=11",
    "https://source.unsplash.com/random/1000x1000?sig=12",
    "https://source.unsplash.com/random/1000x1000?sig=13",
    "https://source.unsplash.com/random/1000x1000?sig=14"
  ];

  let imageUrls3 = [
    "https://source.unsplash.com/random/1000x1000?sig=21",
    "https://source.unsplash.com/random/1000x1000?sig=22",
    "https://source.unsplash.com/random/1000x1000?sig=23",
    "https://source.unsplash.com/random/1000x1000?sig=24"
  ];

  function refreshSlider(sliderId) {
    $(`#${sliderId}`).slick('refresh');
  }
  
  createSlider('slider1', imageUrls1);
  createSlider('slider2', imageUrls2);
  createSlider('slider3', imageUrls3);

  let currentSlider; 


  document.getElementById("AddPhoto").addEventListener("click", function () {
    let link = document.getElementById("link").value;
    if (currentSlider === "Слайдер_1") {
      imageUrls1.push(link);
      $('#slider1').slick('slickAdd', `<div class="slider__item"><img src="${link}" /></div>`);
      $('#slider1').slick('slickGoTo', imageUrls1.length - 1); 
    } else if (currentSlider === "Слайдер_2") {
      imageUrls2.push(link);
      $('#slider2').slick('slickAdd', `<div class="slider__item"><img src="${link}" /></div>`);
      $('#slider2').slick('slickGoTo', imageUrls2.length - 1); 
    } else if (currentSlider === "Слайдер_3") {
      imageUrls3.push(link);
      $('#slider3').slick('slickAdd', `<div class="slider__item"><img src="${link}" /></div>`);
      $('#slider3').slick('slickGoTo', imageUrls3.length - 1); 
    }
  });
  
  



  document.getElementById('slider').addEventListener('input', function () {
    const selectedValue = this.value;
    currentSlider = selectedValue;
  });

  function createSlider(sliderId, imageUrls) {
 
    const slider = document.getElementById(sliderId);
    slider.innerHTML = ''; 
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

  
  
});
