const menu = document.getElementsByClassName("header__menu-wrapper")[0]
const closeButton = document.getElementsByClassName("header__menu-close_button")[0]

closeButton.onclick = (e) => {
    menu.classList.toggle("close")
}