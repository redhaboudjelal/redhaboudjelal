// Fonction pour afficher une boîte de dialogue lorsque le bouton "Envoyer" du formulaire est cliqué
function envoyerFormulaire() {
  alert("Merci pour votre message ! Nous vous répondrons bientôt.");
}

// Ajout d'un gestionnaire d'événement au bouton "Envoyer"
var boutonEnvoyer = document.querySelector('button[type="submit"]');
boutonEnvoyer.addEventListener('click', envoyerFormulaire);

// Fonction pour changer la couleur de fond de la section "Mes projets" lorsque survolée par la souris
function changerCouleurFond() {
  var sectionProjets = document.querySelector('.mes-projets');
  sectionProjets.style.backgroundColor = '#f2f2f2'; // Vous pouvez changer la couleur selon votre préférence
}

// Ajout d'un gestionnaire d'événement pour la section "Mes projets"
var sectionMesProjets = document.querySelector('.mes-projets');
sectionMesProjets.addEventListener('mouseenter', changerCouleurFond);

// Fonction pour restaurer la couleur de fond d'origine lorsque la souris quitte la section "Mes projets"
function restaurerCouleurFond() {
  var sectionProjets = document.querySelector('.mes-projets');
  sectionProjets.style.backgroundColor = ''; // Rétablir la couleur de fond par défaut
}

// Ajout d'un gestionnaire d'événement lorsque la souris quitte la section "Mes projets"
sectionMesProjets.addEventListener('mouseleave', restaurerCouleurFond);
