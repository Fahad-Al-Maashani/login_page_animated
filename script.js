document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "1234") {
        errorMessage.style.display = "none";

        // Cyberpunk transition effect
        document.body.style.transition = "background 0.5s ease-out";
        document.body.style.backgroundColor = "#00ffea";

        setTimeout(() => {
            alert("Login successful!");
            document.body.style.backgroundColor = "#121212"; // Reset to dark theme
        }, 1000);
    } else {
        // Neon glow error animation
        errorMessage.textContent = "Invalid username or password.";
        errorMessage.style.color = "#ff0066";
        errorMessage.style.textShadow = "0 0 10px #ff0066, 0 0 20px #ff0066";
        errorMessage.style.animation = "shake 0.3s ease-in-out";

        // Add error sound effect (optional)
        let errorSound = new Audio("assets/error.mp3"); 
        errorSound.play();
    }
});

/* Error Shake Animation */
document.getElementById("error-message").addEventListener("animationend", () => {
    document.getElementById("error-message").style.animation = ""; // Reset shake
});
