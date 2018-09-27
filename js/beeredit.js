var serviceURL = "http://beertest.aaronwalton.org/services/";

$(document).on('pageshow', '#editPage', function(event) {
	var id = getUrlVars()["id"];
    var serving = getUrlVars()["serving"];
	//	$.getJSON(serviceURL + 'getlocations.php?id='+id, displayLocations);
	//	$.getJSON(serviceURL + 'getlists.php?id='+id, displayLists);
    //	$.getJSON(serviceURL + 'getservings.php?id='+id, displayServings);
    if (id !== null) {
	    $.getJSON(serviceURL + 'getservingtypes.php', displayServingTypes);
	    $.getJSON(serviceURL + 'getbeer.php?id='+id, editBeer);
    }
    if (serving !== null) {

    }
});

function editBeer(data) {
    console.log('(function)* editBeer()')
	var beer = data.item;
    console.log('Number of items in query: ' + beers.length);
	console.log(beer);

	$('#beerPic').attr('src', 'images/hooters.png');
	$('#beerid').val(beer.beer_id);
	$('#beerName').val(beer.Name);
	$('#beerURL').val(beer.BeerAdvocate);
	$('#beerCharacter').val(beer.Characteristics);
	$('#beerCellared').val(beer.cellared);
	$('#beerCellarDate').val(beer.CellarDate);
	$('#beerPhoto').val(beer.photo_id)

 	if (beer.ExtendedCellar == "1")
	 	$('#flipswitch-HighGrav').prop("checked", true);
 	else
	 	$('#flipswitch-HighGrav').prop("checked", false);
	$('#flipswitch-HighGrav').flipswitch('refresh');

	$('#notes').val(beer.Notes);
	$('#notes').textinput('refresh');
	// below sets the <option> setting to the CellarServing but not the Serving in the Select
	//$('#CellarServing').children('option[value="'+ beer.CellarServing +'"]').attr('selected', true); //sets internal
    //$('#CellarServing option[value="'+beer.CellarServing+'"]').attr('selected', 'selected');//works internal
    //$('#CellarServing option[value="'+beer.CellarServing+'"]').prop('selected', true);//works internal
    //$('#CellarServing').val(beer.CellarServing); // works internal
    $('#CellarServing').select('refresh');
    $('#CellarServing').trigger('chosen:updated');
    //$('#CellarServing').val(beer.CellarServing);
    //$('#CellarServing > [value=' + beer.CellarServing + ']').attr('selected', 'true');
}

// function displayServings(data) {
//     var servings = data.items;
//     console.log(servings);
//
//     $('#servings').text(servings.length)
//     $.each(servings, function(index, serving) {
//        $('#swipeList').append('<li><a href="viewedit.html?id=' + serving.id + '"><h3>' + serving.Date +
//           ' ' + serving.Location + icons(serving.Serving) + '</h3></a></li>');
//     });
//     $('#swipeList').listview('refresh');
// }

// function displayLocations(data) {
//   var locations = data.items;
//   console.log(locations);
// 	$.each(locations, function(index, location) {
// 		$('Location').append('<option value="' + list.Name + '">' + list.Name + '</option>');
// 	});
// }
//
// function displayLists(data) {
//   var lists = data.items;
//   console.log(lists);
// 	$.each(lists, function(index, list) {
// 		$('list').append('<option value="' + list.Name + '">' + list.Name + '</option>');
// 	});
// }

function displayServingTypes(data) {
    console.log('(function)* displayServingTypes()')
	var servingtypes = data.items;
	console.log('Number of Items: ' + servingtypes.length)
	console.log(servingtypes);

	$.each(servingtypes, function(index, servingtype) {
		$('#CellarServing').append('<option value="' + servingtype.Name + '">' + servingtype.Name + '</option>');
	});
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
