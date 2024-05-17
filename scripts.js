body {
    background-color: #ffe4e1; /* Light pink background color */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    position: relative;
}

.container {
    text-align: center;
    position: relative;
}

.message {
    position: relative;
    display: inline-block;
    text-align: center;
}

#character {
    width: 300px;
    position: relative;
    z-index: 1;
}

.overlay {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
}

.poster {
    background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.buttons {
    display: flex;
    gap: 20px;
}

button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button.yes {
    background-color: green;
    color: white;
}

button.no {
    background-color: red;
    color: white;
}

#container.hearts-explosion::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('hearts.gif') no-repeat center center / cover;
    animation: explode 2s forwards;
}

@keyframes explode {
    from { opacity: 0; }
    to { opacity: 1; }
}

#container.no .message img {
    content: url('https://www.pngall.com/wp-content/uploads/15/Baki-PNG-Image-HD.png'); /* Angry Vegeta image */
    animation: shake 0.5s;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25%, 75% { transform: translateX(-10px); }
    50% { transform: translateX(10px); }
}

.hearts-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
}

.heart {
    position: absolute;
    width: 20px;
    height: 20px;
    background: red;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    animation: float 10s infinite ease-in-out;
}

@keyframes float {
    0% { transform: translateY(100vh); }
    100% { transform: translateY(-100vh); }
}

.scary {
    font-family: 'Creepster', cursive; /* Example scary font */
    color: red;
    font-size: 48px;
    text-align: center;
    }
    
