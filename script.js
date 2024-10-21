let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');
const totalSlides = slides.length;

document.querySelector('.carousel-button.next').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
});

document.querySelector('.carousel-button.prev').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
});


// Typing Effect Variables
const texts = ["an aspiring Software Engineer.", "a student."];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-image');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function type() {
    const typedText = document.getElementById("typed-text");
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }
    
    typedText.textContent = texts[textIndex].substring(0, charIndex);
    
    if (!isDeleting && charIndex === texts[textIndex].length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1500); // Wait before starting to delete
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    const typingSpeed = isDeleting ? 75 : 150; // Speed of typing and deleting
    setTimeout(type, typingSpeed);
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message. Will get back to you soon :)');
    this.reset();
});

// Start typing effect
type();

// Mobile Navigation Toggle
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const navList = document.getElementById('nav-list');

mobileNavToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});