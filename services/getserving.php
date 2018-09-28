<?php
include 'config.php';

$sql = "SELECT * FROM BeerServings b WHERE b.id=:serving";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->prepare($sql);
	$stmt->bindParam("serving", $_GET[serving]);
	$stmt->execute();
	$data = $stmt->fetchObject();
	$dbh = null;
	echo '{"item":'. json_encode($data) .'}';
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}';
}
?>
