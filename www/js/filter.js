/*
* angular の filter 書く
* 
*/

app.filter('white_check_mark', [function() {
    return function (display_name) {
        if( display_name.indexOf(":white_check_mark:") != 0 ){
            return display_name.replace(/:white_check_mark:/,"✔"); 
        }
    };
  }
]);

app.filter('media', [function() {
    return function (media_attachments) {
        if( media_attachments.length != 0 ){
            return '<img src="'+media_attachments[0]['remote_url']+'" class="media">';
        }
    };
  }
]);

app.filter('ancher', [function() {
    return function (html) {
        if( html.indexOf("href") != 0 ){
            return html.replace(/href=\"(.*?)\"/g, 'href=\"javascript:void(0);\" onclick=\"cordova.InAppBrowser.open(\'$1\', \'_system\', \'location=no\');\"');
        }
    };
  }
]);