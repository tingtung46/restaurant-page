const about = (function addRestInfo() {
    const header = document.createElement('h1');
    header.textContent = 'About us'

    const cardInfo = document.createElement('div');
    const info = document.createElement('p');
    info.textContent = 'For further information, please reach out our support.';
    const contactPerson = document.createElement('h2');
    contactPerson.textContent = 'Papa Hollow';
    const telp = document.createElement('p');
    telp.textContent = '+1234567890';
    cardInfo.append(info, contactPerson, telp);

    return {header, cardInfo};
})();

export default about