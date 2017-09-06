/*
* angular の service 書く
* 共通ロジック部分はここに記載してサービスとして使用
*/

var appService = angular.module('myAppService', []);

/*
* アプリ情報に関するサービス
*/
appService.service('AppConstantService', ['$resource', function($resource) {
    
    // json読み込み
    this.resource = $resource('./json/app_constant.json');
    
    this.appconstant = this.resource.get();
    
    this.getdata = function(){ return this.appconstant; }
    
}]);

/*
* お城情報に関するサービス
*/
appService.service('DataService', function() {
    
    
    this.home_tl_data;
    
    var global_home_tl_data;
    var global_local_tl_data;
    var global_public_tl_data;
    var global_search_data;
    var global_my_account_data;
    
    // qiitadon
    var instance = "qiitadon.com";
    var access_token = "d3475bd3c505f1cfbc445c8bfa66106f0cee183919af06acdd2f034d7dedb4f0";
    // pawoo
    // var instance = "pawoo.net";
    // var access_token = "6f4a942af4939c8cacb341fc33c41bdc5a98be4e125a04504b93fa61962a30f3";
    
    var apiurl = "https://"+instance+"/api/v1/";

    // homeを取得
    this.downloadHomeTimeLine = function(){
        
        var path = apiurl+"timelines/home";
        var req = new XMLHttpRequest();
        req.open("get",path,true) ;
        req.responseType = "json" ;
        req.setRequestHeader("Authorization","Bearer "+access_token ) ;
        req.onload = function() {
            global_home_tl_data = this.response;
            console.log( this.getResponseHeader("Link") ) ;
        }
        req.onerror = function() {
            console.log(this);
        }
        req.send();
    }
    
    this.getHomeTimeLine = function(){ 
        return global_home_tl_data;
    };
    
    
    // ローカルタイムラインを取得
    this.downloadLocalTimeLine = function(){
        
        var path = apiurl+"timelines/public?local=true";
        var req = new XMLHttpRequest();
        req.open("get",path,true) ;
        req.responseType = "json" ;
        req.setRequestHeader("Authorization","Bearer "+access_token ) ;
        req.onload = function() {
            global_local_tl_data = this.response;
            console.log( this.getResponseHeader("Link") ) ;
        }
        req.onerror = function() {
            console.log(this);
        }
        req.send();
    }
    
    this.getLocalTimeLine = function(){ 
        return global_local_tl_data;
    };
    
    
    // 連合タイムラインを取得
    this.downloadPublicTimeLine = function(){
        
        var path = apiurl+"timelines/public";
        var req = new XMLHttpRequest();
        req.open("get",path,true) ;
        req.responseType = "json" ;
        req.setRequestHeader("Authorization","Bearer "+access_token ) ;
        req.onload = function() {
            global_public_tl_data = this.response;
            console.log( this.getResponseHeader("Link") ) ;
        }
        req.onerror = function() {
            console.log(this);
        }
        req.send();
    }
    
    this.getPublicTimeLine = function(){ 
        return global_public_tl_data;
    };
    
    this.searchQuery = function(q){
        
        var path = apiurl+"search?q="+q;
        var req = new XMLHttpRequest();
        req.open("get",path,true) ;
        req.responseType = "json" ;
        req.setRequestHeader("Authorization","Bearer "+access_token ) ;
        req.onload = function() {
            global_search_data = this.response;
            console.log( this.getResponseHeader("Link") ) ;
        }
        req.onerror = function() {
            console.log(this);
        }
        req.send();
    }
    
    this.getSearchResult = function(){ 
        return global_search_data;
    };
    
    // マイアカウント情報取得
    this.downloadMyAccount = function(){
        
        var path = apiurl+"accounts/verify_credentials";
        var req = new XMLHttpRequest();
        req.open("get",path,true) ;
        req.responseType = "json" ;
        req.setRequestHeader("Authorization","Bearer "+access_token ) ;
        req.onload = function() {
            global_my_account_data = this.response;
            console.log( this.getResponseHeader("Link") ) ;
        }
        req.onerror = function() {
            console.log(this);
        }
        req.send();
    }
    
    this.getMyAccount = function(){ 
        return global_my_account_data;
    };

});

/*
* 指操作ジェスチャーに関するサービス
*/
appService.service('GestureService', function() {
    
    this.transform = {
        "scale":1,
        "translateX":0,
        "translateY":0
    };
    
    var TransformManager = function(){
        return {
            createMatrix:function(){
                // console.log("transform.scale="+transform.scale+" transform.translateX="+transform.translateX);
                var matrix = "matrix("+transform.scale+",0,0,"+transform.scale+","+transform.translateX+","+transform.translateY+")";
                return matrix;
            },
            getX:function($_element){
                var values = $_element[0].style.transform.split(",");
                var translateXinMatrix = parseInt(values[4]);
                return translateXinMatrix;
            }
        };
    }();
    
    // transform真ん中配置
    this.alignCenter = function($_element){ 
        console.log("GestureService.alignCenter");
        var windowW = window.innerWidth;
        var elementW = $_element.width();
        var translateX = (elementW - windowW) / 2;
        if(translateX > 0) translateX = translateX * -1;
        var matrix = "matrix(1,0,0,1,"+translateX+",0)";
        $_element.css("transform",matrix);
        // this.transform.translateX = translateX;
    }
    
    //現在のx座標を返す
    this.getCurrentTranslateX = function(){
        return this.transform.translateX;
    }
    
    
});
