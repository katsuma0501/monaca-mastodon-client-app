/*
* 30_public.htmlのコントローラー
*/
app.controller('publicController',['$scope', '$timeout', '$controller', 'AppConstantService', 'DataService', function($scope, $timeout, $controller, AppConstantService, DataService){
    //継承
    $controller('baseController', {$scope:$scope});
    
    $scope.publictlload = function($done) {
      DataService.downloadPublicTimeLine();
      $timeout(function() {
        $scope.publicTimeLineData = DataService.getPublicTimeLine();
        $done();
      }, 1000);
    };
    
    // HOME TimeLineデータダウンロード取得
    DataService.downloadPublicTimeLine();
    
    // 通信時間を考慮して少し時間を遅らせて取得
    // var getHomeTimeLine = function(){
    //     $scope.homeTimeLineData = DataService.getHomeTimeLine();
    //     // $scope.$apply(homeTimeLineData);
    // }
        $timeout(function() {
            $scope.publicTimeLineData = DataService.getPublicTimeLine();
            // alert(JSON.stringify($scope.homeTimeLineData));
        },2000);
}]);
