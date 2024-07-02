window.revelar = ScrollReveal({reset: true});

//hero

revelar.reveal('.scroll-txt-title', { 
    duration: 1000,
    origin: 'top',
    distance: '50px' 
});

revelar.reveal('.scroll-txt-text', {
    duration: 1000,
    origin: 'left',
    distance: '50px',
    delay: 500
});

revelar.reveal('.scroll-txt-button', {
    duration: 1000,
    origin: 'right',
    distance: '50px',
    delay: 1000
});

revelar.reveal('.scroll-txt-ri-img', {
    duration: 1000,
    origin: 'right',
    distance: '50px',
    delay: 1000
});

revelar.reveal('.scroll-txt-le-img', {
    duration: 1000,
    origin: 'left',
    distance: '50px',
    delay: 1000
});