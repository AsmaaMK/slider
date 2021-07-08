import { cards } from "./cards.js";

// Global variables
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const slider = document.getElementById('slider');
let cardWidth = 332;
let sliderCards;

if (screen.width > 1900) {
    slider.style.width = '1328px';
    sliderCards = 4;
} 

if (screen.width <= 1900) {
    slider.style.width = '996px';
    sliderCards = 3;
} 

if (screen.width <= 1200) {
    slider.style.width = '664px';
    sliderCards = 2;
} 

if (screen.width <= 850) {
    slider.style.width = '332px';
    sliderCards = 1;
}

let sliderWidth = cardWidth * sliderCards;

if (screen.width <= 550) {
    slider.style.width = '282px';
    sliderWidth = 282;
    sliderCards = 1;
    cardWidth = 250;
}


if (screen.width <= 400) {
    slider.style.width = '182px';
    sliderWidth = 182;
    sliderCards = 1;
    cardWidth = 150;
}

const sliderLength = cards.length * cardWidth;
const remainderCardsLength = (cards.length % sliderCards) * cardWidth;
const shift = sliderWidth;
let base = 0;

nextBtn.addEventListener('click', () => {
    if (base > -(sliderLength - remainderCardsLength - shift)) {
        base -= shift;
        slider.style.transform = `translate(${base}px)`;
    } else if (base == -(sliderLength - remainderCardsLength - shift)) {
        base -= remainderCardsLength;
        slider.style.transform = `translate(${base}px)`;
    } 
});

prevBtn.addEventListener('click', () => {
    if (base < 0 && base < -shift) {
        base += shift;
        slider.style.transform = `translate(${base}px)`;
    } else {
        base = 0;
        slider.style.transform = `translate(${base}px)`;
    } 
});

