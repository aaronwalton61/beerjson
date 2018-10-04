var serviceURL = "http://beertest.aaronwalton.org/services/";

var beers;
/*
$('#Lists').bind('pageinit', function(event) {
getbeerList();
});
*/
function getbeerList(listname) {
   console.log('#beerLists - getbeerList('+listname+')');
   $.getJSON(serviceURL + 'getlist.php?list=' + listname, function(data) {
      $('#beerLists li').remove();
      beers = data.items;
      console.log('Number of items in query: ' + beers.length);
      console.log(beers);
      $.each(beers, function(index, beer) {
          var icon ="";
        //   if ( beer.photo_id != "1" )
        //       icon = "<img title='Photo' src='images/Photo.png'>";
        //   if ( beer.BeerAdvocate !== "" && beer.BeerAdvocate !== null )
        //       icon = icon + "<img title='BA' src='images/BeerAdvocate.gif'>";
          $('#beerLists').append('<li><a href="beerdetails.html?serving=' + beer.beer_id + '">'
              + /*'<img src="images/bottle.png"/>' +*/ '<h4>' + beer.Name2 + '</h4><span class="ui-li-aside">'
              + icons(beer.Location + ' ' + beer.Serving + ' '+ beer.List) + icon + '</span><p>'
              + beer.Serving + ' at '+ beer.Location + ' on ' + beer.Date + '</p>' + /*'<span class="ui-li-count">' + beer.cellared +*/ '</span></a><a href="#" class="delete">Delete</a></li>');
      });
      $('#beerLists').listview('refresh');
   });
}
