console.log('Hello our great customer!');
const content = document.querySelector('#content');
import home from "./home.js";

content.append(home.header, home.restInfo, home.restPlace);