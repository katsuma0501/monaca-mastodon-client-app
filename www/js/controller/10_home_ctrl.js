/*
* 10_home.htmlのコントローラー
*/
app.controller('homeController',['$scope', '$timeout', '$controller', 'DataService', function($scope, $timeout, $controller, DataService){
    //継承
    $controller('baseController', {$scope:$scope});
    
    
    $scope.hometlload = function($done) {
      DataService.downloadHomeTimeLine();
      $timeout(function() {
        $scope.homeTimeLineData = DataService.getHomeTimeLine();
        $done();
      }, 1000);
    };
    
    // HOME TimeLineデータダウンロード取得
    DataService.downloadHomeTimeLine();
    
    // 通信時間を考慮して少し時間を遅らせて取得
    $timeout(function() {
        $scope.homeTimeLineData = DataService.getHomeTimeLine();
    },2000);
}]);
