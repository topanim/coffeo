const contactButton = document.getElementById("contact-button")
const userEmailTextField = document.getElementById("contact-email-field")

contactButton.onclick = (e) => {
    const message = userEmailTextField.value + "%0AЗдравствуйте,%20хочу%20обсудуть%20наше%20с%20вами%20сотрудничество!"
    const contactLink = "https://wa.me/79939503234?text=" + message;
    console.log(contactLink)
    window.location.href = contactLink
}