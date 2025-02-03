document.getElementById("enterBtn").addEventListener("click", function() {
    history.pushState({ page: "home" }, "Home", "#home");
    document.querySelector(".landing").classList.add("hidden");
    document.getElementById("home-page").classList.remove("hidden");
});

// Sidebar Navigation
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

// Handle page reload
window.addEventListener("load", function() {
    if (location.hash === "#home-page") {
        document.querySelector(".landing").classList.add("hidden");
        document.getElementById("home-page").classList.remove("hidden");
    } else if (location.hash === "#works-page") {
        document.querySelector(".landing").classList.add("hidden");
        document.getElementById("works-page").classList.remove("hidden");
    } else if (location.hash === "#settings-page") {
        document.body.classList.add(localStorage.getItem("theme") === "dark" ? "dark-mode" : "");
    }
});

// Get Heart Button and Counter
const heartBtn = document.getElementById("heartBtn");
const heartCountSpan = document.getElementById("heartCount");

// Load saved heart count from localStorage
let heartCount = localStorage.getItem("heartCount") ? parseInt(localStorage.getItem("heartCount")) : 0;
heartCountSpan.textContent = heartCount;

// Heart Button Click Event
heartBtn.addEventListener("click", function() {
    heartCount++;
    heartCountSpan.textContent = heartCount;
    localStorage.setItem("heartCount", heartCount);
});

// Dark Mode / Light Mode Toggle
const nightModeBtn = document.getElementById("nightMode");
const dayModeBtn = document.getElementById("dayMode");

// Load stored theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// Night Mode
nightModeBtn.addEventListener("click", function() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
});

// Day Mode
dayModeBtn.addEventListener("click", function() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
});

// Ensure sidebar remains visible across pages
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
