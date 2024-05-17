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
    "This means a lot to me."
];

function handleYes() {
    const questionElement = document.getElementById('question');
    yesCount++;

    if (yesCount <= yesMessages.length) {
        questionElement.innerText = yesMessages[yesCount - 1];
    } else {
        explodeHearts();
    }
}

function handleNo() {
    const questionElement = document.getElementById('question');
    const noButton = document.getElementById('no');
    noCount++;

    if (noCount <= questions.length) {
        questionElement.innerText = questions[noCount - 1];
        if (noCount > 3 && noCount <= 7) {
            noButton.style.width = `${20 - (noCount - 3) * 2}%`;
        }
    } else {
        showScaryMessage();
    }
}

function explodeHearts() {
    const container = document.getElementById('container');
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
    }, 2000); // Delay to show the heart explosion first
}

function showScaryMessage() {
    document.body.innerHTML = '<p class="scary">You are going to die</p>';
            }
            
