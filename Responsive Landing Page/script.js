window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(to right, #0056b3, #007bff)';
    } else {
        navbar.style.background = 'linear-gradient(to right, #007bff, #00b4db)';
    }
});
