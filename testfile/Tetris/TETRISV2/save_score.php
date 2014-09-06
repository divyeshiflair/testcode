<?php

$setQuery="select * from ".TBL_SCORE_V2." where scr_usr_id=1";//.$_POST['user_id'];
$getQ=mysql_query($setQuery);
$data=mysql_fetch_array($getQ);
echo "oldscore=".$old_score=$data['scr_score'];
if(empty($data)){
	$insertQuery="INSERT INTO ".TBL_SCORE_V2." ( `scr_usr_id`, `scr_score`, `scr_status`) VALUES ('1', ".$_POST['current_score'].", 'Continue')";
	mysql_query($insertQuery);

}else{
	$new_score=$old_score + $_POST['current_score'];
	echo $updateQuery="UPDATE ".TBL_SCORE_V2." SET `scr_score` = '".$new_score."',`scr_status` = 'Continue' WHERE `tbl_score`.`scr_usr_id` =1";//$_POST['user_id']
	//mysql_query($updateQuery);
}
?>
