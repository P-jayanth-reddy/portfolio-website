// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Typed.js effect for "About" section
document.addEventListener('DOMContentLoaded', () => {
    const options = {
        strings: ["Web Designer", "Web Developer", "Graphic Designer", "YouTuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    };

    const typedElement = document.getElementById('typed');
    if (typedElement) {
        const typed = new Typed(typedElement, options);
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.name.value;
        alert(`Thank you for your message, ${name}!`);
        contactForm.reset(); // Reset form after submission
    });
});


