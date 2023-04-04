const inputs = document.querySelectorAll(".input-info .input");
const names = document.querySelector(".fullname b");
const street = document.querySelector(".street b");
const city = document.querySelector(".city b");
const phone = document.querySelector(".phone b");
const email = document.querySelector(".email b");
// const button = document.querySelector(".input-info .btn2 ");
// button.addEventListener("click", () => {
//     names.textContent = document.querySelector(".input.name").value;
//     street.textContent = document.querySelector(".input.address").value;
//     city.textContent = document.querySelector(".input.town").value;
//     phone.textContent = document.querySelector(".input.number").value;
//     email.textContent = document.querySelector(".input.mail").value;
// });
const infoCartDetail = JSON.parse(localStorage.getItem("INFORCART"));
console.log(infoCartDetail);
const productInner = document.querySelector(".product-name .popup");
function renderInfoBilling(groupProduct) {
    groupProduct.forEach((product) => {
        productInner.innerHTML += ` 
            <div class="popup-product d-flex align-items-center">
                <div class="image">
                    <img src="${product.image}" alt="" />
                </div>
                <div class="popup-item">
                    <h6><b>Product :</b> <i>${product.nameItem}</i></h6>
                    <p class="select"><b>Select :</b><i>${product.select}</i></p>
                    <div class="money">
                        <p class="quantity-product"><b>Quantity :</b> <i>${product.quantity}</i></p>
                    </div>
                    <p class="price">${product.priceTotal}</p>
                </div>
            </div>
       `;
    });
}
renderInfoBilling(infoCartDetail);
