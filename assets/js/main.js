document.addEventListener('DOMContentLoaded', function() {
    try {
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }

        // Load contact content
        const script = document.createElement('script');
        script.src = 'assets/js/contact.js';
        script.onload = function() {
            document.getElementById('contact').innerHTML = contactContent;
        };
        document.head.appendChild(script);
    } catch (error) {
        console.error('Error:', error);
    }
});