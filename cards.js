export const cards = [];

for (let i = 1; i <= 20; i++) {
    cards.push({ 
        img: 'http://unsplash.it/300/300', 
        title: `Card ${i}`, 
        desc: `${i}` 
    });
}

for (let card of cards) {
    const newCard = document.createElement('div');
    newCard.innerHTML =
        `<div class="image">
            <img src="${card.img}" alt="card"></img>
        </div>
        <p class="title">${card.title}</p>
        <p class="desc">${card.desc}</p>`;

    newCard.classList.add('card');
    slider.appendChild(newCard);
}