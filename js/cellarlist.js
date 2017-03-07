var serviceURL = "http://beertest.aaronwalton.org/services/";

var beers;

$('#Cellar').bind('pageinit', function(event) {
	getCellarList();
});

function getCellarList() {
	$.getJSON(serviceURL + 'getcellar.php', function(data) {
		$('#beerCellar li').remove();
		beers = data.items;
		$.each(beers, function(index, beer) {
			$('#beerCellar').append('<li><a href="beerdetails.html?id=' + beer.beer_id + '">' +
					'<img src="images/hooters.png"/>' +
					'<h4>' + beer.Name + ' ' + beer.CellarDate + '</h4>' +
					'<p>' + beer.BeerAdvocate + '</p>' +
					'<span class="ui-li-count">' + beer.cellared + '</span></a></li>');
		});
		$('#beerCellar').listview('refresh');
	});
}