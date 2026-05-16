// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('scrollProgress').style.width = scrollPercent + '%';

    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    if (scrollTop > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }

    // Reveal Animation
    revealElements();
});

// Back to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Lightbox
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    document.getElementById('lightboxImage').src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Reveal Animation on Scroll
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

// Initial reveal check
revealElements();

// Toggle Project Details
function toggleDetails(card) {
    // Close other cards
    const allCards = document.querySelectorAll('.detail-card');
    allCards.forEach(c => {
        if (c !== card) {
            c.classList.remove('expanded');
            c.style.display = 'none';
        }
    });
    
    // Toggle current card
    if (card.classList.contains('expanded')) {
        card.classList.remove('expanded');
        // Show all cards again
        allCards.forEach(c => {
            c.style.display = '';
        });
    } else {
        card.classList.add('expanded');
    }
}
