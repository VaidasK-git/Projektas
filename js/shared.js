//Hamburger mygtuko paspaudimas
document
    .querySelector(".hamburger")
    .addEventListener("click", function () {
        document.querySelector(".mobile-nav").style.display = "block";
    })

document
    .querySelector(".mobile-nav")
    .addEventListener("click", function () {
        document.querySelector(".mobile-nav").style.display = "none";
    })