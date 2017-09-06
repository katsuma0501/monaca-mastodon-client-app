/*
* 30_public.htmlのコントローラー
*/
app.controller('searchController',['$scope', '$timeout', '$controller', 'AppConstantService', 'DataService', function($scope, $timeout, $controller, AppConstantService, DataService){
    //継承
    $controller('baseController', {$scope:$scope});
    
    $scope.title = "検索";
    
    $scope.search = function(){
        var q = document.getElementById('searchq').value;
        DataService.searchQuery(q);
        $timeout(function() {
            $scope.searchResultData = DataService.getSearchResult();
            alert(JSON.stringify($scope.searchResultData));
        },2000);
    }
    // HOME TimeLineデータダウンロード取得
    // DataService.downloadPublicTimeLine();
    
    // 通信時間を考慮して少し時間を遅らせて取得
    // var getHomeTimeLine = function(){
    //     $scope.homeTimeLineData = DataService.getHomeTimeLine();
    //     // $scope.$apply(homeTimeLineData);
    // }
    // $timeout(function() {
    //     // $scope.publicTimeLineData = DataService.getPublicTimeLine();
    //     // alert(JSON.stringify($scope.homeTimeLineData));
    // },2000);
}]);
