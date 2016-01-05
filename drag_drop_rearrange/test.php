<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery UI Draggable + Sortable</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  <style>
  ul { list-style-type: none; margin: 0; padding: 0; margin-bottom: 10px; }
  li { margin: 5px; padding: 5px; width: 150px; }
  </style>
  
  <script>
	$(document).ready(function() {
		$("#sortable").sortable({
			update : function () {
				serial = $('#sortable').sortable('serialize');
				$.ajax({
					url: "sort_menu.php",
					type: "post",
					data: serial,
					beforeSend: function () {
						$("#loading_div").show();
					},
					complete: function () {
						$("#loading_div").hide();
					},
					success: function (msg) {
						if (msg != "") {
							$("#upcoming_event_div").html(msg);
						}
					},
					error: function(){
						alert("theres an error with AJAX");
					}
				});
			}
		});
	});
</script>
</head>
<body>
	<style>
		/* loade div DR */
		/*#adv_ajax{ margin:20px 0; }*/
		#loading_div.overly{ position:fixed; background:rgba(255,255,255, 0.5); left: 0; right: 0; top: 0; bottom:0; }
		#loading_div.overly table, #loading_div.overly table tr, #loading_div.overly table tr td{ height:100%; width:100%;  }
		#loading_div.overly table tr td{ vertical-align:middle; text-align:center;  }
	</style>
 <div id="loading_div" class="overly" style=" display:none;">
	 <table border="0" cellspacing="0" cellpadding="0">
		 <tr>
			 <td valign="middle">
				 <img src="ajax-loader.gif">
			</td>
		</tr>
	</table>
</div>

 <ul id="sortable">
<?php
mysql_connect("localhost","root","");
mysql_select_db("drag_drop_rearrange");   
$sel_bro1 = "SELECT * FROM `news` ORDER BY `news`.`sort_order` ASC ";
$res_bro = mysql_query($sel_bro1);
while($rs=mysql_fetch_array($res_bro)){
	echo '<li id="menu_' . $rs['id'] . '">' . $rs['news'] . "</li>\n";
}
/*for($t=11;$t<=100;$t++){
$sel_bro1 = "INSERT INTO `drag_drop_rearrange`.`news` (`news`)VALUES ('NEWS-".$t."'); ";
$res_bro = mysql_query($sel_bro1);
}*/
?>
 
</ul>
 
 
</body>
</html>
