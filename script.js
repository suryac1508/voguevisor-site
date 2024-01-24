function updateCountdown() {
    const launchDate = new Date('2024-05-20T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = launchDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('timer').innerText = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (difference < 0) {
        clearInterval(interval);
        document.getElementById('timer').innerText = "Launched!";
    }
}

const interval = setInterval(updateCountdown, 1000);
