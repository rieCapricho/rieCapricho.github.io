document.getElementById("enterBtn").addEventListener("click", function() {
    history.pushState({ page: "home" }, "Home", "#home");
    document.querySelector(".landing").classList.add("hidden");
    document.getElementById("home-page").classList.remove("hidden");
});

document.querySelectorAll(".sidebar li").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("active"));
        this.classList.add("active");
        document.querySelectorAll("body > div").forEach(page => page.classList.add("hidden"));
        if (this.textContent.trim() === "HOME") {
            document.getElementById("home-page").classList.remove("hidden");
        } else if (this.textContent.trim() === "WORKS") {
            document.getElementById("works-page").classList.remove("hidden");
        }
    });
});

window.addEventListener("popstate", function(event) {
    if (!event.state || event.state.page !== "home") {
        document.querySelector(".landing").classList.remove("hidden");
        document.getElementById("home-page").classList.add("hidden");
    }
});

window.addEventListener("load", function() {
    if (location.hash === "#home") {
        document.querySelector(".landing").classList.add("hidden");
        document.getElementById("home-page").classList.remove("hidden");
    }
});