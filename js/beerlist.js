var serviceURL = "http://beertest.aaronwalton.org/services/";

var beers;

$('#Beers').bind('pageinit', function(event) {
	getBeerList();
});

function getBeerList() {
	$.getJSON(serviceURL + 'getbeers.php', function(data) {
		$('#beerList li').remove();
		beers = data.items;
		$.each(beers, function(index, beer) {
			$('#beerList').append('<li><a href="beerdetails.php?id=' + beer.beer_id + '">' +
					'<img src="images/hooters.png"/>' +
					'<h4>' + beer.Name + '</h4><p> cellared on: ' + beer.CellarDate + 
                                        ' in ' + beer.CellarServing +
					' ' + beer.BeerAdvocate + '</p>' +
					'<span class="ui-li-count">' + beer.cellared + '</span></a></li>');
		});
		$('#beerList').listview('refresh');
	});
}