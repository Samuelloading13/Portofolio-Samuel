document.addEventListener('DOMContentLoaded', function() {

    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const words = [
            "an Informatics Student",
            "a Public Relations Staff at HMIF",
            "a Future Developer"
        ];
        let wordIndex = 0, charIndex = 0, isDeleting = false;
        const typeSpeed = 150, eraseSpeed = 100, delay = 1500;
        function type() {
            const currentWord = words[wordIndex];
            let displayText = isDeleting ? currentWord.substring(0, charIndex--) : currentWord.substring(0, charIndex++);
            typingText.textContent = displayText;
            if (!isDeleting && charIndex > currentWord.length) {
                setTimeout(() => { isDeleting = true; }, delay);
            } else if (isDeleting && charIndex < 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(type, isDeleting ? eraseSpeed : typeSpeed);
        }
        type();
    }

    const backToTopButton = document.getElementById('backToTopButton');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const links = navLinks.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
});