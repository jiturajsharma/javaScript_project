    function changeBackgroundColor(color) {
        document.body.style.backgroundColor = color;
    }

    // Event listeners for each color button
    document.getElementById("grey").addEventListener("click", function () {
        changeBackgroundColor("#808080");
    });

    document.getElementById("white").addEventListener("click", function () {
        changeBackgroundColor("#ffffff");
    });

    document.getElementById("blue").addEventListener("click", function () {
        changeBackgroundColor("#3498db");
    });

    document.getElementById("yellow").addEventListener("click", function () {
        changeBackgroundColor("#f1c40f");
    });
