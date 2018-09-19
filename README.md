# beerlist 
a more organized JQuery Mobile Beer List application

# Database Tables

Beer
Field           Type                Null        Key     Default     Extra
beer_id         int(10) unsigned    NO          PRI     NULL        auto_increment
Name            varchar(64)         YES         MUL     NULL          
BeerAdvocate    varchar(128)        YES                 NULL          
Characteristics varchar(20)         YES                 NULL
cellared        int(11)             NO                  0
ExtendedCellar  int(11)             NO                  0
CellarDate      date                YES                 NULL
CellarServing   varchar(15)         YES                 NULL
photo_id        int(11)             NO                  1
Notes           text                YES                 NULL

BeerServings
Field           Type                Null        Key     Default     Extra
id              int(11)             NO          PRI     NULL        auto_increment
beer_id         int(10) unsigned    NO                  NULL    
Name2           varchar(64)         NO                  What Name
Serving         varchar(15)         YES                 NULL
List            varchar(15)         YES                 NULL
Location        varchar(25)         YES                 NULL
Review          text                YES                 NULL
Date            date                YES                 NULL
_CellarDate     date                YES                 NULL
Vintage         year(4)             YES                 NULL

BeerImages
id              int(11)             NO          PRI     NULL        auto_increment
Name            varchar(512)        NO                  NULL
Beer            varchar(64)         YES                 NULL
Brewery         varchar(64)         YES                 NULL
type            varchar(30)         NO                  NULL
Size            int(11)             NO                  NULL
Content         mediumblob          NO                  NULL

BeerServingTypes
Name            varchar(15)         NO                  NULL
Graphic         varchar(64)         YES                 NULL

BeerLists
idx             int(11)             NO                  NULL
order           int(11)             NO                  0
Name            varchar(15)         NO                  NULL
Graphic         varchar(64)         NO                  NULL

BeerLocations
order           int(11)             NO                  0
Name            varchar(25)         NO                  NULL
Graphic         varchar(64)         YES                 NULL
