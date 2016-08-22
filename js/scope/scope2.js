/**
 * Created by GanMingYing on 2016/8/22.
 */
function EventController($scope) {
    $scope.count = 0;
    $scope.$on('MyEvent', function() {
        $scope.count++;
    });
}
/*
function EventController1($scope){$scope.count = 0;}
function EventController2($scope){$scope.count = 0;}*/
