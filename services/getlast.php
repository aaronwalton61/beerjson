<?php
include 'config.php';

$sql = "SELECT * FROM Beer INNER JOIN dataervings ON Beer.beer_id = dataervings.beer_id ORDER BY dataervings.Date Desc Limit 100";

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
