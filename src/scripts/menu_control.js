const menu = document.getElementsByClassName("header__menu-wrapper")[0]
const closeButton = document.getElementsByClassName("header__menu-close_button")[0]

const links = menu.getElementsByTagName("a")

for (element in links) {
    element.onclick = (e) => {
        console.log(element)
        menu.classList.toggle("close")
    }
}
    
closeButton.onclick = (e) => {
    menu.classList.toggle("close")
}
