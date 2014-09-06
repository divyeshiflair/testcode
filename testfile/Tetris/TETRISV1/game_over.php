<?php

include_once("../config.php");

$setQuery="select * from ".TBL_SCORE_V1." where scr_usr_id=1";//.$_POST['user_id'];
$getQ=mysql_query($setQuery);
$data=mysql_fetch_array($getQ);

$updateQuery="UPDATE ".TBL_SCORE_V1." SET `scr_status` = 'Game Over' WHERE `scr_usr_id` =1";//$_POST['user_id']
mysql_query($updateQuery);

echo "Your Final Score Is = ".$old_score=$data['scr_score'];

?>
