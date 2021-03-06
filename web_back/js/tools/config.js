const baseUrl = 'http://localhost:8000';

let ApiUrls = {
    admin_login: baseUrl+'/admin/login',
    admin_logout: baseUrl+'/admin/logout',
    admin_getuser: baseUrl+'/admin/getuser',


    article_count: baseUrl+'/admin/article_count',
    article_comment_count: baseUrl+'/admin/comment_count',
    article_month_count: baseUrl+'/admin/month_article_count',
    article_show: baseUrl+'/admin/search',
    article_del:baseUrl+'/admin/article_delete',
    article_add:baseUrl+'/admin/article_publish',
    article_edit:baseUrl+'/admin/article_edit',
    


    category_count: baseUrl+'/admin/article_category_count',
    category_visit: baseUrl+'/admin/article_category_visit',
    category_search: baseUrl+'/admin/category_search' ,
    category_add: baseUrl+'/admin/category_add' ,
    category_edit: baseUrl+'/admin/category_edit' ,
    category_delete: baseUrl+'/admin/category_delete' ,
}