<?php
session_start();
include_once("../config.php");

$setQuery="select * from ".TBL_SCORE_V2." where scr_usr_id=1 AND scr_id=".$_SESSION['lastid'];
$getQ=mysql_query($setQuery);
$data=mysql_fetch_array($getQ);

$updateQuery="UPDATE  ".TBL_SCORE_V2." SET `scr_status` = 'Game Over' WHERE `scr_usr_id` =1 AND scr_id=".$_SESSION['lastid'];//$_POST['user_id']
mysql_query($updateQuery);

echo "<div align='center'>Your Final Score Is = ".$old_score=$data['scr_score']."</div><br>
<br>
<br><div id='replay' style=' cursor: pointer;' align='center'>Replay</div>";


?>
