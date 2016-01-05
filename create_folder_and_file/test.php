<?php
echo "Call";
//$filename="test";
//echo $directory = 'C:/sales/'.$filename.'.txt';

print_r($_SERVER);
$folder_name=time();
$path_name = '/opt/lampp/htdocs/iflair_test/create_folder_and_file/'.$folder_name;
if ( ! is_dir($path_name)) {
    mkdir($path_name);
}
chmod($folder_name, 0755);

7001712254

7111288
