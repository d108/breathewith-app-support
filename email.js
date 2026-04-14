(function () {
    function decodeAddr() {
        var bytes = [115, 117, 112, 112, 111, 114, 116, 64, 105, 107, 105, 97, 112, 112, 115, 46, 99, 111, 109];
        return String.fromCharCode.apply(null, bytes);
    }
    function show(el) {
        if (el) {
            el.removeAttribute("hidden");
        }
    }
    function apply() {
        var addr = decodeAddr();
        document.querySelectorAll("a[data-email-link]").forEach(function (el) {
            el.setAttribute("href", "mailto:" + addr);
            if (el.getAttribute("data-email-link") === "label") {
                el.textContent = addr;
            }
            el.removeAttribute("hidden");
            show(el.closest("[data-email-reveal]"));
        });
        document.querySelectorAll("[data-email-text]").forEach(function (node) {
            node.textContent = addr;
            show(node.closest("[data-email-reveal]"));
        });
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", apply);
    } else {
        apply();
    }
})();
