const textForImg =["Код", "Рыба", "Рыба", "Рыба", "Рыба"];

var slide = 0,
    welcomeSlider = document.querySelector('.meme__slider-imgs'),
    welcomeSliderBullets = document.querySelector('.meme__slider-bullets'),
    textForSlide = document.querySelector('.meme__slide-text'),
    slides = [],
    numSlides = 6,

    loadSlides = () => {
      for (let el = numSlides; el > 0; el--) {
        let img = document.createElement('div');
        let bullet = document.createElement('div');
        img.classList.add('meme__img');
        bullet.classList.add('meme__slider-bullet');
        img.style.background = `url(./assets/${el}.jpg) no-repeat`;
        welcomeSlider.prepend(img);
        slides.push(img);

        if (el == numSlides) {
          bullet.classList.add('meme__slide-active');
        }
        welcomeSliderBullets.append(bullet);
      }
    }

    const bulletArr = welcomeSliderBullets.children;

    currentSlide = function() {
      const slideWidth = welcomeSlider.offsetWidth;
      const offset = -slide * slideWidth;
      let activeBullet = document.querySelector('.meme__slide-active');

      activeBullet.classList.remove('meme__slide-active');
      bulletArr[slide].classList.add('meme__slide-active');
      textForSlide.innerText = textForImg[slide];

      welcomeSlider.style.transform = `translate(${offset}px)`;
    },
    next = function() {
      slide++;
      if (slide >= numSlides) slide = 0;
      currentSlide();
    },
    prev = function() {
      slide--;
      if (slide < 0) slide = numSlides - 1;
      currentSlide();
    };

//Buttons
loadSlides();
for (let i = 0; i < bulletArr.length; i++) {
  bulletArr[i].addEventListener('click', function() {
    slide = i;
    currentSlide();
  }, false);
}