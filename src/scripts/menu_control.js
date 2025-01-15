const menu = document.getElementsByClassName("header__menu-wrapper")[0]
const closeButton = document.getElementsByClassName("header__menu-close_button")[0]

const links = menu.getElementsByTagName("a");

function openCloseSideNav() {
    menu.classList.toggle("close")
}

for (var i = 0; i < links.length; i++) {
    links[i].onclick = (e) => openCloseSideNav()
}

closeButton.onclick = (e) => openCloseSideNav()
