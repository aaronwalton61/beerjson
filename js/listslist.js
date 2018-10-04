var serviceURL = "http://beertest.aaronwalton.org/services/";

var beers;

$('#Lists').bind('pageinit', function(event) {
	getbeerLists();
});

function getbeerLists() {
        console.log('#Lists - getbeerLists()');
    	$.getJSON(serviceURL + 'getlists.php', function(data) {
		$('#beerLists li').remove();
		lists = data.items;

		$.each(lists, function(index, list) {
			$('#beerLists').append('<li><a href=javascript:getbeerList("' + list.Name
                + '")><img src=images\\' + list.Graphic + '><h2>&nbsp;' + list.Name
                + '</h2><span class="ui-li-count">' + list.num + '</span></a></li>');
		});
		$('#beerLists').listview('refresh');
	});
}
