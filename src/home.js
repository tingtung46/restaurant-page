function Element() {
    const header = document.createElement('h1');
    header.textContent = 'Welcome to Black Hole Restaurant!';

    const restInfo = document.createElement('div');
    const restDesc = document.createElement('p');
    restDesc.textContent = 'We offer best quality of oriental dishes and elegant service from our awesome chefs and waiters!';
    const img = new Image();
    img.src = '';
    restInfo.append(restDesc, img);

    const restPlace = document.createElement('div');
    const placeHeader = document.createElement('h1');
    placeHeader.textContent = 'Eat at cozy place';
    const placeDesc = document.createElement('p');
    placeDesc.textContent = 'Enjoy the beautiful scenery from inside restaurant';
    restPlace.append(placeHeader, placeDesc);

    return {header, restInfo, restPlace};
};

const home = new Element();

export default home;