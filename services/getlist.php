<?php
include 'config.php';

$listname =  $_GET['list'];

//$sql = "SELECT * FROM BeerServings WHERE List = '{$listname}' INNER JOIN Beer ON Beer.beer_id = BeerServings.beer_id ORDER BY Date Desc";
$sql = "SELECT * FROM BeerServings WHERE List = '{$listname}' ORDER BY Date Desc";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->query($sql);
	$data= $stmt->fetchAll(PDO::FETCH_OBJ);
	$dbh = null;
	echo '{"items":'. json_encode($data) .'}';
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}';
}
?>
