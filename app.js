let myApp = angular.module("myApp",[])
myApp.controller('myctrl',($scope)=>{
    $scope.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    $scope.addTodo = function() {
      $scope.tasks .push({taskDesc:$scope.desc, status:false});
      $scope.updt();
      $scope.desc = '';  
        
      };
    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.tasks, function(todo) {
          count += todo.status ? 0 : 1;
        });
        return count;
      }
    $scope.deltodo = function (index) {
        $scope.tasks.splice(index, 1); 
        $scope.updt();
      }
    $scope.clean= function(){$scope.tasks=[];$scope.updt();}
   $scope.selecteddel=function(){
    $scope.tasks = $scope.tasks.filter(function (task) {
        return !task.status;
    });
    $scope.updt();
   }
   $scope.updt = function () {
    localStorage.setItem('tasks', JSON.stringify($scope.tasks));
};
});