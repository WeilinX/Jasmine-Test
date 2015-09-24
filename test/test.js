/**
 * Created by weilin on 9/24/2015.
 */
describe("true",function(){
    it("should return true",function(){
        expect("true").toEqual("true")
    })
})

describe('mainCtrl', function() {
    beforeEach(module('main'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.testString', function() {
        var $scope, controller;

        beforeEach(function() {
            $scope = {};
            controller = $controller('mainCtrl', { $scope: $scope });
        });

        it('string is hello Test', function() {

            expect($scope.testString).toEqual('hello Test');
        });

        it('sets the length to "short" if the length of input <3 chars', function() {
            $scope.stringLength(['a','b','b'])
            expect($scope.length).toEqual('short');
        });

        it('sets the length to "median" if the length of input >3 chars && <8 chars', function() {
            $scope.stringLength(['a','b','c','d','e'])
            expect($scope.length).toEqual('medium');
        });

        it('sets the length to "long" if the length of input >8 chars', function() {
            $scope.stringLength(['a','b','c','d','e','f','g','h','i'])
            expect($scope.length).toEqual('long');
        });
    });
});