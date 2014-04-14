var api = require("../rest.js");

var userLib = module.exports = {

    login : function(user,callback){

        console.log(user.email);

        //서버로 로그인 시도


        if(user.email != undefined){
            //일단 성공했다고...
            callback(user,true)
        } else {
            callback("",false)
        }
    }
};
