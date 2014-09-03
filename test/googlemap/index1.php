<!DOCTYPE html>
<html> 
<head>
   <script type="text/javascript" 
           src="http://maps.google.com/maps/api/js?sensor=false"></script>
</head> 
<body>
   <div id="map" style="width: 400px; height: 300px"></div> 

   <script type="text/javascript"> 
      var myOptions = {
         zoom: 8,
         center: new google.maps.LatLng(23.039568, 72.56600399999999),
         mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(document.getElementById("map"), myOptions);
   </script> 
</body> 
</html>
