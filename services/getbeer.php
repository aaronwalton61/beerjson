<?php
include 'config.php';

$sql = "SELECT * FROM Beer b WHERE b.beer_id=:id";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->prepare($sql);
	$stmt->bindParam("id", $_GET[id]);
	$stmt->execute();
	$data = $stmt->fetchObject();
	$dbh = null;
	echo '{"item":'. json_encode($data) .'}';
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}';
}
?>
