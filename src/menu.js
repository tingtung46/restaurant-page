const menu = (function Menu() {
    const header = document.createElement('h1');
    header.textContent = 'Menu';

    const padThai = new MenuCard();
    padThai.food.textContent = 'Pad Thai';
    padThai.desc.textContent = 'Stir fryed Thai noodle with a sweet-savoury-sour sauce scattered with crushed peanuts.';
    const divPadThai = padThai.card;

    const friedRice = new MenuCard();
    friedRice.food.textContent = 'Fried Rice';
    friedRice.desc.textContent = 'Combination of long grained rice, mixture of warm peas, carrots, and onions with scrambled eggs.';
    const divFriedRice = friedRice.card;

    const mapoTofu = new MenuCard();
    mapoTofu.food.textContent = 'Mapo Tofu';
    mapoTofu.desc.textContent = 'Authentic taste of China that features soft tofu cooked in rich, spicy, and savory sauce that is full of aroma.';
    const divMapoTofu = mapoTofu.card;

    return {header, divPadThai, divFriedRice, divMapoTofu};
})();

function MenuCard() {
    const card = document.createElement('div');
    const food = document.createElement('h2');
    const img = new Image();
    const desc = document.createElement('p');

    card.append(food, img, desc);

    return {card, food, img, desc};
};

export default menu