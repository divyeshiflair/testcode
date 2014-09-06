<?php
include_once("../config.php");

echo $setQuery="select * from ".TBL_SCORE_V11." where scr_usr_id=1";//.$_POST['user_id'];
$getQ=mysql_query($setQuery);
$data=mysql_fetch_array($getQ);
if(empty($data)){
	$insertQuery="INSERT INTO ".TBL_SCORE_V11."  ( `scr_usr_id`, `scr_score`, `scr_level`, `scr_status`) VALUES ('1', ".$_POST['current_score'].",".$_POST['level'].",'Continue')";
	mysql_query($insertQuery);

}else{
	$new_score=$_POST['current_score'];
	$updateQuery="UPDATE ".TBL_SCORE_V11." SET `scr_score` = '".$new_score."',scr_level=".$_POST['level'].",`scr_status` = 'Continue' WHERE `scr_usr_id` =1";//$_POST['user_id']
	mysql_query($updateQuery);
}
?>
