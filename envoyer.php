<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nom     = htmlspecialchars($_POST["nom"]);
    $email   = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $destinataire = "christine@example.com"; 
    $sujet        = "Nouveau message de " . $nom;
    $corps        = "Nom : $nom\nEmail : $email\n\nMessage :\n$message";
    $headers      = "From: $email";

    mail($destinataire, $sujet, $corps, $headers);

    header("Location: index.html?envoi=ok");
    exit();
}
?>