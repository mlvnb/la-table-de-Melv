document.addEventListener('DOMContentLoaded', () => {

    // Sélectionne toutes les sections qui doivent s'animer
    const sections = document.querySelectorAll('.scroll-section');

    // Configuration de l'observer
    const observerOptions = {
        root: document.querySelector('.scroll-container'), // Le conteneur du scroll
        rootMargin: '0px',
        threshold: 0.4 // Déclenche l'animation quand 40% de la section est visible
    };

    // La fonction qui s'exécute quand une section entre/sort
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajoute la classe 'active' pour lancer l'animation CSS
                entry.target.classList.add('active');
                
                // Optionnel : Désactive l'observer après la première apparition
                // observer.unobserve(entry.target);
            } else {
                // Optionnel : Retire la classe pour rejouer l'animation en remontant
                // entry.target.classList.remove('active');
            }
        });
    };

    // Création de l'observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Attache l'observer à chaque section
    sections.forEach(section => {
        observer.observe(section);
    });
});