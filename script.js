document.addEventListener("DOMContentLoaded", function() {
    const totalAmount = localStorage.getItem("totalAmount") || "0";
    document.getElementById("amount").textContent = totalAmount;

    const upiID = "upi://pay?pa=yourupi@upi&pn=Your Name&am=" + totalAmount + "&cu=INR";
    new QRCode(document.getElementById("qrcode"), {
        text: upiID,
        width: 200,
        height: 200
    });

    localStorage.removeItem("cart");  // Clear cart after payment

    setTimeout(() => {
        alert("Payment successful! Thank you for your purchase.");
        window.location.href = "index.html";
    }, 30000); // Simulate payment success after 30 seconds
});
