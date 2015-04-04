<?php
error_reporting(E_ALL); 
ini_set("display_errors", 1); 
	require("DBI.php");
	$dbi = new DBI();
	$dbi->connect();
	$dbi->query("SELECT * FROM monthly LIMIT 100");
	print json_encode($dbi->fetch());
?>
