var serviceURL = "http://beertest.aaronwalton.org/services/";

var beers;

$('#Cellar').bind('pageinit', function(event) {
	getCellarList();
});

function getCellarList() {
    console.log('#Cellar - getCellarList()');
	$.getJSON(serviceURL + 'getcellar.php', function(data) {
		$('#beerCellar li').remove();
		beers = data.items;
		$.each(beers, function(index, beer) {
			$('#beerCellar').append('<li><a href="beerdetails.php?id=' + beer.beer_id + '">' +
					'<img src="images/bottle.png"/>' +
					'<h4>' + beer.Name + '</h4><p>' + beer.cellared + ' cellared on: ' + beer.CellarDate + 
                                        ' in ' + beer.CellarServing +
					' ' + beer.BeerAdvocate + '</p>' +
					'<span class="ui-li-count">' + beer.cellared + '</span></a></li>');
		});
		$('#beerCellar').listview('refresh');
	});
}