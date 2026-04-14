(function () {
    var KEY = "breathewith-theme";
    var ALLOWED = { system: 1, classic: 1, calm: 1, dark: 1 };
    function normalizeChoice(raw) {
        if (raw && ALLOWED[raw]) {
            return raw;
        }
        return "classic";
    }
    function resolve(choice) {
        if (choice === "system") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "calm";
        }
        return choice;
    }
    function applyThemeColor(resolved) {
        var meta = document.getElementById("meta-theme-color");
        if (!meta) {
            return;
        }
        if (resolved === "dark") {
            meta.setAttribute("content", "#1e282c");
        } else {
            meta.setAttribute("content", "#91c2bd");
        }
    }
    function setTheme(choice) {
        choice = normalizeChoice(choice);
        var resolved = resolve(choice);
        document.documentElement.setAttribute("data-theme", resolved);
        try {
            localStorage.setItem(KEY, choice);
        } catch (e) {}
        applyThemeColor(resolved);
    }
    function init() {
        var sel = document.getElementById("theme-select") || document.getElementById("theme-select-404");
        if (!sel) {
            return;
        }
        var choice = "classic";
        try {
            choice = normalizeChoice(localStorage.getItem(KEY));
        } catch (e) {}
        sel.value = choice;
        setTheme(choice);
        sel.addEventListener("change", function () {
            setTheme(sel.value);
        });
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
            try {
                if (localStorage.getItem(KEY) === "system") {
                    setTheme("system");
                }
            } catch (e) {}
        });
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
