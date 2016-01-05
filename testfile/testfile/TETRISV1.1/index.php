<?php
include_once("../config.php");
?>
<!DOCTYPE html>
<html lang="en">
    <head>
 
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name ="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta charset="utf-8"/>

        <!-- Set the title bar of the page -->
        <title>TETRIS</title>

        <!-- Set the background colour of the document -->
        <style>
            body {
              background: #222;
              color:#cccccc;
              margin: 0px;
              padding: 0px;
              border: 0px;
            }
            canvas {
                      image-rendering: optimizeSpeed;
                      -webkit-interpolation-mode: nearest-neighbor;
                      margin: 0px;
                      padding: 0px;
                      border: 0px;
            }
            div.gm4html5_div_class
            {
              position: fixed;
              top: 50%;
              left: 50%;
              margin-left: -400px;
              margin-top: -300px;
              padding: 0px;
              border: 0px;
            }
            :-webkit-full-screen {
               width: 100%;
               height: 100%;
            }
        </style>
    </head>

    <body>
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
        <div class="gm4html5_div_class" id="gm4html5_div_id">
            <!-- Create the canvas element the game draws to -->
            <canvas id="canvas" width="800" height="600">
               <p>Your browser doesn't support HTML5.</p>
            </canvas>
        </div>

        <!-- Run the game code -->
        <script type="text/javascript" src="html5game/tetris_130509_2200.js?CECAC=1909624080"></script>
    </body>
</html>
