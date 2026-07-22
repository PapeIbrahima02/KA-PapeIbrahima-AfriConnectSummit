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

    //==== Bouton retour en haut ====
    const btnHaut = document.querySelector("#btn-Top");       
    window.addEventListener("scroll", () => {                       
        if(window.scrollY > 400) {                                  
            btnHaut.style.display = "block"                         // On affiche l'element 
        }else{
            btnHaut.style.display = "none"                          // On cache l'element
        }
    });

    btnHaut.addEventListener("click", () => {                       
        window.scrollTo({                                            // Methode qui Fait remonter la page
            top : 0,                                                    
            behavior : "smooth"                                         // defilement fluide
        }); 
    });
})
