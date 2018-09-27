var serviceURL = "http://beertest.aaronwalton.org/services/";

$(document).on('pageshow', '#editPage', function(event) {
	var id = getUrlVars()["id"];
	//	$.getJSON(serviceURL + 'getlocations.php?id='+id, displayLocations);
	//	$.getJSON(serviceURL + 'getlists.php?id='+id, displayLists);
	$.getJSON(serviceURL + 'getservingtypes.php', displayServingTypes);
	$.getJSON(serviceURL + 'getbeer.php?id='+id, editBeer);
	//	$.getJSON(serviceURL + 'getservings.php?id='+id, displayServings);
});

function editBeer(data) {
	var beer = data.item;
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
	// below doesn't work setting the Serving in the SelectMenu
	$('#CellarServing').children('option[value="'+ beer.CellarServing +'"]').attr('selected', true);
	$('#CellarServing').select('refresh');
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
	var servingtypes = data.items;
	console.log('displayServingTypes')
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
