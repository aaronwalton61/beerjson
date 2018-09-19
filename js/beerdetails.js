var serviceURL = "http://beertest.aaronwalton.org/services/";

$(document).on('pageshow', '#detailsPage', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getbeer.php?id='+id, displayBeer);
	$.getJSON(serviceURL + 'getservings.php?id='+id, displayServings);
});

function displayBeer(data) {
    var beer = data.item;
    console.log(beer);

    $('#beerPic').attr('src', 'images/hooters.png');
    $('#beerName').text(beer.Name);
    $('#beerCharacter').text(beer.Characteristics);
    if (beer.cellared > 0) {
       $('#beerCellared').text(beer.cellared);
       $('#beerCellar').text(beer.CellarServing);
       $('#beerCellarDate').text(beer.CellarDate);
    }
    if (beer.BeerAdvocate) {
       $('#actionList').append('<li><a href="' + beer.BeerAdvocate + '"><h3>Beer Advocate</h3>' +
				'</a></li>');
    }
    $('#actionList').listview('refresh');
}

function displayServings(data) {
    var servings = data.items;
    console.log(servings);

    $.each(servings, function(index, serving) {
       $('#swipeList').append('<li><a href="viewedit.html?id=' + serving.id + '"><h3>' + serving.Date + 
                                ' ' + serving.Serving + ' ' + serving.List + 
                                ' ' + serving.Location + '</h3></a></li>');
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
