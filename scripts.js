function handleYes() {
    const container = document.getElementById('container');
    container.classList.add('hearts-explosion');

    const character = document.getElementById('character');
    character.src = 'https://www.pngall.com/wp-content/uploads/15/Baki-PNG-HD-Image.png'; // URL to a dancing Baki gif

    setTimeout(() => {
        // Display hearts explosion
        const heartsBackground = document.createElement('div');
        heartsBackground.classList.add('hearts-background');
        document.body.appendChild(heartsBackground);

        for (let i = 0; i < 100; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDelay = `${Math.random() * 10}s`;
            heartsBackground.appendChild(heart);
        }
    }, 2000); // Delay to show the heart explosion first
}

function handleNo() {
    const character = document.getElementById('character');
    character.src = 'https://www.pngall.com/wp-content/uploads/15/Baki-PNG-Image-HD.png'; // Angry Vegeta image
                                              }
