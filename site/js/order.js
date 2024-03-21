
function Order_Final()
{
    document.getElementById("order_final").style.display = "none";
    document.getElementById("loader").style.display = "block";
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("success_text").style.display = "block";

        localStorage.removeItem("orders");
        localStorage.removeItem("total_amount");
        localStorage.removeItem("total_prize");
        localStorage.removeItem("special");
        localStorage.removeItem("gluten-free");
        localStorage.removeItem("pizza");
        localStorage.removeItem("amount");

        document.getElementById("amount_text").textContent = 0;
    }, 3000);
}