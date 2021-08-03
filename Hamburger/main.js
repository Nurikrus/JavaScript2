'use strict';

const Hamburger = [
    { id: '1', class: 'big', title: 'Большой', price: 100, calories: 40, name: 'exampleRadios1' },
    { id: '2', class: 'small', title: 'Маленький', price: 50, calories: 20, name: 'exampleRadios1' },
];

const toping = [
    { id: '11', class: 'ches', title: 'С сыром', price: 10, calories: 20, name: 'exampleRadios' },
    { id: '12', class: 'salat', title: 'С салатом', price: 20, calories: 5, name: 'exampleRadios' },
    { id: '13', class: 'potat', title: 'С картофелем', price: 15, calories: 10, name: 'exampleRadios' },
];

const additionally = [
    { id: '21', class: 'spice', title: 'посыпать приправой', price: 15, calories: 0 },
    { id: '22', class: 'mayo', title: 'полить майонезом', price: 20, calories: 5 },
];

const renderProduct = item =>
    `<div class="form-check">
        <input class="${item.class}" type="radio" name="${item.name}" id="${item.id}" value="option1">
        <label class="${item.class}" for="${item.id}">${item.title} (${item.price} \u20bd, ${item.calories} калорий).
            </label>
    </div>`;

const renderAdd = item =>
    `<label for="${item.id}">
        <input id="${item.id}" class="${item.class}" type="checkbox"> ${item.title} (+${item.price} \u20bd, +${item.calories} калорий).
    </label><br>`;

const renderProducts = list => {
    document.querySelector('.Hamb').insertAdjacentHTML('afterend', list.map(item => renderProduct(item)).join(''));
};
renderProducts(Hamburger);

const renderTopings = list => {
    document.querySelector('.Toping').insertAdjacentHTML('afterend', list.map(item => renderProduct(item)).join(''));
};
renderTopings(toping);

const renderAdds = list => {
    document.querySelector('.Addition').insertAdjacentHTML('afterend', list.map(item => renderAdd(item)).join(''));
};
renderAdds(additionally);

const inpAll = document.querySelectorAll('input');
const sum = document.querySelectorAll('span');
sum.forEach(element => {
    element.textContent = 0;
});
inpAll.forEach(element => {
    element.addEventListener('click', sumAll);
});
function sumAll() {
    sum.forEach(element => {
        element.textContent = 0;
    });
    inpAll.forEach(element => {
        if (element.checked) {
            for (let i = 0; i < Hamburger.length; i++) {
                if (Hamburger[i].id == element.id) {
                    sum[0].textContent = Number(sum[0].textContent) + Hamburger[i].price;
                    sum[1].textContent = Number(sum[1].textContent) + Hamburger[i].calories;
                    break;
                };
            };
            for (let i = 0; i < toping.length; i++) {
                if (toping[i].id == element.id) {
                    sum[0].textContent = Number(sum[0].textContent) + toping[i].price;
                    sum[1].textContent = Number(sum[1].textContent) + toping[i].calories;
                    break;
                };
            };
            for (let i = 0; i < additionally.length; i++) {
                if (additionally[i].id == element.id) {
                    sum[0].textContent = Number(sum[0].textContent) + additionally[i].price;
                    sum[1].textContent = Number(sum[1].textContent) + additionally[i].calories;
                    break;
                };
            };
        };
    });
};