const menuMobile = document.querySelector('.menu-mobile');
const navMenu = document.querySelector('.menu');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fecha o menu quando clica em um link (mobile)
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    menuMobile.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Fecha o menu quando clica fora dele
document.addEventListener('click', (e) => {
    if (!menuMobile.contains(e.target) && !navMenu.contains(e.target)) {
        menuMobile.classList.remove('active');
        navMenu.classList.remove('active');
    }
});