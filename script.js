document.addEventListener("DOMContentLoaded", function() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            const name = this.getAttribute("data-name");
            const price = parseInt(this.getAttribute("data-price"));

            cart.push({ name, price });
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(name + " added to cart!");
        });
    });

    if (document.getElementById("cart-items")) {
        let cartItemsContainer = document.getElementById("cart-items");
        let totalPrice = 0;

        cart.forEach((item, index) => {
            let itemDiv = document.createElement("div");
            itemDiv.textContent = `${item.name} - ₹${item.price}`;
            cartItemsContainer.appendChild(itemDiv);
            totalPrice += item.price;
        });

        document.getElementById("total-price").textContent = totalPrice;
    }

    document.getElementById("checkout")?.addEventListener("click", function() {
        alert("Proceeding to payment...");
        localStorage.removeItem("cart");
        window.location.href = "index.html";
    });
});
