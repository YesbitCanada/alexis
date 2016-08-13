<?php

if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

//send email
   if (mail("blues.qin@gmail.com", "yes-bit msg from: " .$email, $message)) {
    //echo "Message successfully sent!";
} else {
   // echo "Message delivery failed...";
}
	//phpinfo();
}
?>