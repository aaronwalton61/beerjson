var serviceURL = "http://beertest.aaronwalton.org/services/";

var beers;

$('#Cellar').bind('pageinit', function(event) {
	getCellarList();
});

function getCellarList() {
	var icon;
	console.log('#Cellar - getCellarList()');
	$.getJSON(serviceURL + 'getcellar.php', function(data) {
		$('#beerCellar li').remove();
		beers = data.items;
		$.each(beers, function(index, beer) {
			if ( beer.photo_id != "1" )
				icon = "<img title='Photo' src='images/Photo.png'>";
			if ( beer.BeerAdvocate !== "" && beer.BeerAdvocate !== null )
				icon = icon + "<img title='BA' src='images/BeerAdvocate.gif'>";
			$('#beerCellar').append('<li><a href="beerdetails.html?id=' + beer.beer_id + '">'
				+ '<img src="images/bottle.png"/>' + '<h4>' + beer.Name + '</h4><span class="ui-li-aside">'
				+ icons(beer.Characteristics + ' ' + beer.CellarServing) + icon + '</span><p>'
				+ beer.cellared + ' cellared on: ' + beer.CellarDate + ' in ' + beer.CellarServing
				+	' ' + beer.BeerAdvocate + '</p>' + '<span class="ui-li-count">' + beer.cellared + '</span></a></li>');
		});
		$('#beerCellar').listview('refresh');
	});
}
