var app = angular.module('chatApp', ['ngMaterial']);
app.config(function ($mdThemingProvider) {
   $mdThemingProvider.theme('default')
      .primaryPalette('grey', {
                 'default': '900', // by default use shade 400 from the pink palette for primary intentions
                  // use shade A100 for the <code>md-hue-3</code> class
             })
             .accentPalette('red', {
                 'default': 'A700'
             });
});

app.controller('chatController', function ($scope, $sce) {
$scope.messages = [];


                     var  exampleSocket =  new  WebSocket('ws://localhost:9000/chatSocket');
                        exampleSocket.onmessage  =   function  (event) {
                            var jsonData = JSON.parse(event.data);
                            jsonData.time = new Date()
                                .toLocaleTimeString();
                            $scope.messages.push(jsonData);
                            $scope.$apply();
                            console.log(jsonData);
                        };
                        $scope.sendMessage = function () {
                               exampleSocket.send($scope.userMessage);
                               $scope.userMessage = "";
                           };
                           $scope.trust = $sce.trustAsHtml;$scope.trust = $sce.trustAsHtml;
});
