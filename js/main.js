document.addEventListener("DOMContentLoaded", () =>{

    // ======== menu hamburger ========
    const burger = document.querySelector(".menu-burger");
    const menu = document.querySelector(".menu");
    burger.addEventListener("click", () =>{
        menu.classList.toggle("nav-active");        // Création de classe CSS
    });


    // ======== Dark Mode / Light Mode =========
    const btnDark = document.querySelector(".btn-dark");

    // Vérifie le thème enregistré au chargement
    if (localStorage.getItem("theme") === "dark" ){
        document.documentElement.setAttribute("data-theme", "dark")
    };

    // Changement de thème au clic
    btnDark.addEventListener("click", () => {

        // Vérifie si le mode sombre est déjà actif
        const darkMode = document.documentElement.getAttribute("data-theme");

        if (darkMode === "dark") {

            // Retour au mode clair
            document.documentElement.removeAttribute("data-theme");

            // Sauvegarde
            localStorage.setItem("theme", "light");

        } else {

            // Active le mode sombre
            document.documentElement.setAttribute("data-theme", "dark");

            // Sauvegarde
            localStorage.setItem("theme", "dark");

        }

    });


    //======= Changement de style du navbar au scroll =======
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {                       
        if(window.scrollY > 80) {                                   
            navbar.classList.add("navbar-scroll")                   
        }else{
            navbar.classList.remove("navbar-scroll")
        }
    });


    //========== Bouton retour en haut ==========
    const btnHaut = document.querySelector("#btn-Top");       
    window.addEventListener("scroll", () => {                       
        if(window.scrollY > 400) {                                  
            btnHaut.style.display = "block"             
        }else{
            btnHaut.style.display = "none"              
        }
    });

    btnHaut.addEventListener("click", () => {                       
        window.scrollTo({           // Methode qui Fait remonter la page
            top : 0,                                                    
            behavior : "smooth"     // defilement fluide
        }); 
    });


    //==== Setion chiffres clés ====
    //======= Les compteurs qui s'animent de 0 à leur valeur au scroll ======
    function animerCompteur(selecteur, pas, valeurArret, vitesse) {
        const element = document.querySelector(selecteur);
        if (!element) return; // on sort si l'élément n'existe pas

        const observeur = new IntersectionObserver((entrer) => {
            entrer.forEach((entre) => {
                if (entre.isIntersecting) {
                    let cpt = 0;
                    let interval = setInterval(() => {
                        cpt += pas;
                        element.textContent = cpt;
                        if (cpt >= valeurArret) {
                            clearInterval(interval);
                        }
                    }, vitesse);
                }
            });
        });

        observeur.observe(element);
    }

    // Appels de la fonction
    animerCompteur("#nbr1", 20, 1200, 20);     
    animerCompteur("#nbr2", 1, 48, 25);     
    animerCompteur("#nbr3", 1, 3, 400);    
    animerCompteur("#nbr4", 1, 12, 100);    


    //========== Compteur a rebours ===========
    const joursElement = document.querySelector("#jours");
    const heuresElement = document.querySelector("#heures");
    const minutesElement = document.querySelector("#minutes");
    const secondesElement = document.querySelector("#secondes");
    // Date de l'événement
    const evenement = new Date("November 20, 2026 08:00:00");

    function compteRebours() {
        const aujourdHui = new Date();  // Date actuelle
        const difference = evenement - aujourdHui;

        // Si l'événement est passé
        if (difference <= 0) {
            joursElement.textContent = "000";
            heuresElement.textContent = "00";
            minutesElement.textContent = "00";
            secondesElement.textContent = "00";
            return;
        }

        const jours = Math.floor(difference / (1000 * 60 * 60 * 24));
        const heures = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const secondes = Math.floor((difference % (1000 * 60)) / 1000);

        // Affichage dans le HTML
        if(joursElement){       // if permet de vérifier d'abord avant d'exécuter
            joursElement.textContent = jours;
        }
        if(heuresElement){
            heuresElement.textContent = heures;
        }
        if(minutesElement){
            minutesElement.textContent = minutes;
        }
        if(secondesElement){
            secondesElement.textContent = secondes;
        } 
          
    }

    // Exécute une première fois immédiatement
    compteRebours();
    // Met à jour toutes les secondes
    setInterval(compteRebours, 1000);

    
    // ========== Animations fade-in, slide-in, zoom-in au scroll ==========
    const sections = document.querySelectorAll(".fade-in, .slide-in, .zoom-in");
    const observer = new IntersectionObserver((mesSections) => {

        mesSections.forEach((section) => {
            if (section.isIntersecting) {
                // Fade In
                if (section.target.classList.contains("fade-in")) {
                    section.target.classList.add("fade-in-active");
                }
                // Slide In
                if (section.target.classList.contains("slide-in")) {
                    section.target.classList.add("slide-in-active");
                }
                // Zoom In
                if (section.target.classList.contains("zoom-in")) {
                    section.target.classList.add("zoom-in-active");
                }
            }
        });

    });

    // Observer toutes les sections
    sections.forEach((section) => {
        observer.observe(section);
    });


})
