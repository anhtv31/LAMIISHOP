// Giỏ hàng
const cart = [];
const totalPriceElement = document.getElementById("total-price");
const cartItemsElement = document.getElementById("cart-items");

// Hàm thêm sản phẩm vào giỏ
function addToCart(productId, productName, productPrice) {
    cart.push({ id: productId, name: productName, price: productPrice });
    updateCart();
}

// Cập nhật giỏ hàng
function updateCart() {
    cartItemsElement.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price.toLocaleString()}đ`;
        cartItemsElement.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice.toLocaleString();
}

// Thêm sự kiện vào nút "Thêm vào giỏ"
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const productElement = button.parentElement;
        const productId = productElement.dataset.id;
        const productName = productElement.querySelector("h3").textContent;
        const productPrice = parseInt(productElement.querySelector("p").textContent.replace("Giá: ", "").replace("đ", "").replace(".", ""));

        addToCart(productId, productName, productPrice);
    });
});
