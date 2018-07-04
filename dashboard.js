'use strict';
angular.module('cards', [])
  .controller('cardController', cardController);

function cardController($scope) {
  $scope.campaigns = [
    {
      "approved_comments": 2218,
      "approved_likes": 70147,
      "approved_posts": 158,
      "days_passed": 51,
      "days_total": 51,
      "id": 1,
      "is_featured": true,
      "name": "Random name 1",
      "num_of_artists": 0,
      "progress": 100,
      "type": "Challenge"
    },
    {
      "approved_comments": 744,
      "approved_likes": 136072,
      "approved_posts": 108,
      "days_passed": 92,
      "days_total": 92,
      "id": 2,
      "is_featured": true,
      "name": "Random name 2",
      "num_of_artists": 42,
      "progress": 100,
      "type": "Influencer campaign"
    },
    {
      "approved_comments": 1616,
      "approved_likes": 47953,
      "approved_posts": 34,
      "days_passed": 82,
      "days_total": 82,
      "id": 3,
      "is_featured": true,
      "name": "Random name 3",
      "num_of_artists": 0,
      "progress": 100,
      "type": "Giveaway"
    }
  ];
  $scope.hideCard = false;
  $scope.showDetails = false;

}
