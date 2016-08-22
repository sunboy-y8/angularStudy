var timeoutApp = angular.module('timeoutApp',[]);
timeoutApp.run(function($timeout){
    var a = $timeout(function(){
        console.log('执行$timeout回调');
        return 'angular'
    },1000);
    a.then(function(data){
        console.log(data)
    },function(data){
        console.log(data)
    });
    $timeout.cancel(a);
})