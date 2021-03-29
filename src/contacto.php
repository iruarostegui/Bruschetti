<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $telefono = $_POST['telefono'];
    $message = $_POST['mensaje'];


    $mailTo = "info@bruschetti.com.ar";
    $headers = "From: ".$mailFrom;
    $txt = "Recibiste un nuevo mensaje de ".$name.".\n\n".$message;

    mail($mailTo, $telefono, $txt, $headers);
    header("Location: index.php?mailsend")
}