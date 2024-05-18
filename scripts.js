document.addEventListener('DOMContentLoaded', () => {
    let noCount = 0;
    let yesCount = 0;

    const questions = [
        "I'm really sorry. Please give me another chance.",
        "I apologize from the bottom of my heart. Can we try again?",
        "Forgive me for my mistakes. Can we start anew?",
        "Do you think this is the right decision?",
        "Are you sure this is the right choice?",
        "Is this really the best course of action?",
        "Are you positive you want to do this?",
        "Do you truly believe this is the right path?",
        "Is this decision final?",
        "Think about it again, is this your final answer?"
    ];

    const yesMessages = [
        "Your kindness is like a balm to my weary soul.",
        "In your eyes, I find my peace and my home.",
        "Your love is the light that guides me through the darkness.",
        "With you, every moment is a beautiful memory.",
        "You are the poetry my heart speaks.",
        "Together, we can weather any storm.",
        "Your forgiveness is a gift I treasure deeply.",
        "Your smile is the dawn breaking in my soul."
    ];

    const questionElement = document.getElementById('question');
    const container = document.getElementById('container');
    const characterImage = document.getElementById('character');
    const backgroundMusic = document.getElementById('background-music');

    document.getElementById('yes').addEventListener('click', handleYes);
    document.getElementById('no').addEventListener('click', handleNo);

    function handleYes() {
        if (!backgroundMusic.playing) {
            backgroundMusic.play().catch(error => console.log(error));
            backgroundMusic.playing = true;
        }

        if (yesCount < yesMessages.length) {
            questionElement.innerText = yesMessages[yesCount];
        }

        yesCount++;

        if (yesCount === 3) {
            explodeHearts();
        }
    }

    function handleNo() {
        noCount++;

        if (noCount <= questions.length) {
            questionElement.innerText = questions[noCount - 1];
            if (noCount === 2) {
                characterImage.src = 'https://www.pngall.com/wp-content/uploads/14/Frieza-PNG-Cutout.png';
                characterImage.classList.add('shake');
            }
        } else {
            showScaryMessage();
        }
    }

    function explodeHearts() {
        container.classList.add('hearts-explosion');
        setTimeout(() => {
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
        }, 2000);
    }

    function showScaryMessage() {
        document.body.innerHTML = `
            <div class="scary-background">
                <p class="scary">You are going to die</p>
            </div>
        `;
    }
});
        
