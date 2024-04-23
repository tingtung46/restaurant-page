console.log('Hello our great customer!');

const content = document.querySelector('#content');
const homeTab = document.querySelector('.home');
const menuTab = document.querySelector('.menu');
const aboutTab = document.querySelector('.about');

import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js"

content.append(home.header, home.restInfo, home.restPlace);

homeTab.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    };
    content.append(home.header, home.restInfo, home.restPlace);
});

menuTab.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    };
    content.append(menu.header, menu.divPadThai, menu.divFriedRice, menu.divMapoTofu);
});

aboutTab.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    };
    content.append(about.header, about.cardInfo);
});