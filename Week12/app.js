let app = angular.module('todoList', []);

app.controller('todoController', function($scope){
    $scope.newTodo = '';
    $scope.todos = [];
    $scope.addTodo = function(){
        if($scope.newTodo == ''){
            alert("Todo must not be empty");
        }
        else{
            let sudahAdaDiList = false;
            for(let i = 0; i < $scope.todos.length; i++){
                console.log($scope.todos[i].name);
                console.log($scope.newTodo);
                if($scope.todos[i].name == $scope.newTodo){
                    sudahAdaDiList = true;
                    alert("Task already in the list");
                }
            }
            if(!sudahAdaDiList){
                $scope.todos.push({
                    name: $scope.newTodo,
                    done: false
                })
                $scope.newTodo = '';
                console.log($scope.todos);
            }
        }
    };
    $scope.isEmpty = function(){
        if($scope.todos.length > 0){
            return false;
        }
        return true;
    };
    $scope.changeStatus = function(todo){
        todo.done ? todo.done = false : todo.done = true;
    };
    $scope.delete = function(todo){
        $scope.todos.splice($scope.todos.indexOf(todo), 1);
    };
});