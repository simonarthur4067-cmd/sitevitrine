// formulaire de contact
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

// année automatique dans le footer
document.querySelector(".footer-bas p").textContent =
  "© " + new Date().getFullYear() + " Nature & Équilibre - Projet BTS SIO";

// lien actif dans la navigation selon la section visible
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
