var serviceURL = "http://beertest.aaronwalton.org/services/";

var beers;

$('#Deep').bind('pageinit', function(event) {
	getbeerDeep();
});

function getbeerDeep() {
	console.log('#Deep - getbeerDeep()');
	$.getJSON(serviceURL + 'getdeep.php', function(data) {
		$('#beerDeep li').remove();
		beers = data.items;
        console.log('Number of items in query: ' + beers.length);
		console.log(beers);
		$.each(beers, function(index, beer) {
            var icon = "";
            if ( beer.photo_id != "1" )
                icon = "<img title='Photo' src='images/Photo.png'>";
            if ( beer.BeerAdvocate !== "" && beer.BeerAdvocate !== null )
                icon = icon + "<img title='BA' src='images/BeerAdvocate.gif'>";
			$('#beerDeep').append('<li><a href="beerdetails.html?id=' + beer.beer_id + '">'
				+ /*'<img src="images/bottle.png"/>' +*/ '<h4>' + beer.Name + '</h4><span class="ui-li-aside">'
				+ icons(beer.Characteristics + ' ' + beer.CellarServing) + icon + '&nbsp;&nbsp;</span><p>'
				+ beer.cellared + ' cellared on: ' + beer.CellarDate + ' in ' + beer.CellarServing
				+	' ' + beer.BeerAdvocate + '</p>' + '<span class="ui-li-count">' + beer.cellared + '</span></a></li>');
		});
		$('#beerDeep').listview('refresh');
	});
}
