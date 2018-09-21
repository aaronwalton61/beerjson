var serviceURL = "http://beertest.aaronwalton.org/services/";

var beers;
/*
$('#Lists').bind('pageinit', function(event) {
	getbeerList();
});
*/
function getbeerList(listname) {
        console.log(' - getbeerList('+listname+')');
    	$.getJSON(serviceURL + 'getlist.php?list=' + listname, function(data) {
		$('#beerLists li').remove();
		beers = data.items;

		$.each(beers, function(index, beer) {
      if ( beer.photo_id != "1" )
          icon = "<img title='Photo' src='images/Photo.png'>";
      if ( beer.BeerAdvocate !== "" && beer.BeerAdvocate !== null )
          icon = icon + "<img title='BA' src='images/BeerAdvocate.gif'>";
			$('#beerLists').append('<li><a href="beerdetails.html?id=' + beer.beer_id + '">'
          + '<img src="images/bottle.png"/>' + '<h4>' + beer.Name + '</h4><span class="ui-li-aside">'
  				+ icons(beer.Characteristics + ' ' + beer.CellarServing) + icon + '</span><p>'
  				+ beer.cellared + ' cellared on: ' + beer.CellarDate + ' in ' + beer.CellarServing
  				+	' ' + beer.BeerAdvocate + '</p>' + '<span class="ui-li-count">' + beer.cellared + '</span></a></li>');
		});
		$('#beerLists').listview('refresh');
	});
}
