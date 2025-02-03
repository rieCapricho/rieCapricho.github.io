document.getElementById("enterBtn").addEventListener("click", function() {
    // Update the browser history to allow back navigation
    history.pushState({ page: "home" }, "Home", "#home");

    // Switch from landing page to home page
    document.querySelector(".landing").classList.add("hidden");
    document.getElementById("home-page").classList.remove("hidden");
});

// Handle the back button to return to the landing page
window.addEventListener("popstate", function(event) {
    if (!event.state || event.state.page !== "home") {
        // If there's no state or it's not the home page, show the landing page
        document.querySelector(".landing").classList.remove("hidden");
        document.getElementById("home-page").classList.add("hidden");
    }
});

// Ensure correct page is shown on reload
window.addEventListener("load", function() {
    if (location.hash === "#home") {
        document.querySelector(".landing").classList.add("hidden");
        document.getElementById("home-page").classList.remove("hidden");
    }
});
