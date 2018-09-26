var serviceURL = "http://beertest.aaronwalton.org/services/";

var beers;

$('#Last100').bind('pageinit', function(event) {
	getLastList();
});

function getLastList() {
	var icon;
	console.log('#Last100 - getLastList()');
	$.getJSON(serviceURL + 'getlast.php', function(data) {
		$('#beerLast li').remove();
		beers = data.items;
		console.log(beers);
		$.each(beers, function(index, beer) {
			var icon ="";
			if ( beer.photo_id != "1" )
          		icon = "<img title='Photo' src='images/Photo.png'>";
      		if ( beer.BeerAdvocate !== "" && beer.BeerAdvocate !== null )
          		icon = icon + "<img title='BA' src='images/BeerAdvocate.gif'>";
			$('#beerLast').append('<li><a href="beerdetails.html?id=' + beer.beer_id + '">' +
				+ '<img src="images/bottle.png"/>' + '<h4>' + beer.Name + '</h4><span class="ui-li-aside">'
				+ icons(beer.Characteristics + ' ' + beer.CellarServing) + icon + '</span><p>'
				+ beer.cellared + ' cellared on: ' + beer.CellarDate + ' in ' + beer.CellarServing
				+	' ' + beer.BeerAdvocate + '</p>' + '<span class="ui-li-count">' + beer.cellared + '</span></a><a href='#' class='delete'>Delete</a></li>');
		});
		$('#beerLast').listview('refresh');
	});
}
