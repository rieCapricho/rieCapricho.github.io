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

// Get heart button and counter
const heartBtn = document.getElementById("heartBtn");
const heartCountSpan = document.getElementById("heartCount");

// Load saved heart count from localStorage
let heartCount = localStorage.getItem("heartCount") ? parseInt(localStorage.getItem("heartCount")) : 0;
heartCountSpan.textContent = heartCount; // Display saved count

// Event listener for heart button click
heartBtn.addEventListener("click", function() {
    heartCount++; // Increment count
    heartCountSpan.textContent = heartCount; // Update display
    localStorage.setItem("heartCount", heartCount); // Save to localStorage
});

// Get toggle button
const darkModeToggle = document.getElementById("darkModeToggle");

// Check if Dark Mode was previously enabled
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
}

// Toggle Dark Mode
darkModeToggle.addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark"); // Save preference
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light"); // Save preference
    }
});





