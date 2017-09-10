/*
* 20_local.htmlのコントローラー
*/
app.controller('localController',['$scope', '$timeout', '$controller', 'DataService', function($scope, $timeout, $controller, DataService){
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
    
    
    // ロ-カル TimeLineデータダウンロード取得
    DataService.downloadLocalTimeLine();
    
    // 通信時間を考慮して少し時間を遅らせて取得
    $timeout(function() {
        $scope.localTimeLineData = DataService.getLocalTimeLine();
    },2000);
}]);
