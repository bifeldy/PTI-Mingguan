let app = angular.module("typingMania",[]);

app.service('highScoreStorage' , function(){
    let hs = localStorage.getItem('highScores');

    if(hs == null || hs == ''){
        hs = []
    }
    else{
        hs = JSON.parse(hs)
    }

    this.addScore = function(newScore){
        hs.push(newScore)
        localStorage.setItem('highScores', JSON.stringify(hs))
    }

    this.getScore = function(){
        return hs;
    }
})

app.service('questionStorage', function(){
    let q = localStorage.getItem('questions')

    if(q == null){
        //q = []
        let request = new XMLHttpRequest();
 
        request.onreadystatechange = function(){
            if(request.readyState != 4 || request.status != 200) return;
            localStorage.setItem("questions", request.responseText);
        }
        request.onerror = function(){
            alert(request.responseText);
        }
        request.open('GET', 'exercise.json',true);
        request.send();
    }

    else{
        q = JSON.parse(q)
    }

    this.getRandom = function(){
        let idx = Math.floor(Math.random() * q.length);
        let generatedTexts = q[idx].split(' ').map(text =>{ 
            return{ text: text, status: 'undone'}
        })
        return generatedTexts;
    }
})

app.controller('typingController', function($scope, $rootScope, highScoreStorage, questionStorage){
    $scope.texts;
    $scope.playerInput = '';
    $scope.index = 0;
    $scope.startTime = 0;
    $scope.name = '';

    $scope.initialize = function(){
        $scope.texts = questionStorage.getRandom()
        console.log($scope.texts)
        $scope.texts[$scope.index].status = 'current'
        alert("Click the input type box to start the game! \n"+ 
                "Commit your answer by hit  space button! \n"+
                "You will get 300ms penalty point" + 
                "every time you commit a wrong answer");
        
        $scope.name = prompt('Who are you?')
    }
    $scope.initialize();

    $scope.submitInput = function(){
        let containSpace = $scope.playerInput.includes(' ')

        if(containSpace){
            let playerInput = $scope.playerInput.trim()
            let currentText = $scope.texts[$scope.index].text;

            if(currentText === playerInput){
                $scope.texts[$scope.index].status = 'right'
            }
            else{
                $scope.texts[$scope.index].status = 'wrong'
            }

            $scope.playerInput = ''
            if($scope.texts.length == ++$scope.index){
                let finalTime = new Date().valueOf() - $scope.startTime
                finalTime += (
                    $scope.texts.filter(t => t.status == 'wrong').length * 300
                )

                let wpm = $scope.texts.length / (finalTime/60000)
                highScoreStorage.addScore({name: $scope.name, wpm})
                alert('Finished')
                $rootScope.$emit('refresh', 'youArgumentHere')
            }
        }
    }

    $scope.startGame = function(){
        $scope.startTime = new Date().valueOf();
    }
})

//utk mengatur tampilan highscore
app.controller('highScoreController', function($scope, $rootScope, highScoreStorage){
    $scope.highScores = [];
    $scope.initialize = function(){
        $scope.highScores = highScoreStorage.getScore()
    }

    $scope.initialize()

    $rootScope.$on('refresh', function(event, args){
        $scope.initialize()
    });

    $scope.checkEmpty = function(){
        if($scope.highScores.length == 0){
            return true;
        }
    }
})