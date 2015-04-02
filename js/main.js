/**
 * Created by Amit Thakkar on 02/04/15.
 */
(function(r) {
    r.config({
        baseUrl: "js",
        paths: {
            'angular': '../bower_components/angular/angular.min',
            'angular-route': '../bower_components/angular-route/angular-route.min',
            'angularAMD': '../bower_components/angularAMD/angularAMD.min'
        },
        shim: { 'angularAMD': ['angular'], 'angular-route': ['angular'] },
        deps: ['app']
    });
})(require);