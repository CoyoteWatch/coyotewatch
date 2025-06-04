document.addEventListener('DOMContentLoaded', () => {
    // Инициализация частиц
    particlesJS.load('particles-js', 'particles.json', () => {
        console.log('Particles loaded!');
    });

    // Анимация GSAP
    gsap.from(".feature-card", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Эффект параллакса
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        gsap.to("header", {
            x: x * 20,
            y: y * 20,
            duration: 1,
            ease: "power1.out"
        });
    });

    // Мигающий warning
    setInterval(() => {
        document.querySelector('.warning').classList.toggle('shake');
    }, 5000);
});
