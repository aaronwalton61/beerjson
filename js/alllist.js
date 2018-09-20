var serviceURL = "http://beertest.aaronwalton.org/services/";

var beers;

$('#Beers').bind('pageinit', function(event) {
	getAllList();
});

function getAllList() {
    console.log('#Beers - getAllList()');
	$.getJSON(serviceURL + 'getbeers.php', function(data) {
		$('#beerAll li').remove();
		beers = data.items;
		$.each(beers, function(index, beer) {
			$('#beerAll').append('<li><a href="beerdetails.html?id=' + beer.beer_id + '">'
				+ '<img src="images/bottle.png"/>' + '<h4>' + beer.Name + '</h4><span class="ui-li-aside">' 
				+ icons(beer.Characteristics + ' ' + beer.CellarServing) + icon + '</span><p>'
				+ beer.cellared + ' cellared on: ' + beer.CellarDate + ' in ' + beer.CellarServing
				+	' ' + beer.BeerAdvocate + '</p>' + '<span class="ui-li-count">' + beer.cellared + '</span></a></li>');
		});
		$('#beerAll').listview('refresh');
	});
}
