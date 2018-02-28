/**
 * Created by hlliu on 2018/2/27.
 * http帮助
 */

var request = require('request');
var crypto = require('crypto');

var httpCommon = {

    sign:function(data, appSecret){
        var signStr = appSecret;
        if(data != null){
            signStr = data+signStr;
        }
        return crypto.createHash('md5').update(signStr).digest('hex');
    },

    /**
     *  HTTP POST请求，返回JSON数据格式
     * @param url
     * @param appkey
     * @param appSecret
     * @param postData
     * @param callback
     * @return json数据
     */
    post: function (appkey, appSecret ,url, postData, callback) {
        var options = {
            uri: url,
            method: 'post',
            timeout: 30000,
            rejectUnauthorized: false,
            headers: {
                'Content-Type': 'text/html;charset=UTF-8',
                'User-Agent': 'MobPush client for NodeJs',
                'Accept': '*/*',
                'key':appkey,
                'sign':httpCommon.sign(JSON.stringify(postData), appSecret)
            }
        };
        options.json = true;
        options.body = postData;
        request(
            options,
            function (err, res, data) {
                if (!err && res.statusCode == 200) {
                    if (typeof data == 'string') {
                        data = JSON.parse(data);
                    }
                    callback && callback(null, data['res']);
                } else {
                    if(data != null && data != undefined){
                        if (typeof data == 'string') {
                            data = JSON.parse(data);
                        }
                        callback && callback( data['error'], null);
                    }else{
                        callback && callback(err, null);
                    }
                }
            });
    },

    /**
     *  HTTP GET请求，返回JSON数据格式
     * @param url
     * @param appkey
     * @param appSecret
     * @param callback, 回调需要两个参数 第一个接受error信息，第二个接受正确返回数据
     * @return json数据
     */
    get:function(appkey, appSecret, url, callback){
        var options = {
            uri: url,
            method: 'get',
            timeout: 30000,
            rejectUnauthorized: false,
            headers: {
                'Content-Type': 'text/html;charset=UTF-8',
                'User-Agent': 'MobPush client for NodeJs',
                'Accept': '*/*',
                'key':appkey,
                'sign':httpCommon.sign(null, appSecret)
            }
        };
        options.json = true;
        request(
            options,
            function (err, res, data) {
                if (!err && res.statusCode == 200) {
                    if (typeof data == 'string') {
                        data = JSON.parse(data);
                    }
                    callback && callback(null, data['res']);
                } else {
                    if(!data){
                        callback && callback( data['error'], null);
                    }else{
                        callback && callback(err, null);
                    }
                }
            });
    }
}

module.exports = httpCommon;