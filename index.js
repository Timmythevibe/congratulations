document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const submitBtn = document.getElementById('submitBtn');
    const balloonsContainer = document.getElementById('balloons');
    const confettiContainer = document.getElementById('confetti');

    const createBalloon = () => {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        balloon.style.animationDuration = `${Math.random() * 2 + 3}s`;
        balloonsContainer.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 5000);
    };

    const createConfetti = () => {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    };

    submitBtn.addEventListener('click', () => {
        greeting.textContent = 'Congratulations on almost getting 20k points in the iMessage game!  LOVE TIMMY!';
        submitBtn.style.display = 'none';

        // Generate balloons and confetti
        for (let i = 0; i < 20; i++) {
            setTimeout(createBalloon, i * 300);
            setTimeout(createConfetti, i * 150);
        }
    });
});
