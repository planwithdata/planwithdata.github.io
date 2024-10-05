document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    const performSearch = () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            const encodedSearchTerm = encodeURIComponent(searchTerm);
            const searchUrl = `https://planwithdata.github.io/EV-Sales-India2024/?search=${encodedSearchTerm}`;
            window.location.href = searchUrl;
        }
    };

    searchButton.addEventListener('click', performSearch);

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Add subtle animation to the background
    document.body.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.body.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
    });
});


// Newsletter subscription form handling
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    
    try {
        const response = await fetch('https://formspree.io/f/xlderbpo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        });

        if (response.ok) {
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        } else {
            throw new Error('Subscription failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert(error.message);
    }
});
