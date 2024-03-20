
function Order_Final()
{
    document.getElementById("order_final").style.display = "none";
    document.getElementById("loader").style.display = "block";
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("success_text").style.display = "block";
    }, 3000);
}