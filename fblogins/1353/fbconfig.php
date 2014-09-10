<?php
require 'src/facebook.php';  // Include facebook SDK file
//require 'functions.php';  // Include functions
$facebook = new Facebook(array(
  'appId'  => '1526506464242368',   // Facebook App ID 
  'secret' => '28e3c16d4ee10615ab93fd9c5289f1ba',  // Facebook App Secret
  'cookie' => true,	
));
$user = $facebook->getUser();
if ($user) {
  try {
    $user_profile = $facebook->api('/me');
  	    $fbid = $user_profile['id'];                 // To Get Facebook ID
 	    $fbuname = $user_profile['username'];  // To Get Facebook Username
 	    $fbfullname = $user_profile['name']; // To Get Facebook full name
	      $femail = $user_profile['email'];    // To Get Facebook email ID
    //       checkuser($fbid,$fbuname,$fbfullname,$femail);    // To update local DB
  } catch (FacebookApiException $e) {
    error_log($e);
   $user = null;
  }
}
if ($user) {
  $logoutUrl = $facebook->getLogoutUrl(array(
		 'next' => 'http://demos.krizna.com/logout.php',  // Logout URL full path
		));
} else {
 $loginUrl = $facebook->getLoginUrl(array('scope'=> 'email', // Permissions to request from the user
		));
}
?>
