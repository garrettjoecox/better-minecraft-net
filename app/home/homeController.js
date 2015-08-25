angular.module('minecraftnet')
  .controller('homeController', homeController);

function homeController($http) {

  var self = this;

  $http.get('http://mc.garrettcox.io:9000/api/feeds/tumblr')
    .then(function(response) {
      self.posts = response.data.posts;
    });

  $http.get('http://mc.garrettcox.io:9000/api/feeds/twitter')
    .then(function(response) {
      self.tweets = response.data.statuses;
    });
}
