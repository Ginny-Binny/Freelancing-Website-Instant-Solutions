<?php

require_once('recaptchalib.php');
  $privatekey = "6LfKGvYSAAAAAPPnMlaPRiIB7bTzOB1wW9Y1UD0m";
  $resp = recaptcha_check_answer ($privatekey,
                                $_SERVER["REMOTE_ADDR"],
                                $_POST["recaptcha_challenge_field"],
                                $_POST["recaptcha_response_field"]);

  if (!$resp->is_valid) {
    // What happens when the CAPTCHA was entered incorrectly
    die ("El captcha que ingresaste no es válido, intentalo nuevamente dando back a tu navegador." .
         "(reCAPTCHA said: " . $resp->error . ")");
  } else {

$nombre=$_POST['nombre'];
$mail=$_POST['email'];
$asunto=$_POST['asunto'];
$message=$_POST['mensaje'];

//revisar los datos de la casa y del cliente para mandar a la constructora y a quieromicasa.com.mx los datos del interes

//casa

  
  
  // multiple recipients
 
						
$to  = "contacto@viusa.com.mx"; // note the comma



// subject
$subject = 'Nuevo mensaje desde el sitio web';

// message
$message = "
<html>
<head>
  <title>Hay gente que te esta contactando</title>
</head>
<body>
  <p>Hola Viusa, $nombre te ha enviado un correo de contacto.</p>
  Los datos para que lo contactes son los siguientes:<br />

  E-Mail: $mail<br>
  Asunto: $asunto<br>
  Comentario: $message
</body>
</html>
";

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

// Additional headers
//$headers .= 'To: Mary <mary@example.com>, Kelly <kelly@example.com>' . "\r\n";
$headers .= "From: $nombre <$mail>" . "\r\n";
//$headers .= 'Cc: birthdayarchive@example.com' . "\r\n";
//$headers .= 'Bcc: birthdaycheck@example.com' . "\r\n";

// Mail it
mail($to, $subject, $message, $headers);

?>
<script>
	alert("Gracias por tu mensaje nos contactaremos a la brevedad");
</script>
<?php
echo "<meta http-equiv='Refresh' content='0; url=contact.php'>";
  }
?>