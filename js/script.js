// Hero Section

const texts = ["Content Creator", "Graphic Designer", "Web Designer", "Script Writer", "Video Editor", "Artist", "Voice Over", "Intermediate Gamer"];
let currentTextIndex = 0;

function typeText() {
    const typingText = document.querySelector('.typing-text');
    typingText.textContent = texts[currentTextIndex];
    currentTextIndex = (currentTextIndex + 1) % texts.length;
}

setInterval(typeText, 3000);


// Portfolio Section

document.addEventListener('DOMContentLoaded', function() {
    const filterItems = document.querySelectorAll('.filter-item');
    const imageItems = document.querySelectorAll('.image-item');

    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            imageItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
