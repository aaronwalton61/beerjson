<!DOCTYPE HTML>
<html>
<head>
</head>
    
<body>

<div id="detailsPage" data-role="page" data-add-back-btn="true">
   <div data-role="header">
      <h1>Beer Details</h1>
   </div>

   <div data-role="content"> 
  	<img id="beerPic"/>
	<div id="beerDetails">
           <h3 id="beerName"></h3>
           <p id="beerCharacter"></p>
           <p id="beerCellared"></p>
           <p id="beerCellar"></p>
           <p id="beerCellarDate"></p>
   	</div>
        <div data-role="collapsible" data-theme="b" data-content-theme="c">
           <h2>Beer Servings</h2>
           <ul id="swipeList" data-role="listview" data-split-icon="gear" data-split-theme="a" data-inset="true"></ul>
           <p>I'm the expanded content.</p>
        </div>

    <ul id="actionList" data-role="listview" data-inset="true"></ul>
  </div>
</div>

</body>
</html>