const searchBtn = document.querySelector('.navbar-collapse form .btn');
const searchInput = document.querySelector('.navbar-collapse  form input');

// Search
searchBtn.addEventListener('click', () => {
    searchInput.classList.add('active')
})

// Tweenmax menu
TweenMax.staggerFrom('.nav-item', 2, {
    opacity: '0',
    x: '30',
    ease: Expo.easeInOut,
    delay: 1
}, 0.5)