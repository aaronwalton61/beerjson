var serviceURL = "http://beertest.aaronwalton.org/services/";

$(document).on('pageshow', '#detailsPage', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getbeer.php?id='+id, displayBeer);
	$.getJSON(serviceURL + 'getservings.php?id='+id, displayServings);
});

function detailsPage(id) {

}

function displayBeer(data) {
	var beer = data.item;
	console.log(beer);
    console.log('Number of items in query: ' + beer.length);

    $('#notes').val(beer.Notes);
    $('#notes').textinput('refresh');
    $('#Photo').attr('src', 'services/getphoto.php?id=' + beer.photo_id);

    //$('#details li').remove();
    $('a#BeerName').text( beer.Name );
	$('#BeerName').attr('href', 'beeredit.html?id=' + beer.beer_id);
    $('#BeerAdvocate').attr('href', beer.BeerAdvocate);
	$('#BeerPhoto').text('Photo (id='+beer.photo_id+')');
    if (beer.cellared > 0) {
	    $('#CellarServ').attr('href', 'addserv.html?beer=' + beer.beer_id + '&cellar=yes');
        $('a#CellarServ').text(beer.cellared + ' beer(s) cellared ' + beer.CellarDate)
    }
	$('a#AddServ').attr('href', 'addserv.html?beer=' + beer.beer_id);
//    $('#details').listview('refresh');
}

function displayServings(data) {
    var servings = data.items;
    console.log('Number of items:' + servings.length)
    console.log(servings);

    $('#numServings').text('('+servings.length+')')
    $.each(servings, function(index, serving) {
       $('#swipeList').append('<li><a href="beeredit.html?serving=' + serving.id + '">'
            + serving.Date + ' ' + serving.Serving + '<span class="ui-li-aside">'
            + ListLocation(serving.List, serving.Location) + icons(serving.Serving)
            + '</span></a><a href="beeredit.html?serving=' + serving.id + '"></a></li>');
    });
    $('#swipeList').listview('refresh');
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
