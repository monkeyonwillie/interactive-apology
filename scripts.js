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
        "You won't regret this decision.",
        "I'm so glad we can start over.",
        "Thank you for giving me another chance.",
        "I promise I'll do better.",
        "This means a lot to me.",
        "You are amazing for this.",
        "Let's make this work together."
    ];

    const extraSweetMessages = [
        "Our journey together means everything to me.",
        "I cherish every moment we spend together.",
        "Your forgiveness is a gift I deeply value.",
        "Let's create beautiful memories from now on."
    ];

    const questionElement = document.getElementById('question');
    const container = document.getElementById('container');
    const characterImage = document.getElementById('character');
    const buttonsDiv = document.querySelector('.buttons');

    document.getElementById('yes').addEventListener('click', handleYes);
    document.getElementById('no').addEventListener('click', handleNo);

    function handleYes() {
        yesCount++;

        if (yesCount < 5) {
            questionElement.innerText = yesMessages[yesCount - 1];
        } else {
            displaySweetMessages();
        }
    }

    function handleNo() {
        noCount++;

        if (noCount <= questions.length) {
            questionElement.innerText = questions[noCount - 1];
        } else {
            showScaryMessage();
        }
    }

    function displaySweetMessages() {
        extraSweetMessages.forEach(message => {
            const p = document.createElement('p');
            p.innerText = message;
            p.classList.add('sweet-message');
            container.appendChild(p);
        });
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
    
