
var user = require('../../lib/common/userLib');

/**
 * Login화면
 * @param req
 * @param res
 */
exports.loginForm = function(req, res){
    res.render('./common/login_form');
};

exports.login = function(req, res){

    return user.login({
        email : req.body.email,
        passwd : req.body.passwd
    }, function (data, msg){
        if(msg){
            console.log("Login Success");
            res.header('Referrer');
            res.redirect('/');
        } else{
            console.log("Login Fail");
            res.header('Referrer');
            res.redirect('/user');
        }
    });
};
