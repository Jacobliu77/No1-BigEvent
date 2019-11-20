var baseUrl = 'http://localhost:8000'
var admin = {
    login: function (myname, mypassword, callback) {
        $.post(baseUrl + '/admin/login', {
            user_name: myname,
            password: mypassword
        }, function (res) {
            callback(res);
        })
    },
    logout: function (callback) {
        $.post(baseUrl + '/admin/logout', function (res) {
            callback(res);
        })
    },
    getuser: function (callback) {
        $.get(baseUrl + '/admin/getuser', function (res) {
            callback(res)
        })
    }

}

var article = {
        count: function (callback) {
           $.get(baseUrl+'/admin/article_count',function(res){
                callback(res);
           })
        },
        comment_count:function(callback){
            $.get(baseUrl+'/admin/comment_count',function(res){
                callback(res);
            })
        },
        month_article_count:function(callback){
            $.get(baseUrl+'/admin/month_article_count',function(res){
                callback(res);
            })
        },
}