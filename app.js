(function() {
  var app = angular.module("petsApp", ["ngRoute"]);

  app.config(function($routeProvider){
    $routeProvider.when("/cat", {
      templateUrl: "views/cat.html",
      controller: "cuteCatController"
    });

    $routeProvider.when("/dog", {
      templateUrl: "views/dog.html",
      controller: "cuteDogController"
    });

    $routeProvider.when("/catsanddogs", {
      templateUrl: "views/catsanddogs.html",
      controller: "catsAndDogsController"
    });

    $routeProvider.otherwise({
        template: "You're Going To Need To Choose Cat Or Dog, or both!"
    });

  });


  })();
