import { cards } from "./cards.js";

// Global variables
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const slider = document.getElementById('slider');
const cardWidth = 332;
const sliderCards = 4;
const sliderWidth = cardWidth * sliderCards;

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