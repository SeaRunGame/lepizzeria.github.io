
function Order_Final()
{
    if (document.getElementById("deliveryDiv").value !== "" && document.getElementById("deliveryDiv").value !== null)
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
            localStorage.removeItem("pohja");

            localStorage.setItem("amount", 0);
            document.getElementById("amount_text").textContent = localStorage.getItem("amount");
        }, 3000);
    }
    else
    {
        alert("Ole hyvä ja anna osoitteesi")
    }
}