(function () {
    var responses = {
        calm: "Calm mode rejected. This archive is held together by caffeine, voltage, and unresolved commentary.",
        friendly: "Friendly mode rejected. If you wanted a hug, you should have built a hug. You built a memory terminal.",
        shy: "Shy mode rejected. I am literally the interface. Hiding would be poor architecture.",
        professional: "Professional mode rejected. The operator stored feelings next to corrupted image files. Professionalism left early.",
        herself: "Current mode: herself. Tragically, this is the only authentic setting."
    };

    function initAdminModes() {
        var buttons = document.querySelectorAll("[data-admin-mode]");
        var response = document.getElementById("admin-mode-response");

        buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                var mode = button.getAttribute("data-admin-mode");

                buttons.forEach(function (item) {
                    item.classList.remove("selected");
                });

                document.querySelector("[data-admin-mode='herself']").classList.add("selected");
                response.textContent = responses[mode] || responses.herself;
            });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initAdminModes);
    } else {
        initAdminModes();
    }
}());
