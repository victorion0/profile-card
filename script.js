function updateTime() {
    const timeEl = document.getElementById('live-time');
    if (timeEl) {
        timeEl.textContent = Date.now();
    }
}

// Initial render
updateTime();

// Update every 600ms
setInterval(updateTime, 600);