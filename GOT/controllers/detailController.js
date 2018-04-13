//controller providing details of all types of data -book,house and character

//FetchingDataThroughAPI -- service

gotApp.controller('detailController',function($scope,$http,FetchingDataThroughAPI,$routeParams){
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
    console.log($scope.finalArr); //merging all books,characters and houses data

    $scope.typeofData=$routeParams.typeofData;
    $scope.hint=$routeParams.hint;    // hint is bascially which type of data has been used
                                      //isbn tells about books,aliases tells about characters &
                                      //region for houses and then respective value of that hint
                                      // is used to get the exact object.

    for(var i in $scope.finalArr){
      if($scope.finalArr[i].isbn){
        if($scope.finalArr[i].isbn==$scope.hint){
          $scope.bookDetail=$scope.finalArr[i];
        }
      }
      else if($scope.finalArr[i].aliases){
       if($scope.finalArr[i].aliases[0]==$scope.hint){
        $scope.characterDetail=$scope.finalArr[i];
        }
      }
      else if($scope.finalArr[i].region){
        if($scope.finalArr[i].region==$scope.hint){
         $scope.houseDetail=$scope.finalArr[i];
       }
      }
    }
  }
});
