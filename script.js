document.addEventListener("DOMContentLoaded", () => {
    const filtres = document.querySelectorAll(".filtre");
    const vignettes = document.querySelectorAll(".vignette");

    filtres.forEach(filtre => {
        filtre.addEventListener("click", () => {
            const service = filtre.dataset.service;

            if (service === "tous") {
                vignettes.forEach(v => v.style.display = "block");
            } else {
               vignettes.forEach(v => {
                   v.style.display = v.dataset.service === service ? "block" : "none";
               });
           }

           // Met à jour le style du filtre actif
           filtres.forEach(f => f.classList.remove("actif"));
            filtre.classList.add("actif");
        });
    });
});