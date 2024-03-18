function Order_Final()
{
    if (localStorage.getItem("delivery_type") === "toimitus")
    {
        if (document.getElementById("deliveryDiv").value !== "")
        {
            document.getElementById("loader").style.display = "block";
            document.getElementById("order_final").style.display = "none";

            localStorage.removeItem("special");
            localStorage.removeItem("pizza");
            localStorage.removeItem("total_amount");
            localStorage.removeItem("total_prize");
            localStorage.removeItem("amount");
            localStorage.removeItem("orders");
            localStorage.removeItem("delivery_type");
            localStorage.removeItem("gluten-free");

            setTimeout(function() {
                document.getElementById("loader").style.display = "none";
                document.getElementById("success_text").style.display = "block";
            }, 3000)
        }
        else
        {
            alert("Ole hyvä ja anna osoite");
        }
    }
    else
    {
        document.getElementById("loader").style.display = "block";
        document.getElementById("order_final").style.display = "none";

        localStorage.removeItem("special");
        localStorage.removeItem("pizza");
        localStorage.removeItem("total_amount");
        localStorage.removeItem("total_prize");
        localStorage.removeItem("amount");
        localStorage.removeItem("orders");
        localStorage.removeItem("delivery_type");
        localStorage.removeItem("gluten-free");

        setTimeout(function() {
            document.getElementById("loader").style.display = "none";
            document.getElementById("success_text").style.display = "block";
        }, 3000)
    }
}