angular.module('main', [])
    .controller('mainCtrl', function($scope) {
        $scope.testString = "hello Test";
        $scope.stringLength = function(input) {
            var size = input.length;
            console.log(size)
            if (size > 8) {
                $scope.length = 'long';
            } else if (size > 3) {
                $scope.length = 'medium';
            } else {
                $scope.length = 'short';
            }
        };
    });