let lookup = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
let phase = 0;
let time = 0;
let moons = document.getElementsByClassName("moon");

function update() {
    if (!time) {
        for (let moon of moons) {
            moon.innerText = lookup[phase];
        }
        phase = (phase + 1) % lookup.length;
        time = 20;
    } else {
        time--;
    }
    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
