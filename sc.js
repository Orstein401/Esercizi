document.getElementById('enter-site').addEventListener('click', function() {
    const initialHome = document.getElementById('initial-home');
    const mainSite = document.getElementById('main-site');

    // Aggiunge una transizione di dissolvenza
    initialHome.style.transition = 'opacity 1s ease';
    initialHome.style.opacity = '0';

    // Nasconde la home iniziale dopo l'animazione
    setTimeout(() => {
        initialHome.style.display = 'none';
        mainSite.classList.remove('hidden');
        
        // Aggiungi una animazione ai contenuti del sito completo
        const fadeInElements = document.querySelectorAll('.home, .services, .portfolio, .video-section');
        fadeInElements.forEach(element => {
            element.style.animation = 'fadeIn 1s ease-in-out';
        });
    }, 1000); // 1 secondo per combaciare con la durata della transizione
});
