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

$sqlserving =  "UPDATE BeerServings
                SET Name2=:beerName
                   , beer_id=:beerid
                   , Serving=:CellarServing
                   , List=:List
                   , Location=:Location
                   , Review=:notes
                   , Date=:beerDrinkDate
                   , _CellarDate=:beerCellarDate
                   , Vintage=:vintage
                WHERE id=:servid";

$sqlbeer = "UPDATE Beer
            SET Name=:beerName
                , BeerAdvocate=:beerURL
                , Characteristics=:beerCharacter
                , cellared=:beerCellared
                , ExtendedCellar=:HighGrav
                , CellarDate=:beerCellarDate
                , CellarServing=:CellarServing
                , photo_id=:beerPhoto
                , Notes=:notes
            WHERE beer_id=:beerid";


if ( $beerid != "" || $servid != "" )
{
    if ( $servid != "" )
        $sql = $sqlserving;
    else
        $sql = $sqlbeer;
}

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $dbh->prepare($sql);
    if ( $servid != "" ) {
        //Query for Serving to Edit
        $stmt->bindParam("beerName", $beername);
        $stmt->bindParam("beerid", $beerid);
        $stmt->bindParam("CellarServing", $serving);
        $stmt->bindParam("List", $list);
        $stmt->bindParam("Location", $location);
        $stmt->bindParam("notes", $notes);
        $stmt->bindParam("beerDrinkDate", $date);
        $stmt->bindParam("beerCellarDate", $cellardate);
        $stmt->bindParam("vintage", $vintage);
        $stmt->bindParam("servid", $servid);
    }
    else {
        //Query of Beer to Edit
        $stmt->bindParam("beerName", $beername);
        $stmt->bindParam("beerURL", $url);
        $stmt->bindParam("beerCharacter", $char);
        $stmt->bindParam("beerCellared", $cellar);
        $stmt->bindParam("HighGrav", $deep);
        $stmt->bindParam("beerCellarDate", $cellardate);
        $stmt->bindParam("CellarServing", $serving);
        $stmt->bindParam("beerPhoto", $photo);
        $stmt->bindParam("notes", $thoughts);
        $stmt->bindParam("beerid", $beerid);
    }
	$stmt->execute();
	// $data = $stmt->fetchObject();
	// $dbh = null;
	// echo '{"item":'. json_encode($data) .'}';
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}';
}
?>
