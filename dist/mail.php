<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        # FIX: Replace this email with recipient email
        $mail_to = "info@bruschetti.com.ar";
        
        # Sender Data
        $subject = trim($_POST["subject"]);
        $name = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $phone = trim($_POST["phone"]);
        $message = trim($_POST["message"]);
        
        if ( empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($phone) OR empty($subject) OR empty($message)) {
            # Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Please complete the form and try again.";
            exit;
        }
        
        # Mail Content
        $content = "Nombre: $name\n";
        $content .= "Email: $email\n\n";
        $content .= "Telefono: $phone\n";
        $content .= "Mensaje:\n$message\n";

        # email headers.
        $headers = "From: $name &lt;$email&gt;";

        # Send the email.
        $success = mail($mail_to, $subject, $content, $headers);
        if ($success) {
            # Set a 200 (okay) response code.
            http_response_code(200);
            echo "Tu mensaje fue enviado con éxito, nos contactaremos a la brevedad.";
        } else {
            # Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! algo salio mal, no pudimos enviar tu mensaje.";
        }

        } else {
            # Not a POST request, set a 403 (forbidden) response code.
            http_response_code(403);
            echo "Hubo un error en tu mensaje, por favor vuelve a intentarlo.";
        }
?>