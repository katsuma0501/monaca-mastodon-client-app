/*
* 各コントローラーのベース（親）
*/
app.controller('baseController',['$scope', '$timeout', 'DataService', function($scope, $timeout, DataService){
    
    $scope.instance_name = DataService.getInstance();
    
    // ページ進む
    $scope.pushpage = function(html, options){
        if(options == undefined){
            app.navigator.pushPage(html);        
        }else{
            app.navigator.pushPage(html, options);
        }
    }
    // ページ戻る
    $scope.poppage = function(){
        app.navigator.popPage();
    }
    
    // 外部ブラウザ
    $scope.inappbrowser = function(url){
        console.log("url = "+url);
        cordova.InAppBrowser.open(url, '_system', 'location=no');
    }
    
    // マイアカウントデータダウンロード取得
    DataService.downloadMyAccount();
    // 通知データダウンロード取得
    DataService.downloadNotifications();
    
    // 通信時間を考慮して少し時間を遅らせて取得
    $timeout(function() {
        $scope.myAccountData = DataService.getMyAccount();
    },2000);
        
}]);
