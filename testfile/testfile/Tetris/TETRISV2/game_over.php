<?php
mysql_connect("localhost","root","");
mysql_select_db("takka");

$setQuery="select * from tbl_score where scr_usr_id=1";//.$_POST['user_id'];
$getQ=mysql_query($setQuery);
$data=mysql_fetch_array($getQ);

$updateQuery="UPDATE `takka`.`tbl_score` SET `scr_status` = 'Game Over' WHERE `tbl_score`.`scr_usr_id` =1";//$_POST['user_id']
mysql_query($updateQuery);

echo "Your Final Score Is = ".$old_score=$data['scr_score'];

?>
