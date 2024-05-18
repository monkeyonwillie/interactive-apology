document.addEventListener('DOMContentLoaded', () => {
    let noCount = 0;
    let yesCount = 0;

    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.volume = 0.5; // Adjust the volume (0.0 to 1.0)

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

    const sweetMessages = [
        "Our journey together means everything to me.",
        "I cherish every moment we spend together.",
        "Your forgiveness is a gift I deeply value.",
        "Let's create beautiful memories from now on.",
        "You are my inspiration, my muse.",
        "Together, we can conquer the world."
    ];

    const questionElement = document.getElementById('question');
    const container = document.getElementById('container');
    const characterImage = document.getElementById('character');
    const buttonsDiv = document.querySelector('.buttons');

    document.getElementById('yes').addEventListener('click', handleYes);
    document.getElementById('no').addEventListener('click', handleNo);

    function handleYes() {
        yesCount++;

        if (yesCount === 3) {
            container.classList.add('hearts-explosion');
        }

        if (yesCount <= 5) {
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
        questionElement.innerText = "Thank you for giving us a chance to make things right.";
        
        sweetMessages.forEach(message => {
            const p = document.createElement('p');
            p.innerText = message;
            p.classList.add('sweet-message');
            container.appendChild(p);
        });
    }

    function showScaryMessage() {
        document.body.innerHTML = `
            <div class="scary-background">
                <p class="scary">You are going to die</p>
            </div>
        `;
    }
});
