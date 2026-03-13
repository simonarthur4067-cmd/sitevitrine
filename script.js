// ── ANTI-SPAM ────────────────────────────────────────────────────────────
var nb1 = Math.floor(Math.random() * 9) + 1;
var nb2 = Math.floor(Math.random() * 9) + 1;
var bonneReponse = nb1 + nb2;

document.getElementById("anti-spam-label").textContent =
  "Vérification anti-spam : combien font " + nb1 + " + " + nb2 + " ?";

function nouvelleQuestion() {
  nb1 = Math.floor(Math.random() * 9) + 1;
  nb2 = Math.floor(Math.random() * 9) + 1;
  bonneReponse = nb1 + nb2;
  document.getElementById("anti-spam-label").textContent =
    "Vérification anti-spam : combien font " + nb1 + " + " + nb2 + " ?";
  document.getElementById("anti-spam-reponse").value = "";
}

// ── FORMULAIRE ───────────────────────────────────────────────────────────
document
  .getElementById("form-contact")
  .addEventListener("submit", function (e) {
    // On bloque toujours le rechargement de page
    e.preventDefault();

    var retour = document.getElementById("message-retour");
    var email = document.getElementById("email").value;
    var reponse = parseInt(document.getElementById("anti-spam-reponse").value);

    // Vérification format email : doit contenir @ et un point après (x@x.x)
    var formatEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatEmail.test(email)) {
      retour.textContent =
        "Veuillez entrer une adresse email valide (ex : nom@domaine.fr).";
      retour.className = "erreur";
      return;
    }

    // Vérification anti-spam
    if (reponse !== bonneReponse) {
      retour.textContent = "Réponse anti-spam incorrecte, veuillez réessayer.";
      retour.className = "erreur";
      nouvelleQuestion();
      return;
    }

    // Tout est bon : envoi en arrière-plan via fetch (pas de rechargement de page)
    fetch("envoyer.php", {
      method: "POST",
      body: new FormData(document.getElementById("form-contact")),
    })
      .then(function () {
        retour.textContent = "Votre message a bien été envoyé !";
        retour.className = "succes";

        document.getElementById("nom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("rgpd").checked = false;
        nouvelleQuestion();
      })
      .catch(function () {
        retour.textContent = "Une erreur est survenue, veuillez réessayer.";
        retour.className = "erreur";
      });
  });

// ── ANNÉE AUTOMATIQUE ────────────────────────────────────────────────────
document.querySelector(".footer-bas p").textContent =
  "© " + new Date().getFullYear() + " Nature & Équilibre - Projet BTS SIO";

// ── LIEN ACTIF DANS LA NAVIGATION ───────────────────────────────────────
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
