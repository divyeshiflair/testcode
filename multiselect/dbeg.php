<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Chosen: A jQuery Plugin by Harvest to Tame Unwieldy Select Boxes</title>
  <link rel="stylesheet" href="docsupport/style.css">
  <link rel="stylesheet" href="docsupport/prism.css">
  <link rel="stylesheet" href="chosen.css">
 </head>
<body>
  <form>
    <div id="container">
      <div id="content">
        <header>
			 <div class="side-by-side clearfix">
			  <select data-placeholder="Your Favorite Type of Bear" style="width:350px;" class="chosen-select-deselect" tabindex="12">
				<option value=""></option>
				<option>American Black Bear</option>
				<option>Asiatic Black Bear</option>
				<option>Brown Bear</option>
				<option>Giant Panda</option>
				<option selected>Sloth Bear</option>
				<option>Sun Bear</option>
				<option>Polar Bear</option>
				<option>Spectacled Bear</option>
			  </select>
			</div>
      </div>

    </div>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js" type="text/javascript"></script>
  <script src="chosen.jquery.js" type="text/javascript"></script>
  <script type="text/javascript">
    var config = {
      '.chosen-select'           : {},
      '.chosen-select-deselect'  : {allow_single_deselect:true},
      '.chosen-select-no-single' : {disable_search_threshold:10},
      '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
      '.chosen-select-width'     : {width:"95%"}
    }
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }
  </script>
  </form>
  
</body>
</html>
