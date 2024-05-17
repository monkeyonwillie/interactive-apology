function handleYes() {
    const container = document.getElementById('container');
    container.classList.add('hearts-explosion');


    const character = document.getElementById('character');
    character.src = 'baki-dance.gif'; // URL to a dancing Baki gif


    const cupids = document.getElementById('cupids');
    cupids.innerHTML = ''; // Remove existing cupids
    setTimeout(() => {
        // Add dancing cupids
        for (let i = 0; i < 3; i++) {
            const cupid = document.createElement('div');
            cupid.classList.add('cupid');
            cupid.style.animation = 'none'; // Stop rotating animation
            cupid.style.background = 'url("dancing-cupid.gif") no-repeat center center / contain'; // URL to a dancing cupid gif
            cupids.appendChild(cupid);
        }
    }, 2000); // Delay to show the heart explosion first
}


function handleNo() {
    const container = document.getElementById('container');
    container.classList.add('no');


    const character = document.getElementById('character');
    character.src = 'angry-vegeta.png'; // URL to an angry Vegeta image


    const cupids = document.getElementById('cupids');
    cupids.innerHTML = ''; // Remove existing cupids
    for (let i = 0; i < 3; i++) {
        const antiCupid = document.createElement('div');
        antiCupid.classList.add('cupid');
        antiCupid.style.background = 'url("anti-cupid.png") no-repeat center center / contain'; // URL to an anti-cupid image
        cupids.appendChild(antiCupid);
    }
}

