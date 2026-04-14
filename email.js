(function () {
    var bytes = [115, 117, 112, 112, 111, 114, 116, 64, 105, 107, 105, 97, 112, 112, 115, 46, 99, 111, 109];
    var addr = String.fromCharCode.apply(null, bytes);
    document.querySelectorAll("a[data-email-link]").forEach(function (el) {
        el.setAttribute("href", "mailto:" + addr);
        if (el.getAttribute("data-email-link") === "label") {
            el.textContent = addr;
        }
        el.removeAttribute("hidden");
        var reveal = el.closest("[data-email-reveal]");
        if (reveal) {
            reveal.removeAttribute("hidden");
        }
    });
})();
