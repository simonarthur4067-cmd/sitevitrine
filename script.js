// Gestion du formulaire de contact
// Quand l'utilisateur clique sur "Envoyer", on empêche le rechargement de la page
// puis on affiche un message de confirmation et on vide les champs
document
  .getElementById("form-contact")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("message-retour").textContent =
      "Votre message a bien été envoyé !";

    document.getElementById("nom").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });

// Année automatique dans le footer
// Remplace le texte statique par l'année en cours pour ne pas avoir à le changer manuellement
document.querySelector(".footer-bas p").textContent =
  "© " + new Date().getFullYear() + " Nature & Équilibre - Projet BTS SIO";

// Lien actif dans la navigation
// À chaque scroll, on détecte quelle section est visible et on met le lien correspondant en vert
window.addEventListener("scroll", function () {
  var sections = document.querySelectorAll("section");
  var liens = document.querySelectorAll(".nav-liste a");

  sections.forEach(function (section) {
    var haut = section.offsetTop - 100;
    var bas = haut + section.offsetHeight;

    if (window.scrollY >= haut && window.scrollY < bas) {
      liens.forEach(function (lien) {
        lien.classList.remove("actif");
        if (lien.getAttribute("href") === "#" + section.id) {
          lien.classList.add("actif");
        }
      });
    }
  });
});
