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
        $.get(baseUrl +'/admin/getuser', function (res) {
           callback(res)
        })
    }

}