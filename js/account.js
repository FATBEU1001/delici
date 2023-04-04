$(function () {
    $("#datepicker").datepicker();
});
$(function () {
    $(".list-info li").click(function () {
        $(this).addClass("after");
        $(this).siblings().removeClass("after");
        $tab = $(this).attr("dataid");
        $($tab).addClass("active");
        $($tab).siblings().removeClass("active");
    });
});
function showInforBooking(infolocal) {
    const bookName = document.querySelector(".bookName");
    const bookEmail = document.querySelector(".bookEmail");
    const bookPerson = document.querySelector(".bookPerson");
    const bookDay = document.querySelector(".bookday");
    const bookTime = document.querySelector(".bookTime");
    if (infolocal) {
        bookName.innerHTML = infolocal["name"];
        bookEmail.innerHTML = infolocal["email"];
        bookPerson.innerHTML = infolocal["bookPerson"];
        bookDay.innerHTML = infolocal["bookDay"];
        bookTime.innerHTML = infolocal["time"];
    } else {
        bookName.innerHTML = "";
        bookEmail.innerHTML = "";
        bookPerson.innerHTML = "";
        bookDay.innerHTML = "";
        bookTime.innerHTML = "";
    }
}
const info = JSON.parse(localStorage.getItem("INFORBOOKNG"));
showInforBooking(info);

const remove = document.querySelector(".remove .btn2");
remove.addEventListener("click", () => {
    localStorage.removeItem("INFORBOOKNG");
    showInforBooking();
});
