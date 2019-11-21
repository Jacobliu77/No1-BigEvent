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
            $.get('http://localhost:8000/admin/month_article_count',function(res){
                callback(res);
            })
        },
        category_count:function(callback){
            $.get(baseUrl+'/admin/article_category_count',function(res){
                callback(res);
            })
        },
        category_visit:function(callback){
            $.post(baseUrl+'/admin/article_category_visit',function(res){
                callback(res);
            })
        }
}

                // console.log(res);
                // console.log(typeof(res.data));
                // var resa = JSON.parse(res)
                // var getstr = resa.data;
                // console.log(res.data);
                
                // getstra = JSON.parse(getstr)
                // getstr = getstr.split('[');
                // getstr.shift();
                // var getstra =(getstr[0]).split(']');
                // getstra.pop();
                // console.log(getstra);