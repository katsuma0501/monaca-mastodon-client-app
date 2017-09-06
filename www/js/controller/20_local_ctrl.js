/*
* 20_local.htmlのコントローラー
*/
app.controller('localController',['$scope', '$timeout', '$controller', 'AppConstantService', 'DataService', function($scope, $timeout, $controller, AppConstantService, DataService){
    //継承
    $controller('baseController', {$scope:$scope});
        
    $scope.localtlload = function($done) {
      // TimeLineデータダウンロード取得
      DataService.downloadLocalTimeLine();
      $timeout(function() {
        $scope.localTimeLineData = DataService.getLocalTimeLine();
        $done();
      }, 1000);
    };
    
    
    // HOME TimeLineデータダウンロード取得
    DataService.downloadLocalTimeLine();
    
    // 通信時間を考慮して少し時間を遅らせて取得
    // var getHomeTimeLine = function(){
    //     $scope.homeTimeLineData = DataService.getHomeTimeLine();
    //     // $scope.$apply(homeTimeLineData);
    // }
        $timeout(function() {
            $scope.localTimeLineData = DataService.getLocalTimeLine();
            // alert(JSON.stringify($scope.homeTimeLineData));
        },2000);
}]);
