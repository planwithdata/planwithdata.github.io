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

// Function to load blog posts (to be implemented)
function loadBlogPosts() {
    // This function will dynamically load blog posts from your Jupyter notebook exports
    // For now, it's a placeholder
    const blogPostsSection = document.getElementById('blog-posts');
    blogPostsSection.innerHTML = '<p>More articles will be published as research goes ahead! Subscribe our Newsletter to not miss any post.</p>';
}

// Call the function to load blog posts
loadBlogPosts();
