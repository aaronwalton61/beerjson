# BeerJSON

a more organized JQuery Mobile Beer List application

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

### MySQL Database Tables

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



End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [JQuery](http://www.jquery.com) - The web framework used
* [JQueryMobile](http://www.jquerymobile.com) - The mobile framework used

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Aaron Walton** - *Initial work* - [aaronwalton61](https://github.com/aaronwalton61)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
