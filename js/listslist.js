var serviceURL = "http://beertest.aaronwalton.org/services/";

var beers;

$('#Lists').bind('pageinit', function(event) {
	getbeerLists();
});

function getbeerLists() {
        console.log('#Lists - getbeerLists()');
    	$.getJSON(serviceURL + 'getlists.php', function(data) {
		$('#beerLists li').remove();
		beers = data.items;

		$.each(beers, function(index, beer) {
			$('#beerLists').append('<li><a href=javascript:getbeerList("' + beer.Name + '")><img src=images\\' + beer.Graphic + '><h2>&nbsp;' + beer.Name + '</h2><span class="ui-li-count">00</span></a></li>');
		});
		$('#beerLists').listview('refresh');
	});
}
