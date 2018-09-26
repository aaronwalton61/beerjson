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
			var icon ="";
			if ( beer.photo_id != "1" )
          icon = "<img title='Photo' src='images/Photo.png'>";
      if ( beer.BeerAdvocate !== "" && beer.BeerAdvocate !== null )
          icon = icon + "<img title='BA' src='images/BeerAdvocate.gif'>";
			$('#beerAll').append('<li><a href="#beerDetails?id=' + beer.beer_id + '">'
				+ '<img src="images/bottle.png"/>' + '<h4>' + beer.Name + '</h4><span class="ui-li-aside">'
				+ icons(beer.Characteristics + ' ' + beer.CellarServing) + icon + '</span><p>'
				+ beer.cellared + ' cellared on: ' + beer.CellarDate + ' in ' + beer.CellarServing
				+	' ' + beer.BeerAdvocate + '</p>' + '<span class="ui-li-count">' + beer.cellared + '</span></a></li>');
		});
		$('#beerAll').listview('refresh');
	});
}
