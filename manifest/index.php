<?php
header('Content-Type: application/x-web-app-manifest+json');
$foo = file_get_contents ("manifest.webapp");
$foo = preg_replace ('/[\n\r ]*/', '', $foo);
echo $foo
?>
