document.addEventListener('DOMContentLoaded', init);
function init() {}

function toggleMenu(Elem) {
    const isMenuVisible = document.body.classList.contains('menu-visible');
    isMenuVisible 
        ? document.body.classList.remove('menu-visible') 
        : document.body.classList.add('menu-visible');
}

