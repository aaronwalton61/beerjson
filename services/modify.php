<?php
include 'config.php';

// get all the form contents
$beerid = $_POST['beerid'];
$servingid = $_POST['servid'];

$beername = str_replace("'", "''", $_POST['beerName']);
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
$check = $_POST['HighGrav'];
$vintage = $_POST['vintage'];
$notes = $_POST['notes'];  //both notes and thoughts

$deep = $_POST['deep'];


$sqlserving =  "UPDATE BeerServings b
                SET b.Name2=:beerName,
                    b.Serving=:CellarServing,
                    b.List=:List,
                    b.Location=:Location,
                    b.Review=:notes,
                    b.Date=:beerDrinkData,
                    b._CellarDate=:beerCellarDate,
                    b.Vintage=:vintage;
                WHERE b.id=:servid";

$sqlbeer = "UPDATE Beer b
            SET b.Name=:beerName,
                b.BeerAdvocate=:beerURL,
                b.Characteristics=:beerCharacter,
                b.cellared=:beerCellared,
                b.ExtendedCellar=:HighGrav,
                b.CellarDate=:beerCellarDate,
                b.CellarServing=:CellarServing,
                b.photo_id=:beerPhoto,
                b.Notes=:notes
            WHERE b.beer_id=:beerid";

if ( $beerid != "" || $servingid != "" )
{
    if ( $beerid != "" )
        $query = "UPDATE Beer SET Name='{$beername}'";
    else
        $query = "UPDATE BeerServings SET Name2='{$beername}'";

    //Query of Beer to Edit
    if ( $url != "" )
       $query = $query . ", BeerAdvocate='{$url}'";
    if ( $thoughts != "" )
       $query = $query . ", Review='{$thoughts}'";
    if ( $vintage != "" )
       $query = $query . ", Vintage='{$vintage}'";
    if ( $date !="" )
       $query = $query . ", Date='{$date}'";
    if ( $serving !="" )
    {
       if ( $beerid != "" )
          $query = $query . ", CellarServing='{$serving}'";
       else
          $query = $query . ", Serving='{$serving}'";
    }
    if ( $location !="" )
       $query = $query . ", Location='{$location}'";

    if ( $char !="" )
       $query = $query . ", Characteristics='{$char}'";

    if ( $list !="" )
       $query = $query . ", List='{$list}'";

    if ( $cellar !="" )
       $query = $query . ", cellared='{$cellar}'";

    if ( $deep !="" )
       $query = $query . ", ExtendedCellar='{$deep}'";

    if ( $cellardate !="" )
       $query = $query . ", CellarDate='{$cellardate}'";

    if ( $photo != "" )
       $query = $query . ", photo_id='{$photo}'";

    if ( $notes != "" )
       $query = $query . ", Notes='{$notes}'";

    if ( $beerid != "" )
        $query = $query . " WHERE beer_id='{$beerid}'";
    else
        $query = $query . " WHERE id='{$servingid}'";


try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->prepare($sql);
	$stmt->bindParam("serving", $serving);
	$stmt->execute();
	$data = $stmt->fetchObject();
	$dbh = null;
	echo '{"item":'. json_encode($data) .'}';
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}';
}
?>
