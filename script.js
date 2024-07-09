document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! I will get back to you soon.');
        form.reset();
    });
});
