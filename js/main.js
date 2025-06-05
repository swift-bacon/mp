document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const modal = document.getElementById('mobileMenuModal');

    hamburger.addEventListener('click', () => {
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    });

    modal.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const text = "A creator of engaging digital experiences, driven by a love for design and technology.";
    const el = document.querySelector('.typewriter-text');
    let i = 0;
    let isDeleting = false;

    function type() {
        if (!el) return;
        if (!isDeleting) {
            el.textContent = text.slice(0, i + 1);
            i++;
            if (i === text.length) {
                setTimeout(() => { isDeleting = true; type(); }, 2000);
            } else {
                setTimeout(type, 40);
            }
        } else {
            el.textContent = text.slice(0, i - 1);
            i--;
            if (i === 0) {
                isDeleting = false;
                setTimeout(type, 800);
            } else {
                setTimeout(type, 20);
            }
        }
    }
    type();
});

document.addEventListener('DOMContentLoaded', function () {
    const screenshots = [
        'img/web1.png',
        'img/web2.png',
        'img/web3.png'
    ];
    let current = 0;
    const img = document.querySelector('.carousel-img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    function updateCarousel() {
        if (img) img.src = screenshots[current];
    }

    if (prevBtn && nextBtn && img) {
        prevBtn.addEventListener('click', () => {
            current = (current - 1 + screenshots.length) % screenshots.length;
            updateCarousel();
        });
        nextBtn.addEventListener('click', () => {
            current = (current + 1) % screenshots.length;
            updateCarousel();
        });
    }
});

// ...existing code...

// Finder-like gallery logic for Photography section
document.addEventListener('DOMContentLoaded', function () {
    // ...existing code...

    // Finder sidebar logic
    const folders = document.querySelectorAll('.finder-folder');
    const descriptionView = document.querySelector('.finder-description-view');
    const galleryViews = document.querySelectorAll('.finder-gallery-view');

    folders.forEach(folder => {
        folder.addEventListener('click', () => {
            folders.forEach(f => f.classList.remove('active'));
            folder.classList.add('active');
            const folderName = folder.getAttribute('data-folder');
            // Hide all
            descriptionView.style.display = 'none';
            galleryViews.forEach(g => g.style.display = 'none');
            // Show selected
            if (folderName === 'description') {
                descriptionView.style.display = 'flex';
            } else {
                document.querySelector(`.finder-gallery-view[data-gallery="${folderName}"]`).style.display = 'block';
            }
        });
    });

    // Description modal logic
    const descBtn = document.querySelector('.description-file-btn');
    const descModal = document.querySelector('.description-modal');
    const closeDescModal = document.querySelector('.close-description-modal');
    if (descBtn && descModal && closeDescModal) {
        descBtn.addEventListener('click', () => {
            descModal.style.display = 'block';
        });
        closeDescModal.addEventListener('click', () => {
            descModal.style.display = 'none';
        });
        // Zamknij modal po kliknięciu poza okno
        descModal.addEventListener('click', (e) => {
            if (e.target === descModal) descModal.style.display = 'none';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    document.querySelectorAll('.photography-gallery img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightbox.classList.add('active');
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            lightboxImg.src = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
            lightboxImg.src = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const websites = [
        "https://kozlarek.com",
        "http://nextleveldrift.com",
        // Dodaj kolejne adresy stron tutaj
    ];
    let current = 0;
    const iframe = document.querySelector('.carousel-iframe');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    function showWebsite(idx) {
        iframe.src = websites[idx];
    }

    prevBtn.addEventListener('click', () => {
        current = (current - 1 + websites.length) % websites.length;
        showWebsite(current);
    });

    nextBtn.addEventListener('click', () => {
        current = (current + 1) % websites.length;
        showWebsite(current);
    });
});