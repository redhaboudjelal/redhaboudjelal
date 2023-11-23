<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $destinataire = "rboudjelal1@myges.fr";
    $sujet = "Nouveau message de $nom";
    $corpsMessage = "Nom: $nom\n";
    $corpsMessage .= "Email: $email\n\n";
    $corpsMessage .= "Message:\n$message";

    // En-têtes pour l'e-mail
    $headers = "De: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envoi de l'e-mail
    if (mail($destinataire, $sujet, $corpsMessage, $headers)) {
        echo "Le message a été envoyé avec succès!";
    } else {
        echo "Une erreur est survenue lors de l'envoi du message.";
    }
}
?>
