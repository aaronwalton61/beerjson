$('#detailsPage').on('pagecontainershow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getbeer.php?id='+id, displayBeer);
});

function displayBeer(data) {
	var beer = data.item;
	var test = 'help';
	$('#beerPic').attr('src', 'images/hooters.png');
	$('#beerName').text(beer.Name);
	$('#beerCharacter').text(beer.Characteristics);
	if (beer.cellared>0) {
		$('#beerCellar').text(beer.cellered + ' ' + beer.CellarServing);
		$('#beerCellarDate').text(beer.CellarDate);
	}
	if (beer.BeerAdvocate) {
		$('#actionList').append('<li><a href="beer.BeerAdvocate"><h3>Beer Advocate</h3>' +
				'<p>Link to Beer on BeerAdvocate.com</p></a></li>');
	}
	$('#actionList').listview('refresh');
	
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
