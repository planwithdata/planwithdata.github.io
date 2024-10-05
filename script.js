document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    const performSearch = async () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            const encodedSearchTerm = encodeURIComponent(searchTerm);
            const searchUrl = `https://planwithdata.github.io/EV-Sales-India2024/?search=${encodedSearchTerm}`;
            
            try {
                const response = await fetch(searchUrl);
                const text = await response.text();
                
                if (text.includes('Not Found') || text.includes('no results')) {
                    alert('Not Found, Sorry!');
                } else {
                    // Check if the search term is actually present in the response
                    const parser = new DOMParser();
                    const htmlDoc = parser.parseFromString(text, 'text/html');
                    const content = htmlDoc.body.textContent || "";
                    
                    if (content.toLowerCase().includes(searchTerm.toLowerCase())) {
                        window.location.href = searchUrl;
                    } else {
                        alert('Not Found, Sorry!');
                    }
                }
            } catch (error) {
                console.error('Error performing search:', error);
                alert('An error occurred while searching. Please try again.');
            }
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

    // Handle newsletter subscription
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('email-input');
            const email = emailInput.value.trim();
            if (email) {
                // Here you would typically send the email to your server
                console.log(`Subscribed: ${email}`);
                alert('Thank you for subscribing!');
                emailInput.value = '';
            }
        });
    }
});


