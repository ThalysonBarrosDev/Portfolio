/* Responsiveness */
var navUl = document.querySelector('.nav-ul');
var menuIcon = document.querySelector('.nav-mobile-icon');

menuIcon.addEventListener('click', () => {
    if (navUl.classList.contains('active')) {

        navUl.classList.remove('active');
        document.querySelector('.nav-mobile-icon img').src = 'assets/img/menu-open.png';

    } else {

        navUl.classList.add('active');
        document.querySelector('.nav-mobile-icon img').src = 'assets/img/menu-close.png';
        
    }
});