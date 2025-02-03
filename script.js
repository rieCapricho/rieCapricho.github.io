document.getElementById("enterBtn").addEventListener("click", function() {
    history.pushState({ page: "home" }, "Home", "#home");
    document.querySelector(".landing").classList.add("hidden");
    document.getElementById("home-page").classList.remove("hidden");
});

document.querySelectorAll(".sidebar li").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("active"));
        this.classList.add("active");

        document.querySelectorAll("body > div:not(.sidebar)").forEach(page => page.classList.add("hidden"));

        const pageId = this.getAttribute("data-page") + "-page";
        const pageElement = document.getElementById(pageId);

        if (pageElement) {
            pageElement.classList.remove("hidden");
            history.pushState({ page: pageId }, pageId, `#${pageId}`);
        }
    });
});

// Ensure sidebar stays visible and reloads with the correct page
window.addEventListener("load", function() {
    const page = location.hash ? location.hash.substring(1) : "home-page";
    document.querySelector(".landing").classList.add("hidden");
    document.getElementById(page).classList.remove("hidden");

    document.querySelectorAll(".sidebar li").forEach(li => {
        li.classList.remove("active");
        if (li.getAttribute("data-page") === page.replace("-page", "")) {
            li.classList.add("active");
        }
    });
});
