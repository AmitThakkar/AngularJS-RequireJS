/**
 * Created by Amit Thakkar on 02/04/15.
 */
(function(d) {
    d(['app'], function (app) {
        app.controller('HomeCtrl', function ($scope) {
            $scope.message = "Message from HomeCtrl";
        });
    });
})(define);