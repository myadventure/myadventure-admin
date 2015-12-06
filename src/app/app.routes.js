(function () {
    'use strict';

    /**
    * @name config
    * @desc Define valid application routes
    */
    function config($routeProvider) {
        $routeProvider.when('/tracker', {
            templateUrl: 'app/tracker/tracker.html',
            controller: 'TrackerController',
            title: 'Yakin Around'
        })
        .when('/flickr', {
            templateUrl: 'app/flickr/flickr.html',
            controller: 'FlickrController',
            title: 'Yakin Around'
        })
        .when('/instagram', {
            templateUrl: 'app/instagram/instagram.html',
            controller: 'InstagramController',
            title: 'Yakin Around'
        })
        .when('/point/:type', {
            templateUrl: 'app/point/point-list.html',
            controller: 'ListPointController',
            title: 'Yakin Around'
        })
        .when('/point/:type/new', {
            templateUrl: 'app/point/point-new.html',
            controller: 'NewPointController',
            title: 'Yakin Around'
        })
        .when('/point/:type/:id/edit', {
            templateUrl: 'app/point/point-edit.html',
            controller: 'EditPointController',
            title: 'Yakin Around'
        })
        .otherwise('/tracker');
    }

    config.$inject = ['$routeProvider'];

    angular
        .module('app.routes')
        .config(config);

})();
