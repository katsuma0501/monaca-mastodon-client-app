/*
* 30_public.htmlのコントローラー
*/
app.controller('publicController',['$scope', '$timeout', '$controller', 'DataService', function($scope, $timeout, $controller,  DataService){
    //継承
    $controller('baseController', {$scope:$scope});
    
    $scope.publictlload = function($done) {
      DataService.downloadPublicTimeLine();
      $timeout(function() {
        $scope.publicTimeLineData = DataService.getPublicTimeLine();
        $done();
      }, 1000);
    };
    
    // 連合 TimeLineデータダウンロード取得
    DataService.downloadPublicTimeLine();
    
    // 通信時間を考慮して少し時間を遅らせて取得
    $timeout(function() {
        $scope.publicTimeLineData = DataService.getPublicTimeLine();
    },2000);
}]);
