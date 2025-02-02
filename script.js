function showMainPage() {
    document.getElementById('intro-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'block';
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

let heartCount = 0;
function sendHeart() {
    heartCount++;
    document.getElementById('heart-count').textContent = heartCount;
}
