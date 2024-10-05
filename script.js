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
        subscribeForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('email-input');
            const email = emailInput.value.trim();
            if (email) {
                try {
                    const response = await fetch(subscribeForm.action, {
                        method: 'POST',
                        body: new FormData(subscribeForm),
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    
                    if (response.ok) {
                        alert('Thank you for subscribing! You will receive updates on every new post.');
                        emailInput.value = '';
                    } else {
                        throw new Error('Subscription failed');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('An error occurred. Please try again later.');
                }
            }
        });
    }
});


