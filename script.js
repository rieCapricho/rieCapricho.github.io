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

window.addEventListener("popstate", function(event) {
    document.querySelectorAll("body > div:not(.sidebar)").forEach(page => page.classList.add("hidden"));

    if (event.state && event.state.page) {
        document.getElementById(event.state.page).classList.remove("hidden");
    } else {
        document.querySelector(".landing").classList.remove("hidden");
    }
});

window.addEventListener("load", function() {
    if (location.hash === "#home-page") {
        document.querySelector(".landing").classList.add("hidden");
        document.getElementById("home-page").classList.remove("hidden");
    } else if (location.hash === "#works-page") {
        document.querySelector(".landing").classList.add("hidden");
        document.getElementById("works-page").classList.remove("hidden");
    }
});

// Heart Button Counter
let heartCount = 0;
document.getElementById("heartBtn").addEventListener("click", function() {
    heartCount++;
    document.getElementById("heartCount").innerText = heartCount;
});

