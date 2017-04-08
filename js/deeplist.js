var serviceURL = "http://beertest.aaronwalton.org/services/";

var beers;

$('#Deep').bind('pageinit', function(event) {
	getbeerDeep();
});

function getbeerDeep() {
	$.getJSON(serviceURL + 'getdeep.php', function(data) {
		$('#beerDeep li').remove();
		beers = data.items;
		$.each(beers, function(index, beer) {
			$('#beerDeep').append('<li><a href="beerdetails.html?id=' + beer.beer_id + '">' +
					'<img src="images/hooters.png"/>' +
					'<h4>' + beer.Name + '</h4><p>' + beer.cellared + ' cellared on: ' + beer.CellarDate + 
                                        ' in ' + beer.CellarServing +
					' ' + beer.BeerAdvocate + '</p>' +
					'<span class="ui-li-count">' + beer.cellared + '</span></a></li>');
		});
		$('#beerDeep').listview('refresh');
	});
}