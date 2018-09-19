# beerlist 
a more organized JQuery Mobile Beer List application

# Database Tables

Field           Type                Null      Key     Default       Extra
beer_id         int(10) unsigned    NO        PRI     NULL          auto_increment
Name            varchar(64)         YES       MUL     NULL          
BeerAdvocate    varchar(128)        YES               NULL          
Characteristics varchar(20)         YES               NULL
cellared        int(11)             NO                0
ExtendedCellar  int(11)             NO                0
CellarDate      date                YES               NULL
CellarServing   varchar(15)         YES               NULL
photo_id        int(11)             NO                1
Notes           text                YES               NULL
