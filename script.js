function startTimer(minutes) {
    let totalSeconds = minutes * 60;

    const interval = setInterval(() => {

        let min = Math.floor(totalSeconds / 60);
        let sec = totalSeconds % 60;

        document.getElementById("minutes").textContent = 
            String(min).padStart(2, '0');

        document.getElementById("seconds").textContent = 
            String(sec).padStart(2, '0');

        totalSeconds--;

        if (totalSeconds < 0) {
            clearInterval(interval);
            window.location.href = "done.html";
        }

    }, 1000);
}
