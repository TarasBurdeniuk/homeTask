const navMenu = document.getElementsByClassName('nav-menu');

navMenu[0].addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('nav-menu-active');
    document.getElementsByClassName('menu-nav')[0].classList.toggle('menu-nav_active');
});