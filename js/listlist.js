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
			$('#beerLists').append('<li><a href="beerdetails.html?id=' + beer.beer_id + '">' +
					'<img src="images/bottle.png"/>' +
					'<h4>' + beer.Name2 + '</h4><p> Drank at: ' + beer.Location + ' in ' + beer.Serving +
					' on ' + beer.Date + '</p>' +
					'<span class="ui-li-count">' + beer.cellared + '</span></a></li>');
		});
		$('#beerLists').listview('refresh');
	});
}
