let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10); // Updates every 10 milliseconds
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    elapsedTime = 0;
    isRunning = false;
    document.getElementById("display").textContent = "00:00:00:00";
    document.getElementById("lapContainer").innerHTML = "<h2>Laps</h2>";
}

function lap() {
    if (isRunning) {
        const lapTime = document.getElementById("display").textContent;
        const lapContainer = document.getElementById("lapContainer");
        const lapElement = document.createElement("div");
        lapElement.textContent = lapTime;
        lapContainer.appendChild(lapElement);
    }
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    const hours = String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((elapsedTime / (1000 * 60)) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(2, "0");
    const milliseconds = String(Math.floor((elapsedTime % 1000) / 10)).padStart(2, "0");

    document.getElementById("display").textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
