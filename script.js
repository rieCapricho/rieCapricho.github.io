document.addEventListener("DOMContentLoaded", () => {
    let theme = localStorage.getItem("theme") || "light";
    document.body.classList.toggle("dark-mode", theme === "dark");
    
    document.querySelector(".toggle-theme").addEventListener("click", () => {
        theme = theme === "light" ? "dark" : "light";
        document.body.classList.toggle("dark-mode", theme === "dark");
        localStorage.setItem("theme", theme);
    });
});

function showMainPage() {
    document.getElementById("intro-page").classList.add("hidden");
    document.getElementById("main-page").classList.remove("hidden");
}

let heartCount = 0;
function sendHeart() {
    heartCount++;
    document.getElementById("heart-count").textContent = heartCount;
}

