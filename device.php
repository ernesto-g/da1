<?php

	$out = ["response"=>true,"idDevice"=>$_POST["id"],"state"=>$_POST["checked"]];
	//echo("OK");
	//print_r($_POST);
	echo(json_encode($out));

?>
