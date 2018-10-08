<?php
include 'config.php';

// get all the form contents
$beerid = $_POST['beerid'];
$servid = $_POST['servid'];

$beername = $_POST['beerName'];
$url = $_POST['beerURL'];
$date = $_POST['beerDrinkDate'];
//$thoughts = str_replace("'", "''", $_POST['thoughts']);
$serving =  $_POST['CellarServing'];
$location =  $_POST['Location'];
$list =  $_POST['List'];
$cellar = $_POST['beerCellared'];
$cellardate = $_POST['beerCellarDate'];
$photo = $_POST['beerPhoto'];
$char = $_POST['beerCharacter'];
$deep = $_POST['HighGrav'];
$vintage = $_POST['vintage'];
$notes = $_POST['notes'];  //both notes and thoughts

$sqlserving =  "UPDATE BeerServings
                SET Name2=:beerName,
                    beer_id=:beerid,
                    Serving=:CellarServing,
                    List=:List,
                    Location=:Location,
                    Review=:notes,
                    Date=:beerDrinkData,
                    _CellarDate=:beerCellarDate,
                    Vintage=:vintage
                WHERE id=:servid";

$sqlbeer = "UPDATE Beer
            SET Name=:beerName,
                BeerAdvocate=:beerURL,
                Characteristics=:beerCharacter,
                cellared=:beerCellared,
                ExtendedCellar=:HighGrav,
                CellarDate=:beerCellarDate,
                CellarServing=:CellarServing,
                photo_id=:beerPhoto,
                Notes=:notes
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
        $stmt->bindParam("Lists", $list);
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
