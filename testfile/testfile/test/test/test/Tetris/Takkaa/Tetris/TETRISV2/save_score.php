<?php
session_start();
include_once("../config.php");
if($_POST['action_type']=='insert_rec'){
	echo $insertQuery="INSERT INTO ".TBL_SCORE_V2." ( `scr_usr_id`, `scr_score`,`scr_level`, `scr_status`) VALUES ('1', 0,0, 'New')";
	mysql_query($insertQuery);
	$last_id=mysql_insert_id();
	$_SESSION['lastid']=$last_id;
	
	
}else{
	$setQuery="select * from ".TBL_SCORE_V2." where scr_usr_id=1 AND scr_id=".$_SESSION['lastid'];//.$_POST['user_id'];
	$getQ=mysql_query($setQuery); 
	$data=mysql_fetch_array($getQ);
	echo "oldscore=".$old_score=$data['scr_score'];
	$new_score=$old_score + $_POST['current_score'];
	echo $updateQuery="UPDATE ".TBL_SCORE_V2." SET `scr_score` = '".$new_score."', `scr_level` = '".$_POST['level']."', `scr_status` = 'Continue' WHERE `scr_usr_id` =1 AND scr_id=".$_SESSION['lastid'];
	mysql_query($updateQuery);
}
?>
