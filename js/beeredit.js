var serviceURL = "http://beertest.aaronwalton.org/services/";
    var id;
    var serving;
    var beer;
    var cellar;
//var $loading = $('#loading');

$(document).on('pageshow', '#editPage', function(event) {
    console.log('(pageshow)* editPage()')
    id = getUrlVars()["id"];
    serving = getUrlVars()["serving"];
    beer = getUrlVars()["beer"];
    cellar = getUrlVars()["cellar"];

    if (id !== undefined) {
        $("#Serving").remove();
        $("#vintage").remove();
        $("#Location").remove();
        $("#List").remove();
        $('#beerDrinkDate').remove();
//        $("").remove();
        $.getJSON(serviceURL + 'getservingtypes.php', displayServingTypes);
        if (id !== "0") {
            $.getJSON(serviceURL + 'getbeer.php?id='+id, editBeer);
        }
        else
        {
            // this is for NEW beer.
            addBeer();
            $("#buttonDel").remove();
        }
    }
    if (serving !== undefined) {
        $("#beerURL").remove();
        $("#beerCharacter").remove();
        $("#beerCellared").remove();
        $("#CellarServing").remove();
        $("#beerPhoto").remove();
        $("#HighGrav").remove();
//        $("").remove();
        $.getJSON(serviceURL + 'getlocations.php', displayLocations);
        $.getJSON(serviceURL + 'getlists.php', displayLists);
        $.getJSON(serviceURL + 'getservingtypes.php', displayServingTypes);
        if (serving !=="0") {
            $.getJSON(serviceURL + 'getserving.php?serving='+serving, editServing);
        }
        else
        {
            // this is for NEW beer serving.
            $.getJSON(serviceURL + 'getbeer.php?id='+beer, addServing);
            $("#buttonDel").remove();
        }
    }
});

$(document).on('pageshow', '#editPage',function() {
    var $form = $('#edit');
    $form.submit(function(e){
        console.log('Submit - beerid=' + $('input#beerid').val() + ' servid=' + $('input#servid').val());
//        $form.hide();
        console.log($form.serialize());
        $.ajax({
            type: 'POST',
            url: serviceURL+'modify.php',
            data: $form.serialize(),
            // beforeSend: function() {
            //     $loading.show();
            // },
            // complete: function() {
            //     $loading.hide();
            // },
            success: function(data) {
                console.log('Modify Done');
                var dat = data.items;
                console.log(dat);
            },
            error: function(obj, err, e) {
                console.log('Fail: ' + err + ' ' + e);
                console.log('Object ------>');
                console.log(obj);
                console.log('Exception --------->');
                console.log(e);
            },
            conplete: function(obj, status) {
                console.log('Completion status: ' + status);
                console.log('Object  ------>');
                console.log(obj);
            }
        });
        e.preventDefault();
        return false;
    });
});

// section here is for adding a Beer or a Serving

function addBeer() {
    console.log('addBeer - ');
    $('input#beerid').val(0);
    $('h1 , #editPage').val('Add Beer');    ///NOT WORKING
}

function addServing(data) {
    console.log('addServing - ');
    var beer = data.item;
    console.log(beer);
    // this will become Name2
    $('input#beerName').val(beer.Name);
    $('input#beerid').val(beer.id);
    $('input#servid').val(0);
    $('label#notes').val('Review:')   //NOT WORKING
    $('#editPage h1').val('Add Serving');   //NOT WORKING
}

function editBeer(data) {
    console.log('(function)* editBeer()')
    var beer = data.item;
    console.log('Number of items in query: ' + beers.length);
    console.log(beer);

    $('input#beerid').val(beer.beer_id);
    $('input#beerName').val(beer.Name);
    $('input#beerURL').val(beer.BeerAdvocate);
    $('input#beerCharacter').val(beer.Characteristics);
    $('input#beerCellared').val(beer.cellared);
    $('input#beerPhoto').val(beer.photo_id)
    $('input#beerCellarDate').val(beer.CellarDate);

    if (beer.ExtendedCellar == "1")
        $('#HighGrav').prop("checked", true);
    else
        $('#HighGrav').prop("checked", false);

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

    $('input#servid').val(serving.id);
    $('input#beerid').val(serving.beer_id);
    $('input#beerName').val(serving.Name2);
    $('input#beerCellarDate').val(serving._CellarDate);
    $('input#beerDrinkDate').val(serving.Date);
    $('input#vintage').val(serving.Vintage);
    $('select#Serving').val(serving.Serving); // works internal
    $('select#Serving option[value="'+serving.Serving+'"]').attr('selected', 'selected');//works internal
    $('select#List').val(serving.List); // works internal
    $('select#List option[value="'+serving.List+'"]').attr('selected', 'selected');//works internal
    $('select#Location').val(serving.Location); // works internal
    $('select#Location option[value="'+serving.Location+'"]').attr('selected', 'selected');//works internal
    $('#notes').val(serving.Review);
    $('form#edit').attr('title', 'Edit Serving');
//    $('#notes').textinput('refresh');
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
    var locations = data.items;
    console.log('(function)* displayLocations()  Number of Items: ' + locations.length)
    console.log(locations);

    $.each(locations, function(index, location) {
        $('select#Location').append('<option value="' + location.Name + '">' + location.Name + '</option>');
    });
}

function displayLists(data) {
    var lists = data.items;
    console.log('(function)* displayLists()  Number of Items: ' + lists.length)
    console.log(lists);

    $.each(lists, function(index, list) {
        $('select#List').append('<option value="' + list.Name + '">' + list.Name + '</option>');
    });
}

function displayServingTypes(data) {
    var servingtypes = data.items;
    console.log('(function)* displayServingTypes()  Number of Items: ' + servingtypes.length)
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
