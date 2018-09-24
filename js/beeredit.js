var serviceURL = "http://beertest.aaronwalton.org/services/";

$(document).on('pageshow', '#editPage', function(event) {
	var id = getUrlVars()["id"];
//	$.getJSON(serviceURL + 'getlocations.php?id='+id, displayLocations);
//	$.getJSON(serviceURL + 'getlists.php?id='+id, displayLists);
	$.getJSON(serviceURL + 'getservingtypess.php?id='+id, displayServingTypes);

	$.getJSON(serviceURL + 'getbeer.php?id='+id, displayBeer);
//	$.getJSON(serviceURL + 'getservings.php?id='+id, displayServings);
});

function displayBeer(data) {
    var beer = data.item;
    console.log(beer);

    $('#beerPic').attr('src', 'images/hooters.png');
		$('#beerid').textinput(beer.beer_id);
    $('#beerName').text(beer.Name);
		$('#beerURL').text(beer.BeerAdvocate);
//    if (beer.BeerAdvocate) {
//       $('#actionList').append('<li><a href="' + beer.BeerAdvocate + '"><h3>Beer Advocate</h3>' +
//				'</a></li>');
//    }
//    $('#beerCharacter').append(icons(beer.Characteristics + ' ' + beer.CellarServing));
		$('beerCharacter').textinput(beer.Characteristics);
//    if (beer.cellared > 0) {
       $('#beerCellared').text(beer.cellared);
       $('#beerCellarDate').text(beer.CellarDate);
			 // need to add ServingTypoes in dropdown and then
       $('#beerServ').text('This beer is cellared in ' + beer.CellarServing);
//    }
		if (beer.ExtendedCellar == "1")
    	 $('#flipswitch-HighGrav').flipswitch("Yes");
	  else {
			 $('#flipswitch-HighGrav').flipswitch("No");
		}
		$('#flipswitch-HighGrav').flipswitch('refresh');

    if (beer.photo_id > 1) {
        $('#actionList').append('<li>Photo_Id</h3> is ' + beer.photo_id + '</li>');
    }
    $('#actionList').listview('refresh');

    $('#notes').textarea(beer.Notes);
    $('#notes').textinput('refresh');
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
  console.log(servingtypes);

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
