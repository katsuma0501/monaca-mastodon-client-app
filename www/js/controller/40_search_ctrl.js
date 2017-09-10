/*
* 40_search.htmlのコントローラー
*/
app.controller('searchController',['$scope', '$timeout', '$controller', 'DataService', function($scope, $timeout, $controller, DataService){
    //継承
    $controller('baseController', {$scope:$scope});
        
    $scope.search = function(){
        var q = document.getElementById('searchq').value;
        DataService.searchQuery(q);
        $timeout(function() {
            $scope.searchResultData = DataService.getSearchResult();
        },2000);
    }
    
    $scope.hashtag_search = function(hashtag){
        DataService.setHashtag(hashtag);
        $scope.pushpage('41_search_hashtag.html');
    }
    
}]);
