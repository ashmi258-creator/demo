function startSurprise() {
    document.getElementById("surprise").style.display = "block";

    let music = document.getElementById("music");
    music.play();
}
function createFallingItem() {
    const container = document.querySelector('.falling-container');

    const item = document.createElement('div');
    item.classList.add('falling-item');

    const elements = ['🎀', '🌸', '💖', '🌺','🎁'];
    item.innerHTML = elements[Math.floor(Math.random() * elements.length)];

    item.style.left = Math.random() * 100 + 'vw';
    item.style.animationDuration = (Math.random() * 3 + 2) + 's';

    container.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 5000);
}

setInterval(createFallingItem, 300);


function playMusic() {
    const music = document.getElementById("bg-music");
    music.play().catch(error => {
        console.log("Error:", error);
    });
}