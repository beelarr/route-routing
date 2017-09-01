"use strict";

var app = angular.module('ParkwayApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/brpkwy', {
                templateUrl: 'partials/blueridgepkwy.html',
                controller: "NCCtrl"
            })
            .when('/tnpkwy', {
                templateUrl: 'partials/natcheztracepkwy.html',
                controller: "TNCtrl"
            })
            .otherwise('/');
    });