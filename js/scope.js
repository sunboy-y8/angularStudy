function GreetCtrl($scope) {
    $scope.name = 'World';
}

function ListCtrl($scope) {
    $scope.names = ['Igor', 'Misko', 'Vojta'];
}
function MyCtrl($scope) {
    $scope.action = function() {
        $scope.name = 'OK';
    }

    $scope.name = 'World';
}