
var admin = {
    login: function (myname, mypassword, callback) {
        $.post(ApiUrls.admin_login, {
            user_name: myname,
            password: mypassword
        }, function (res) {
            callback(res);
        })
    },
    logout: function (callback) {
        $.post(ApiUrls.admin_logout, function (res) {
            callback(res);
        })
    },
    getuser: function (callback) {
        $.get(ApiUrls.admin_getuser, function (res) {
            callback(res)
        })
    }

}

var article = {
        count: function (callback) {
           $.get(ApiUrls.article_count,function(res){
                callback(res);
           })
        },
        comment_count:function(callback){
            $.get(ApiUrls.article_comment_count,function(res){
                callback(res);
            })
        },
        month_article_count:function(callback){
            $.get(ApiUrls.article_month_count,function(res){
                callback(res);
            })
        } ,
        show:function(curPage, type, state,callback){
            $.get(ApiUrls.article_show,
                {
                page: curPage,
                type: type,
                state: state
                },
            function(res){
                callback(res);
            })
        },del: function(id,callback){
            $.get(ApiUrls.article_del,{'id': id},function(res){
                callback(res)
            })
        },
        add: function(fd, callback){
            $.ajax({
                url: ApiUrls.article_add,
                type: 'post',
                data: fd,
                processData: false, // 不要让jquery去处理formdata数据
                contentType: false, // 不要使用默认的请求头
                success:function(res){
                    callback(res)
                }
            })
        }
}


var category = {

         count:function(callback){
             $.get(ApiUrls.category_count,function(res){
                 callback(res);
             })
         },
         visit:function(callback){
             $.post(ApiUrls.category_visit,function(res){
                 callback(res);
             })
         },
         search:function(callback){
             $.get(ApiUrls.category_search,function(res){
                 callback(res);
             })
         },
         add:function(name,slug,callback){
             $.post(ApiUrls.category_add,{name:name,slug:slug},function(res){
                 callback(res);
             })
         },
         edit:function(id,name,slug,callback){
             $.post(ApiUrls.category_edit,{id:id,name:name,slug:slug},function(res){
                 callback(res);
             })
         },
         delete:function(id,callback){
             $.post(ApiUrls.category_delete,{id:id},function(res){
                 callback(res);
             })
         }, 
         
}