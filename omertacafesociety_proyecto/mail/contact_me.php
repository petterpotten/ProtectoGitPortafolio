<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'pottenysuscosas@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Omerta Cafe Society Mensaje de :  $name";
$email_body = "Haz recibido un mensaje desde tu formulario de contacto de Omerta Cafe Society.\n\n"."Aquí los detalles:\n\nNombre: $name\n\nEmail: $email_address\n\nMensage:\n$message";
$headers = "From: noreplyomertacafesociety@gmail.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>