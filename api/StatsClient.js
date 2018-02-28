/**
 * Created by hlliu on 2018/2/28.
 * 获取统计数据接口
 */
var httpCommon = require("./../utils/HttpUtils");
var statsUrl = "http://api.push.mob.com"

var statsClient = {
    /**
     * 获取统计数据(根据batchId查询)
     * */
    getStatsByBatchId: function (appkey, appSecret, batchId, callback) {
        if (batchId == null || batchId == "") {
            callback("batchId is null ", null);
            return false;
        }
        var path = statsUrl + "/stats/id/" + batchId;
        httpCommon.get(appkey, appSecret, path, callback);
    },

    /**
     * 获取统计数据(根据workno查询)
     * */
    getStatsByWorkno: function (appkey, appSecret, workno, callback) {
        if (workno == null || workno == "") {
            callback("workno is null ", null);
            return false;
        }
        var path = statsUrl + "/stats/workno/" + workno;
        httpCommon.get(appkey, appSecret, path, callback);
    }
}

module.exports = statsClient;