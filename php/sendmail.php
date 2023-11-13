<?php
if($_POST)
{
	$to_email   	= "et.miracle@hotmail.fr"; //E-mail du destinataire, Remplacer par son propre e-mail ici
	
	//Vérifier s'il s'agit d'une requête ajax, quittez si ce n'est pas le cas
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
		
		$output = json_encode(array( //create JSON data
			'type'=>'error', 
			'text' => 'Désolé, la demande doit être Ajax POST'
		));
		die($output); //script de sortie produisant des données json
    } 
	
	//Désinfectez les données d'entrée à l'aide de PHP filter_var().
	$user_name		= filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
	$user_email		= filter_var($_POST["user_email"], FILTER_SANITIZE_EMAIL);
	$phone		= filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
	$subject		= filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
	$message		= filter_var($_POST["msg"], FILTER_SANITIZE_STRING);
	
	//email 
	$message_body = $message."\r\n\r\n-".$user_name."\r\nsubject : ".$subject."\r\nPhone : ".$phone."\r\nEmail : ".$user_email;
	
	//continuez avec le courrier électronique PHP.
	$headers = 'From: '.$user_name.'' . "\r\n" .
	'Reply-To: '.$user_email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	
	$send_mail = mail($to_email, $subject, $message_body, $headers);
	
	if(!$send_mail)
	{
		//Si le courrier n'a pas pu être envoyé, une erreur de sortie s'affiche. Vérifiez votre configuration de messagerie PHP (si jamais cela se produit)
		$output = json_encode(array('type'=>'error', 'text' => ''));
		die($output);
	}else{
		// vous pouvez modifier votre message de réussite ci-dessous
		$output = json_encode(array('type'=>'message', 'text' => ''));
		die($output);
	}
	
}
?>
