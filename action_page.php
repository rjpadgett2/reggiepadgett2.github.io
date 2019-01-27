<?php
$name = $_POST['Name'];
$visitor_email = $_POST['Email'];
$message = $_POST['Message'];
//Validate first
if(empty($name)||empty($visitor_email))
{
    echo "Name and email are mandatory!";
    exit;
}
if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}
// $email_from = 'tom@amazing-designs.com';//<== update the email address
$email_subject = "New Form submission";
$email_body = "You have received a new message from the user $name. (. $visitor_email. )\n".
    "Here is the message:\n $message";
$to = "reggie.padgett2@gmail.com";//<== update the email address
// $headers = "From: $visitor_email \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to Home Page
$thank_you_message = "Thank You For Your Submission";
echo "<script type='text/javascript'>alert('$thank_you_message');</script>";
header('Location: index.html');
// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
?>
