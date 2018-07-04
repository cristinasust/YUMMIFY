<?php
	$email = $_POST['email']; 
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "subscribe@yummify.com";
    $to = "cristina.sust@gmail.com";
    $subject = "New Subscribe";
    $message = $email;
    $headers = "From:" . $from;
    mail($to,$subject,$message);
    echo "Thank you to subscribe.";
?>