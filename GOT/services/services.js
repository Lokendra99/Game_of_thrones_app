// firing up AJAX call in service depending on type of data recieved
gotApp.service('FetchingDataThroughAPI',function($http){
  var self=this;
  var baseUrl='https://www.anapioficeandfire.com/api/';

  self.ajaxCall=function(type){
    var finalUrl=baseUrl+type;
    return $http.get(finalUrl);
  }
})
