/*
* 各コントローラーのベース（親）
*/
app.controller('baseController',['$scope', '$timeout', 'DataService', function($scope, $timeout, DataService){
    
    $scope.instance_name = INSTANCE_NAME;
    
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
    
    // 通信時間を考慮して少し時間を遅らせて取得
    $timeout(function() {
        $scope.myAccountData = DataService.getMyAccount();
        // $scope.myAccountData = JSON.stringify(DataService.getMyAccount());
        // alert(JSON.stringify($scope.myAccountData));
    },2000);
    
    function openLink(url){
        // var e = (window.event)? window.event : arguments.callee.caller.arguments[0];
        // var self = e.target || e.srcElement;
        // console.log("******************************************* "+self.href);
        // alert("href = "+self.href);
        // console.log("href = "+obj.getAttribute('href'));
        // var url = obj.getAttribute('href');
        // $scope.inappbrowser(self.href);
        cordova.InAppBrowser.open(url, '_system', 'location=no');
    }
    
}]);
