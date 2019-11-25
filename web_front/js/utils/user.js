var category = {
    show : function( callback ){
        // alert('获取数据')
        $.get(APIURLS.category_show,function(res){
            callback(res)
        })
    }
}
var article = {
    
    getFiveFocus: function(callback){
        $.get(APIURLS.article_show,
            {
                perpage: 5,
                state: '已发布'
            },
            function(res){
            callback(res)
        })
    },
    // 获取文章的详情
    getDetail: function(id, callback){
        $.get(APIURLS.article_show,
            {
                "id": id
            },
            function(res){
                callback(res)
            }
        )
    }
}
var comment = {
    add:function(name,content,article_id,callback ){
        $.post(APIURLS.comment_add,{
            'name': name,
            'content' : content,
            'article_id': article_id
        },
        function(res){
            callback(res)
        })
    },
    get:function(article_id, callback){
        $.get(APIURLS.comment_get,
            {   
                'article_id': article_id
            },
            function(res){
                callback(res)
            }
        )
    }
}