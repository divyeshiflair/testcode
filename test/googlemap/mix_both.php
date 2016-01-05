<!DOCTYPE html>
<html>
    <head>
        <title>jQuery mobile with Google maps geo directions example</title>
        <meta content="en" http-equiv="content-language">
        <link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
        <script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
        <script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>
        <!--script type="text/javascript" src="http://maps.google.com/maps/api/js?v=3&sensor=false&language=en"></script-->
        <script src="http://maps.googleapis.com/maps/api/js?sensor=false&amp;libraries=places" type="text/javascript"></script>
        <script type="text/javascript">
            $(document).on("pageinit", "#map_page", function() {
                initialize();
            });

            $(document).on('click', '#submit', function(e) {
                e.preventDefault();
                calculateRoute();
            });

            var directionDisplay,
                directionsService = new google.maps.DirectionsService(),
                map;

            function initialize() 
            {
				var from = document.getElementById('from');
				var from1 = new google.maps.places.Autocomplete(from);
				
				var to = document.getElementById('to');
				var to1 = new google.maps.places.Autocomplete(to);
				
                directionsDisplay = new google.maps.DirectionsRenderer();
                var mapCenter = new google.maps.LatLng(59.3426606750, 18.0736160278);

                var myOptions = {
                    zoom:10,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    center: mapCenter
                }

                map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
                directionsDisplay.setMap(map);
                directionsDisplay.setPanel(document.getElementById("directions"));  
            }

            function calculateRoute() 
            {
				
				markerArray = [];
                var selectedMode = $("#mode").val(),
                    start = $("#from").val(),
                    end = $("#to").val();

                if(start == '' || end == '')
                {
                    // cannot calculate route
                    $("#results").hide();
                    return;
                }
                else
                {
                    var request = {
                        origin:start, 
                        destination:end,
                        travelMode: google.maps.DirectionsTravelMode[selectedMode]
                    };

                    directionsService.route(request, function(response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(response); 
                            //alert(response.toSource());
                            $("#results").show();
                            
                                var myRoute = response.routes[0].legs[0];
                               for (var i = 0; i < myRoute.steps.length; i++) {
									var marker = new google.maps.Marker({
									  position: myRoute.steps[i].start_location,
									  map: map
									});
									attachInstructionText(marker, myRoute.steps[i].instructions);
									markerArray[i] = marker;
									
								  }
                            
                        }
                        else {
                            $("#results").hide();
                        }
                    });

                }
            }
            
function attachInstructionText(marker, text) {
	
  google.maps.event.addListener(marker, 'click', function() {
	 // Open an info window when the marker is clicked on,
    // containing the text of the step.
    stepDisplay.setContent(text);
    stepDisplay.open(map, marker);
  });
}
        </script>
    </head>
    <body>
        <div data-role="page" id="map_page">
            <div data-role="header">
                <h1><a href="#">jQuery mobile - Google maps directions service</h1>
            </div>
            <div data-role="content">
                <div class="ui-bar-c ui-corner-all ui-shadow" style="padding:1em;">
                    <div id="map_canvas" style="height:300px;"></div>
                    <div data-role="fieldcontain">
                        <label for="from">From</label> 
                        <input type="text" id="from" value="Goteborg, Sweden"/>
                    </div>
                    <div data-role="fieldcontain">
                        <label for="to">To</label> 
                        <input type="text" id="to" value="Stockholm, Sweden"/>
                    </div>
                    <div data-role="fieldcontain">
                        <label for="mode" class="select">Transportation method:</label>
                        <select name="select-choice-0" id="mode">
                            <option value="DRIVING">Driving</option>
                            <option value="WALKING">Walking</option>
                            <option value="BICYCLING">Bicycling</option>
                        </select>
                    </div>
                    <a data-icon="search" data-role="button" href="#" id="submit">Get directions</a>
                    
                </div>
                <input type="text" id="total" value=""/>
                <div id="results" style="display:none;">
                    <div id="directions"></div>
                </div>
            </div>
        </div>
    </body>
</html>
