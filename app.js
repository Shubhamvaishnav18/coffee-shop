let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cartItem.classList.remove('active');
}

let search = document.querySelector('.search-form');

document.querySelector('#search').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
    cartItem.classList.remove('active');
}