/*
* 50_notifications.htmlのコントローラー
*/
app.controller('notificationsController',['$scope', '$timeout', '$controller', 'DataService', function($scope, $timeout, $controller, DataService){
    //継承
    $controller('baseController', {$scope:$scope});
    // 起動時にDLしたデータを表示
    $scope.notificationsData = DataService.getNotifications();
    
    // 更新 通知データダウンロード取得
    DataService.downloadNotifications();
    
    // 通信時間を考慮して少し時間を遅らせて取得
    $timeout(function() {
        $scope.notificationsData = DataService.getNotifications();
    },2000);
    
}]);
