var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController', function ($scope, $sce) {
$scope.messages = [{'sender': 'USER',
                    'text': 'hi',
                    'time': '10:01 AM'},
                    {'sender': 'BOT',
                      'text': 'hello, what can I help you with?',
                       'time': '10:01 AM'},
                   {'sender': 'USER',
                     'text': 'news about dfgfbgyyn',
                      'time': '10:01 AM'},
                    {'sender': 'BOT',
                     'text': 'INVALID SEARCH',
                     'time': '10:01 AM'}
                     ]
});
