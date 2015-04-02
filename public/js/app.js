/**
 * Created by Amit Thakkar on 02/04/15.
 */
(function(d) {
    d(['angularAMD', 'angular-route'], function (angularAMD) {
        var app = angular.module("webapp", ['ngRoute']);
        app.config(["$routeProvider", function ($routeProvider) {
            $routeProvider.when("/home", angularAMD.route({
                templateUrl: 'public/views/home.html',
                controller: 'HomeCtrl',
                controllerUrl: 'controller/HomeController'
            }))
        }]);
        return angularAMD.bootstrap(app);
    });
})(define);