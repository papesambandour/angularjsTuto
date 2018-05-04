var app = angular.module('MainApp',['ngRoute']);

///ROUTE OF APPLICATION///

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl:'app/views/home.html',
            controller : 'HomeCtrl'
        })
        .when('/company',{
            templateUrl : 'app/views/company.html',
            controller : 'CompanytCtrl'
        })
        .otherwise({redirectTo : '/'})
});





