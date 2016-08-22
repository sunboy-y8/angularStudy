/**
 * Created by GanMingYing on 2016/8/22.
 */
function MyController($scope) {
    $scope.username = 'World';

    $scope.sayHello = function() {
        $scope.greeting = 'Hello ' + $scope.username + '!';
    };
}