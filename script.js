document.addEventListener("DOMContentLoaded", function () {
    // Navigation functionality
    document.getElementById("enterBtn").addEventListener("click", function () {
        window.location.href = "home.html";
    });

    // Send Hearts Button
    const heartButton = document.getElementById("sendHearts");
    const heartCount = document.getElementById("heartCount");
    let count = 0;
    if (heartButton) {
        heartButton.addEventListener("click", function () {
            count++;
            heartCount.textContent = count;
        });
    }

    // Dark/Light Mode Toggle
    const toggleModeButton = document.getElementById("toggleMode");
    if (toggleModeButton) {
        toggleModeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }
});
