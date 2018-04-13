// home controller is to get all types of books,characters and houses.
// FetchingDataThroughAPI -service
gotApp.controller('homeController',function($scope,$http,FetchingDataThroughAPI){
  FetchingDataThroughAPI.ajaxCall('books')
  .then(function(resultedBooks){$scope.mergingAllCalls(resultedBooks.data);
  })
  FetchingDataThroughAPI.ajaxCall('characters')
  .then(function(resultedCharacters){$scope.mergingAllCalls(resultedCharacters.data);
  });
  FetchingDataThroughAPI.ajaxCall('houses')
  .then(function(resultedHouses){$scope.mergingAllCalls(resultedHouses.data);
  });
  $scope.finalArr=[];
  $scope.mergingAllCalls=function(data){
    $scope.finalArr=$scope.finalArr.concat(data);
    console.log($scope.finalArr);
  }
      // for checking which type of sorting user wants
      $scope.sortAscVariable=false;
      $scope.sortDescVariable=false;

      $scope.sortAsc=function(){
        $scope.sortDescVariable=false;
        $scope.sortAscVariable=true;
      }
      $scope.sortDesc=function(){
        $scope.sortAscVariable=false;
        $scope.sortDescVariable=true;
      }
      $scope.checkSort=function(){
        if($scope.sortAscVariable){
          return 'name || aliases[0]';
        }
        else if($scope.sortDescVariable){
          return '-name || -aliases[0]';
        }
      }

      $scope.bookDiv=false;$scope.charDiv=false;$scope.houseDiv=false;
      // hiding blocks of other fields while one is shown
      $scope.hidingFn=function(type){
        if(type=='book')
        {
          $scope.bookDiv=true;$scope.charDiv=false;$scope.houseDiv=false;}
        else if(type=='characters')
        {
        $scope.bookDiv=false;$scope.charDiv=true;$scope.houseDiv=false;}
        else if(type=='houses')
        {
        $scope.bookDiv=false;$scope.charDiv=false;$scope.houseDiv=true;}
      }

      $scope.showingFn=function(type){
        if(type=='book' && $scope.bookDiv==true ){return true;}
        else if(type=='characters' && $scope.charDiv==true){return true;}
        else if(type=='houses' && $scope.houseDiv==true){return true;}
      }
});
