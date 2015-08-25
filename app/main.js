angular.module('minecraftnet', [ 'ngRoute' ])
  .config(Config);

function Config($routeProvider) {
  $routeProvider
    .when('/', { templateUrl: 'app/home/homeView.html' })
    .when('/download', { templateUrl: 'app/download/downloadView.html' })
    .otherwise('/');
}
