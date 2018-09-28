var serviceURL = "http://beertest.aaronwalton.org/services/";
    var id;
    var serving;

$(document).on('pageshow', '#editPage', function(event) {
    console.log('(pageshow)* editPage()')
    id = getUrlVars()["id"];
    serving = getUrlVars()["serving"];
    //    	$.getJSON(serviceURL + 'getservings.php?id='+id, displayServings);
    if (id !== undefined) {
        $("#Serving").remove();
        $("#vintage").remove();
        $("#Location").remove();
        $("#List").remove();
        $('#beerDrinkDate').remove();
//        $("").remove();
        $.getJSON(serviceURL + 'getservingtypes.php', displayServingTypes);
        $.getJSON(serviceURL + 'getbeer.php?id='+id, editBeer);
    }
    if (serving !== undefined) {
        $("#beerURL").remove();
        $("#beerCharacter").remove();
        $("#beerCellared").remove();
        $("#CellarServing").remove();
        $("#beerPhoto").remove();
        $("flipswitch-HighGrav").remove();
//        $("").remove();
        $.getJSON(serviceURL + 'getlocations.php', displayLocations);
        $.getJSON(serviceURL + 'getlists.php', displayLists);
        $.getJSON(serviceURL + 'getservingtypes.php', displayServingTypes);
        $.getJSON(serviceURL + 'getserving.php?serving='+serving, editServing);
    }
});

$(document).ready(function() {
    $('#edit').submit(function(e){
        e.preventDefault();
        console.log('Submit ' + $('input#beerid').attr('name'));
    });
});

function editBeer(data) {
    console.log('(function)* editBeer()')
    var beer = data.item;
    console.log('Number of items in query: ' + beers.length);
    console.log(beer);

    $('input#beerid').val(beer.beer_id);
    $('input#beerid').attr('name', 'beer')
    $('input#beerName').val(beer.Name);
    $('input#beerURL').val(beer.BeerAdvocate);
    $('input#beerCharacter').val(beer.Characteristics);
    $('input#beerCellared').val(beer.cellared);
    $('input#beerPhoto').val(beer.photo_id)
    $('input#beerCellarDate').val(beer.CellarDate);

    if (beer.ExtendedCellar == "1")
        $('#flipswitch-HighGrav').prop("checked", true);
    else {
        $('#flipswitch-HighGrav').prop("checked", false);
        $('#flipswitch-HighGrav').flipswitch('refresh');
    }

    $('#notes').val(beer.Notes);
    $('#notes').textinput('refresh');

    // below sets the <option> setting to the CellarServing but not the Serving in the Select
    //$('#CellarServing').children('option[value="'+ beer.CellarServing +'"]').attr('selected', true); //sets internal
    //$('#CellarServing option[value="'+beer.CellarServing+'"]').attr('selected', 'selected');//works internal
    //$('#CellarServing option[value="'+beer.CellarServing+'"]').prop('selected', true);//works internal
    $('select#CellarServing').val(beer.CellarServing); // works internal
    $('select#CellarServing').select('refresh');
    $('select#CellarServing').trigger('chosen:updated');
    //$('#CellarServing').val(beer.CellarServing);
    //$('#CellarServing > [value=' + beer.CellarServing + ']').attr('selected', 'true');
}

function editServing(data) {
    console.log('(function)* editServing()')
    var serving = data.item;
    console.log('Number of items in query: ' + serving.length);
    console.log(serving);

    $('input#beerid').val(serving.id);
    $('input#beerid').attr('name', 'serving')
    $('input#beerName').val(serving.Name2);
    $('input#beerCellarDate').val(serving._CellarDate);
    $('input#beerDrinkDate').val(serving.Date);
    $('select#Serving').val(serving.Serving); // works internal
    $('select#Serving option[value="'+serving.Serving+'"]').attr('selected', 'selected');//works internal
    $('select#List').val(serving.List); // works internal
    $('select#List option[value="'+serving.List+'"]').attr('selected', 'selected');//works internal
    $('select#Location').val(serving.Location); // works internal
    $('select#Location option[value="'+serving.Location+'"]').attr('selected', 'selected');//works internal
    $('#notes').val(serving.Review);
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

function displayLocations(data) {
    console.log('(function)* displayLocations()')
    var locations = data.items;
    console.log('Number of Items: ' + locations.length)
    console.log(locations);

    $.each(locations, function(index, location) {
        $('select#Location').append('<option value="' + location.Name + '">' + location.Name + '</option>');
    });
}

function displayLists(data) {
    console.log('(function)* displayLists()')
    var lists = data.items;
    console.log('Number of Items: ' + lists.length)
    console.log(lists);

    $.each(lists, function(index, list) {
        $('select#List').append('<option value="' + list.Name + '">' + list.Name + '</option>');
    });
}

function displayServingTypes(data) {
    console.log('(function)* displayServingTypes()')
    var servingtypes = data.items;
    console.log('Number of Items: ' + servingtypes.length)
    console.log(servingtypes);

    $.each(servingtypes, function(index, servingtype) {
        if (id !== undefined)
            $('select#CellarServing').append('<option value="' + servingtype.Name + '">' + servingtype.Name + '</option>');
        else
            $('select#Serving').append('<option value="' + servingtype.Name + '">' + servingtype.Name + '</option>');
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
