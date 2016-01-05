<?php
mysql_connect("localhost","root","");
mysql_select_db("drag_drop_rearrange"); 
$menu = $_POST['menu'];
print_r($menu);
for ($i = 0; $i < count($menu); $i++) {
	echo $fs="UPDATE `news` SET `sort_order`=" . $i . " WHERE `id`='" . $menu[$i] . "'";
	echo "<br>";
	mysql_query($fs) or die(mysql_error());
}  
?>
