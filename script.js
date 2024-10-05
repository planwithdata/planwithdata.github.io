document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Implement search functionality here
            console.log(`Searching urban insights for: ${searchTerm}`);
            // TODO: Implement actual search functionality
        }
    });

    // Add subtle animation to the background
    document.body.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.body.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
    });
});

// Function to load blog posts
function loadBlogPosts(page = 1) {
    const blogPostsSection = document.getElementById('blog-posts');
    const paginationSection = document.getElementById('pagination');
    
    // Simulated blog post data (replace with actual data fetching logic)
    const posts = [
        { title: "Urban Transit Innovations", excerpt: "Exploring cutting-edge solutions in urban transportation..." },
        { title: "Sustainable City Planning", excerpt: "How data-driven approaches are shaping eco-friendly urban spaces..." },
        { title: "The Future of Smart Cities", excerpt: "Predicting trends and technologies that will define our urban landscapes..." },
        // Add more post objects as needed
    ];

    const postsPerPage = 3;
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = posts.slice(startIndex, endIndex);

    // Clear existing content
    blogPostsSection.innerHTML = '';
    paginationSection.innerHTML = '';

    // Add blog posts
    paginatedPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <a href="#" class="cta-button">Read More</a>
        `;
        blogPostsSection.appendChild(postElement);
    });

    // Add pagination
    const totalPages = Math.ceil(posts.length / postsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.className = 'pagination-link';
        pageLink.textContent = i;
        pageLink.onclick = (e) => {
            e.preventDefault();
            loadBlogPosts(i);
        };
        paginationSection.appendChild(pageLink);
    }
}

// Call the function to load blog posts
document.addEventListener('DOMContentLoaded', () => loadBlogPosts());

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
