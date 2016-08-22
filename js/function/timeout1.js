var timeoutApp = angular.module('timeoutApp',[]);
timeoutApp.controller('myCtrl',function($scope){
    $scope.ifShowMenu = false;
});
timeoutApp.directive('dropdown',function($timeout){
    return {
        restrict:"EA",
        link:function(scope,iele,iattr){
            scope.showMenu = function(){
                console.log(1);
                $timeout.cancel(scope.t2);
                scope.t1 = $timeout(function(){
                    scope.ifShowMenu = true;
                    console.log(1.1);

                })
            };
            scope.hideMenu = function(){
                console.log(2);
                $timeout.cancel(scope.t1);
                scope.t2 = $timeout(function(){
                    scope.ifShowMenu = false
                    console.log(1.2);
                })
            };
        }
    }
})
