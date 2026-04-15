(function () {
    var CONFIG = {
        // Play Console → Release → Testing → Closed testing → your track → Testers → copy the
        // shareable "join" / opt-in link. It appears after the closed-testing release is published
        // (not while Draft / pending). This URL is what teams put in email, Slack, and landing pages.
        optInUrl: "",
        // Optional: Google Form (or other HTTPS URL) to collect Gmail addresses. Export responses
        // and paste into Play Console → Testers → Email lists. Leave "" to hide the waitlist button.
        waitlistFormUrl: ""
    };
    function trim(s) {
        return (s || "").replace(/^\s+|\s+$/g, "");
    }
    function init() {
        var optIn = trim(CONFIG.optInUrl);
        var form = trim(CONFIG.waitlistFormUrl);
        var optInEl = document.querySelector("a[data-play-opt-in]");
        var waitEl = document.querySelector("a[data-play-waitlist]");
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
        if (form && waitEl) {
            waitEl.setAttribute("href", form);
            waitEl.setAttribute("rel", "noopener noreferrer");
            waitEl.removeAttribute("hidden");
            var mailEl = document.querySelector("a[data-closed-test-mailto]");
            if (mailEl) {
                mailEl.setAttribute("hidden", "");
            }
        }
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
