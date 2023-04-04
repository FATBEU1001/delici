// animation scroll
$(".scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
});
// fixed navbar
$(window).scroll(function () {
    const sticky = $(".navbar"),
        scroll = $(window).scrollTop();

    if (scroll >= 50) {
        sticky.addClass("fixed");
    } else {
        sticky.removeClass("fixed");
    }
});

$(".nav-item").click(function () {
    $(".toggle-menu").slideToggle(500);
    $(".icon-dow").toggleClass("active");
});
// show modal
// const modal = document.getElementById("videoModal");
// const btn = document.getElementById("openModal");
// const span = document.getElementsByClassName("close")[0];
// btn.onclick = function () {
//     modal.style.display = "block";
// };
// span.onclick = function () {
//     modal.style.display = "none";
// };
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// };
// nhập thông tin contact
function loadCart() {
    let numberCart = localStorage.getItem("INFORCART") ? JSON.parse(localStorage.getItem("INFORCART")).length : 0;
    let couCart = document.querySelector(".cart span");
    couCart.innerHTML = numberCart;
}
loadCart();
