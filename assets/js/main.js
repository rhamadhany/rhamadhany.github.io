document.addEventListener('DOMContentLoaded', function() {
    try {
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
        fetch('profile.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('about').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading contact content:', error);
        });
        // Load contact content
        // Fetching from the same origin should work without CORS issues
        fetch('contact.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('contact').innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading contact content:', error);
            });
    } catch (error) {
        console.error('Error:', error);
    }
});
