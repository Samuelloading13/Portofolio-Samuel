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

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        if (!isDeleting && charIndex === currentWord.length) {

            setTimeout(() => { isDeleting = true; }, 1500);
        } 
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; 
        }
        const typingSpeed = isDeleting ? 100 : 200;
        setTimeout(type, typingSpeed);
    }
    type();
});