(function () {
    var CONFIG = {
        optInUrl: ""
    };
    function trim(s) {
        return (s || "").replace(/^\s+|\s+$/g, "");
    }
    function init() {
        var optIn = trim(CONFIG.optInUrl);
        var optInEl = document.querySelector("a[data-play-opt-in]");
        var pending = document.querySelector("[data-play-opt-in-pending]");
        if (optIn && optInEl) {
            optInEl.setAttribute("href", optIn);
            optInEl.setAttribute("rel", "noopener noreferrer");
            optInEl.removeAttribute("hidden");
            if (pending) {
                pending.setAttribute("hidden", "");
            }
        } else if (pending) {
            pending.removeAttribute("hidden");
        }
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
