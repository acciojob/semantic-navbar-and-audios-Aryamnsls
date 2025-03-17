//your code here
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded successfully!");
    
    // Highlight active navigation link
    const navLinks = document.querySelectorAll(".nav-item a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Log audio play events
    const audioElements = document.querySelectorAll("audio");
    
    audioElements.forEach(audio => {
        audio.addEventListener("play", () => {
            console.log(`Playing: ${audio.querySelector("source").src}`);
        });
    });
});
