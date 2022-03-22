const nav = document.getElementById('nav');

function openMenu() {
    nav.style.display = 'block';
}

function closeMenu() {
    nav.classList = 'slideOut';
    setTimeout(() => { nav.style.display = 'none'; }, 990);
    setTimeout(() => { nav.classList.remove("slideOut"); }, 990);
}