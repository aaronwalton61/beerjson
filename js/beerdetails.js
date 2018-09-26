var serviceURL = "http://beertest.aaronwalton.org/services/";

$(document).on('pageshow', '#detailsPage', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getbeer.php?id='+id, displayBeer);
	$.getJSON(serviceURL + 'getservings.php?id='+id, displayServings);
});

function displayBeer(data) {
	var beer = data.item;
	console.log(beer);

    $('#notes').val(beer.Notes);
//    $('#notes').textinput('refresh');

    //$('#details li').remove();
    $('a#BeerName.ui-btn').text( beer.Name );
	$('#BeerName.ui-btn').attr('href', 'beeredit.html?id="' + beer.beerid);
    $('#BeerAdvocate.ui-btn').attr('href', beer.BeerAdvocate);
	$('a#BeerPhoto').text('Photo (id='+beer.photo_id+')');
	// $('#details').append('<li data-role="listdivider">Cellar</li>');
     if (beer.cellared > 0)
	    $('#CellarServ.ui-btn').attr('href', 'addserv.html?beer='+beer.beerid+'&cellar=yes');
        $('a#CellarServ.ui-btn').text(beer.cellared+' beer(s) cellared '+beer.CellarDate)
        //<a href="addserv.php?beer='+beer.beerid+'">Add Serving</a></li>');
	$('a#AddServ.ui-btn').attr('href', 'addserv.html?beer=' + beer.beerid);
//    $('#details').listview('refresh');
}

function displayServings(data) {
    var servings = data.items;
    console.log(servings);

    $('#servings').text(servings.length)
    $.each(servings, function(index, serving) {
       $('#swipeList').append('<li><a href="beeredit.html?serving=' + serving.id + '">' + serving.Date +
          ' ' + serving.Location +'<span class="ui-li-aside">'+ icons(serving.Serving) + '</span></a><a href="edit.php?serving='+serving.id+'">Edit Serving</a></li>');
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
