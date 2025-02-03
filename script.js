document.getElementById("enterBtn").addEventListener("click", function() {
    document.getElementById("landing-page").classList.add("hidden");
    document.getElementById("home-page").classList.remove("hidden");
});

// Sidebar navigation effect
document.querySelectorAll(".sidebar li").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("active"));
        item.classList.add("active");
    });
});