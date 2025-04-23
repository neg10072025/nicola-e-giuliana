<?php
// Verifica se i dati sono stati inviati tramite il metodo POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Ottieni i dati dal modulo
    $name = $_POST['name'];
    $email = $_POST['email'];
    $presence = $_POST['presence'];
    $allergies = $_POST['allergies'];
    $preferences = $_POST['preferences'];
    $notes = $_POST['notes'];

    // Crea una stringa con i dati
    $data = "Nome e Cognome: $name\nEmail: $email\nPresenza: $presence\nAllergie: $allergies\nPreferenze alimentari: $preferences\nNote: $notes\n\n";
    
    // Definisci il percorso del file dove vuoi salvare i dati
    $file = "rsvp_responses.txt";

    // Salva i dati nel file
    file_put_contents($file, $data, FILE_APPEND);

    // Redirige l'utente a una pagina di conferma (thank_you.php)
    header("Location: thank_you.php");
    exit;
}
?>
