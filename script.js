document.getElementById("enterBtn").addEventListener("click", function() {
    document.querySelector(".landing").classList.add("hidden");
    document.querySelector(".sidebar").classList.remove("hidden");
    document.getElementById("home-page").classList.remove("hidden");
});

document.querySelectorAll(".sidebar li").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("active"));
        this.classList.add("active");

        document.querySelectorAll("body > div:not(.sidebar)").forEach(page => page.classList.add("hidden"));

        const pageId = this.getAttribute("data-page") + "-page";
        document.getElementById(pageId).classList.remove("hidden");
    });
});

// Heart Button Counter
let heartCount = 0;
document.getElementById("heartBtn").addEventListener("click", function() {
    heartCount++;
    document.getElementById("heartCount").innerText = heartCount;
});

// Light/Dark Mode Toggle
document.getElementById("toggleDark").addEventListener("click", function() {
    document.body.classList.add("dark-mode");
});

document.getElementById("toggleLight").addEventListener("click", function() {
    document.body.classList.remove("dark-mode");
});
