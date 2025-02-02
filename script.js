document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function showWorks() {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('works').classList.remove('hidden');
}

function showIntro() {
    document.getElementById('works').classList.add('hidden');
    document.getElementById('intro').classList.remove('hidden');
}

document.getElementById('send-hearts').addEventListener('click', () => {
    alert('❤️ Sent!');
});
