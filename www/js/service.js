/*
* angular の service 書く
* 共通ロジック部分はここに記載してサービスとして使用
*/

var appService = angular.module('myAppService', []);

/*
* データサービス
*/
appService.service('DataService', function() {
    
    // インスタンスとアクセストークンを設定
    var instance = "YOUR_INSTANCE";
    var access_token = "YOUR_ACCESS_TOKEN";
    
    this.home_tl_data;
    this.hashtag;
    
    var global_home_tl_data;
    var global_local_tl_data;
    var global_public_tl_data;
    var global_hashtag_tl_data;
    var global_search_data;
    var global_my_account_data;
    var global_notifications_data;

    var apiurl = "https://"+instance+"/api/v1/";
    
    this.getInstance = function(){ 
        return instance;
    };

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
    
     // ハッシュタグタイムラインを取得
    this.downloadHashtagTimeLine = function(){
        var path = apiurl+"timelines/tag/"+this.hashtag;
        var req = new XMLHttpRequest();
        req.open("get",path,true) ;
        req.responseType = "json" ;
        req.setRequestHeader("Authorization","Bearer "+access_token ) ;
        req.onload = function() {
            global_hashtag_tl_data = this.response;
            console.log( this.getResponseHeader("Link") ) ;
        }
        req.onerror = function() {
            console.log(this);
        }
        req.send();
    }
    
    this.getHashtagTimeLine = function(){ 
        return global_hashtag_tl_data;
    };

    this.setHashtag = function(hashtag){ 
        this.hashtag = hashtag;
    };
    this.getHashtag = function(){ 
        return this.hashtag;
    };
    
    // 検索
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
    
    
    // 通知を取得
    this.downloadNotifications = function(){
        
        var path = apiurl+"notifications";
        var req = new XMLHttpRequest();
        req.open("get",path,true) ;
        req.responseType = "json" ;
        req.setRequestHeader("Authorization","Bearer "+access_token ) ;
        req.onload = function() {
            global_notifications_data = this.response;
            console.log( this.getResponseHeader("Link") ) ;
        }
        req.onerror = function() {
            console.log(this);
        }
        req.send();
    }
    
    this.getNotifications = function(){ 
        return global_notifications_data;
    };

});