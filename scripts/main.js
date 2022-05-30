button = document.getElementById("dropdown-menu");
navigation = document.getElementById("navigation");

button.addEventListener("click", e => {
    navigation.classList.toggle("mobile-navigation")
})
