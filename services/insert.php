<?php
include 'config.php';

// get all the form contents
// for both
$beerid = $_POST['beerid'];
$cellardate = $_POST['beerCellarDate'];
$serving =  $_POST['CellarServing'];
$notes = $_POST['notes'];  //both notes and thoughts
$beername = $_POST['beerName'];
// for beer
$url = $_POST['beerURL'];
$cellar = $_POST['beerCellared'];
$photo = $_POST['beerPhoto'];
$char = $_POST['beerCharacter'];
$deep = $_POST['HighGrav'];
// for serving
$servid = $_POST['servid'];
$date = $_POST['beerDrinkDate'];
$location =  $_POST['Location'];
$list =  $_POST['List'];
$vintage = $_POST['vintage'];

$sqlserving =  "INSERT INTO BeerServings
                 ( Name2
                   , beer_id
                   , Serving
                   , List
                   , Location
                   , Review
                   , Date
                   , _CellarDate
                   , Vintage )
                VALUES (?,?,?,?,?,?,?,?,?)";

$sqlbeer = "INSERT INTO Beer
            ( Name
                , BeerAdvocate
                , Characteristics
                , cellared
                , ExtendedCellar
                , CellarDate
                , CellarServing
                , photo_id
                , Notes )
            VALUES (?,?,?,?,?,?,?,?,?)";


if ( $beerid == "0" || $servid == "0" )
{
    if ( $servid == "0" )
        $sql = $sqlserving;
    else
        $sql = $sqlbeer;
}

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $dbh->prepare($sql);
    if ( $servid == "0" ) {
        //Query for Serving to Edit
        $stmt->bindParam(1, $beername);
        $stmt->bindParam(2, $beerid);
        $stmt->bindParam(3, $serving);
        $stmt->bindParam(4, $list);
        $stmt->bindParam(5, $location);
        $stmt->bindParam(6, $notes);
        $stmt->bindParam(7, $date);
        $stmt->bindParam(8, $cellardate);
        $stmt->bindParam(9, $vintage);
    }
    else {
        //Query of Beer to Edit
        $stmt->bindParam(1, $beername);
        $stmt->bindParam(2, $url);
        $stmt->bindParam(3, $char);
        $stmt->bindParam(4, $cellar);
        $stmt->bindParam(5, $deep);
        $stmt->bindParam(6, $cellardate);
        $stmt->bindParam(7, $serving);
        $stmt->bindParam(8, $photo);
        $stmt->bindParam(9, $thoughts);
    }
	$stmt->execute();
	// $data = $stmt->fetchObject();
	// $dbh = null;
	// echo '{"item":'. json_encode($data) .'}';
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}';
}
?>
