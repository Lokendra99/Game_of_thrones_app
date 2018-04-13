gotApp.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'pages/home.html',
    controller:'homeController'
  })

  .when('/detail/:typeofData/:hint',{
    templateUrl:'pages/detail.html',
    controller:'detailController'
  })
})
