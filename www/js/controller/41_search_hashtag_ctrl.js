/*
* 41_search_hashtag.htmlのコントローラー
*/
app.controller('hashtagController',['$scope', '$timeout', '$controller', 'DataService', function($scope, $timeout, $controller, DataService){
    //継承
    $controller('baseController', {$scope:$scope});
        
    $scope.hashtag = DataService.getHashtag();

    $scope.hashtag_search = function(){
        DataService.downloadHashtagTimeLine();
        $timeout(function() {
            $scope.hashtagTimeLineData = DataService.getHashtagTimeLine();
        },2000);
    }
    
    $scope.hashtag_search();
    
}]);
