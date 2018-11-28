/**
 * Created by hlliu on 2018/2/28.
 * 推送相关接口
 */
var httpCommon = require("./../utils/HttpUtils");
var pushUrl = "http://api.push.mob.com";

var pushClient = {

    /**
     * 推送详情（根据batchId查询）
     * */
    getPushByBatchId: function (appkey, appSecret, batchId, callback) {
        if (batchId == null || batchId == "") {
            callback("batchId is null ", null);
            return false;
        }
        var path = pushUrl + "/push/id/" + batchId;
        httpCommon.get(appkey, appSecret, path, callback);
    },

    /**
     * 推送详情（根据workno查询）
     * */
    getPushByWorkno: function (appkey, appSecret, workno, callback) {
        if (workno == null || workno == "") {
            callback("workno is null ", null);
            return false;
        }
        var path = pushUrl + "/push/workno/" + workno;
        httpCommon.get(appkey, appSecret, path, callback);
    },

    /**
     * 发送推送
     * @param pushWork
     * @return batchId (MobPush 推送消息唯一ID)
     * @throws ApiException
     */
    sendPush: function (appkey, appSecret, json, callback) {
        if(!json){
            callback("pushwork is null ", null);
            return false;
        }
        var path = pushUrl + "/v2/push";
        if (typeof json == 'string') {
            json = JSON.parse(json);
        }
        if (!json.content) {
            callback("content is null ", null);
            return false;
        } else if (!json.target) {
            callback("target is null ", null);
            return false;
        } else if (!json.type) {
            callback("type is null ", null);
            return false;
        } else if (!appkey) {
            callback("appkey is null ", null);
            return false;
        } else if (!appSecret) {
            callback("appSecret is null ", null);
            return false;
        } else if (!json.plats) {
            callback("plats is null or error", null);
            return false;
        }
        httpCommon.post(appkey, appSecret, path, json, function (err, data) {
            if (err != null) {
                callback && callback(err, data);
            } else {
                callback && callback(null, data);
            }
        });
    }
}

module.exports = pushClient;