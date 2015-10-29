
    var EventRepository = {
      getAllEvents: function($http, successCallback) {
          $http.get('http://localhost:8080/api/events')
              .success(function(data)
              {
                  successCallback( data['events'] );

              }).error(function()
              {
                  console.log("not successfull");
              });
      }
    };

    var EventListController = function($scope, $http){
        this.$inject = ['$scope'];

        EventRepository.getAllEvents($http, function(data){
           $scope.events = data;
        });

    };

    var EventApp = angular.module('EventApp', []);
    EventApp.controller('EventListController', EventListController);
