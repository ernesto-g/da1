<?php


$f3 = require('lib/base.php');

$f3->set('AUTOLOAD','Controllers/');
$f3->set('DEBUG', 3); // 0-3; 0=off, 3=way too much information

$f3->route('GET /',
    function() {
        echo 'Hello, world!';
    }
);

$f3->map('/devices/@id','ControllerDevices','@id');
$f3->map('/devices','ControllerDevices');

$f3->run();
?>
