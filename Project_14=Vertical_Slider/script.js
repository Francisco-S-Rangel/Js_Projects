const sliderContainer = document.querySelector('.slider-container');
const rightSlide = document.querySelector('.right-slide');
const leftSlide = document.querySelector('.left-slide');
const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');

const slidesLength = rightSlide.querySelectorAll('div').length;

let activeIndex = 0;
leftSlide.style.top = `-${(slidesLength - 1) *100}vh`;

upBtn.addEventListener('click',()=> changeSlide('up'));
downBtn.addEventListener('click',()=> changeSlide('down'));

function changeSlide(direction){
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === 'up'){
        activeIndex++;
        if(activeIndex > slidesLength -1){
            activeIndex =0;
        }
    }else if(direction === 'down'){
        activeIndex--;
        if(activeIndex < 0){
            activeIndex = slidesLength -1;
        }
    }

    rightSlide.style.transform = `translateY(-${activeIndex * sliderHeight}px)`;
    leftSlide.style.transform = `translateY(${activeIndex * sliderHeight}px)`;
}