let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(n) {
        if (n >= slides.length) { slideIndex = 0; }
        if (n < 0) { slideIndex = slides.length - 1; }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.transition = "transform 0.5s ease";
            slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
        }
    }

    function nextSlide() {
        showSlide(++slideIndex);
    }

    function prevSlide() {
        showSlide(--slideIndex);
    }

    setInterval(nextSlide, 7500);

    showSlide(slideIndex);