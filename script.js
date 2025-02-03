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
