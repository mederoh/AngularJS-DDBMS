<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
	$wban = $_GET['wban'];

	require("DBI.php");
	$dbi = new DBI();
	$dbi->connect();
	$dbi->query("SELECT * FROM station WHERE wban ='$wban'");
	print json_encode($dbi->fetch());/**/
?>
