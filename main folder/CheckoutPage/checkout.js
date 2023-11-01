// Quantity Increament
document.addEventListener("DOMContentLoaded", function() {
    var plus = document.getElementById("plus");
    var minus = document.getElementById("minus");
    var num = document.getElementById("num");

    let a = 1;

    plus.addEventListener("click", () => {
        a++;
        num.textContent = a;
    });

    minus.addEventListener("click", () => {
        if (a > 1) {
            a--;
            num.textContent = a;
        }
    });
});