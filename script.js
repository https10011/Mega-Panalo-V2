document.addEventListener('DOMContentLoaded', function() {
    const muteButton = document.getElementById('muteButton');
    const volumeIcon = document.getElementById('volumeIcon');
    let isMuted = false;

    muteButton.addEventListener('click', function() {
        isMuted = !isMuted;
        if (isMuted) {
            volumeIcon.src = 'https://via.placeholder.com/24?text=🔇';
            volumeIcon.alt = 'Muted';
            // Add logic here to mute audio
        } else {
            volumeIcon.src = 'https://via.placeholder.com/24?text=🔊';
            volumeIcon.alt = 'Unmuted';
            // Add logic here to unmute audio
        }
    });

    // Add hover effect to game items
    const gameItems = document.querySelectorAll('.game-item');
    gameItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.1)';
        });
        item.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });
});

