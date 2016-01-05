<?php
include_once("../config.php");
?>
<!DOCTYPE html>
<html lang="en">
    <head>
         
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="pragma" content="no-cache"/>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name ="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
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
            :-webkit-full-screen #canvas {
                 width: 100%;
                 height: 100%;
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
            /* START - Login Dialog Box */
            div.gm4html5_login
            {
                 padding: 20px;
                 position: absolute;
                 border: solid 2px #000000;
                 background-color: #404040;
                 color:#00ff00;
                 border-radius: 15px;
                 box-shadow: #101010 20px 20px 40px;
            }
            div.gm4html5_cancel_button
            {
                 float: right;
            }
            div.gm4html5_login_button
            {
                 float: left;
            }
            div.gm4html5_login_header
            {
                 text-align: center;
            }
            /* END - Login Dialog Box */
            :-webkit-full-screen {
               width: 100%;
               height: 100%;
            }
        </style>
    </head>

    <body>
     <script src="//code.jquery.com/jquery-1.10.2.js"></script>
        <div class="gm4html5_div_class" id="gm4html5_div_id">
        <img src="SAM/splash.png" id="GM4HTML5_loadingscreen" alt="smilegames:HTML5 loading screen" style="display:none;"/>
            <!-- Create the canvas element the game draws to -->
            <canvas id="canvas" width="800" height="600">
               <p>Your browser doesn't support HTML5 canvas.</p>
            </canvas>
        </div>
        <!-- Run the game code -->
        <script type="text/javascript" src="SAM/tetris_131025_1700(C4).js?WZVXB=1860920073"></script>
    </body>
</html>
