const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

// Обработчик клика для меню-бургера
burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    burgerMenu.classList.toggle('open'); // Добавим анимацию
		
});




