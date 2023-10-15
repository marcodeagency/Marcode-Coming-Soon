function startCountdown(targetDate) {
    const currentDate = new Date();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        // Geri sayım tamamlandıysa burada bir işlem yapabilirsiniz
        document.getElementById("days").textContent = "0 Days";
        document.getElementById("hours").textContent = "0 Hours";
        document.getElementById("minutes").textContent = "0 Minutes";
        document.getElementById("seconds").textContent = "0 Seconds";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = `${days} Gün`;
        document.getElementById("hours").textContent = `${hours} Saat`;
        document.getElementById("minutes").textContent = `${minutes} Dəqiqə`;
        document.getElementById("seconds").textContent = `${seconds} Saniyə`;
    }
}

const storedTargetDate = localStorage.getItem("targetDate");
if (storedTargetDate) {
    // Sayfa yeniden yüklendiğinde hedef tarihi yerel depodan al
    startCountdown(new Date(storedTargetDate));
} else {
    // İlk yüklemede hedef tarihi ayarla ve yerel depoda sakla
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);
    localStorage.setItem("targetDate", targetDate);
    startCountdown(targetDate);
}

// 1 saniyede bir geri sayımı güncelle
setInterval(() => {
    const storedTargetDate = localStorage.getItem("targetDate");
    if (storedTargetDate) {
        startCountdown(new Date(storedTargetDate));
    }
}, 1000);
