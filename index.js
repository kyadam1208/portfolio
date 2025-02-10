// Fonction qui affiche l'adresse e-mail
function afficherEmail() {
    alert("Contactez-moi à l'adresse : yacoubadamk@gmail.com");
}

// Ajouter un écouteur d'événement au bouton
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner le bouton par son ID
    const boutonContact = document.getElementById("bouton-contact");

    // Ajouter un écouteur d'événement pour le clic
    if (boutonContact) {
        boutonContact.addEventListener("click", afficherEmail);
    }
});