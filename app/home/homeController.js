angular.module('minecraftnet')
  .controller('homeController', homeController);

function homeController($http) {

  var self = this;

  $http.get('http://mc.garrettcox.io:9000/api/mojang')
    .then(function(response) {
      self.posts = response.data;
    });

  $http.get('http://mc.garrettcox.io:9000/api/twitter')
    .then(function(response) {
      self.tweets = response.data;
    });
}
