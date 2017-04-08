var serviceURL = "http://beertest.aaronwalton.org/services/";

var beers;

$('#Last100').bind('pageinit', function(event) {
	getLastList();
});

function getLastList() {
	$.getJSON(serviceURL + 'getlast.php', function(data) {
		$('#beerLast li').remove();
		beers = data.items;
		$.each(beers, function(index, beer) {
			$('#beerLast').append('<li><a href="beerdetails.html?id=' + beer.beer_id + '">' +
					'<img src="images/hooters.png"/>' +
					'<h4>' + beer.Name + '</h4><p> cellared on: ' + beer.CellarDate + 
                                        ' in ' + beer.CellarServing +
					' ' + beer.BeerAdvocate + '</p>' +
					'<span class="ui-li-count">' + beer.cellared + '</span></a></li>');
		});
		$('#beerLast').listview('refresh');
	});
}