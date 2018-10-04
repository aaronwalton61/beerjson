<?php
include 'config.php';

$sql = "SELECT
	BeerServings.List as Name,
    COUNT(*) AS `num`,
    BeerLists.Graphic,
    BeerLists.order
FROM BeerServings
INNER JOIN BeerLists
ON BeerLists.Name = BeerServings.List
GROUP BY BeerServings.List
ORDER BY BeerLists.order";

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
