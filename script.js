document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.querySelector('.typing-text');

    const words = [
        "an Informatics Student",
        "a Public Relations Staff",
        "a Future Developer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;
    let eraseSpeed = 100;
    let delay = 1500;

    function type() {
        const currentWord = words[wordIndex];
        let displayText;

        if (isDeleting) {
            displayText = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            displayText = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        typingText.textContent = displayText;

        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => { isDeleting = true; }, delay);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        const currentSpeed = isDeleting ? eraseSpeed : typeSpeed;
        setTimeout(type, currentSpeed);
    }

    type();
});