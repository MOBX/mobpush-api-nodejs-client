/**
 * Created by hlliu on 2018/2/27.
 * 设备相关接口
 */
var httpCommon = require("./../utils/HttpUtils");

var deviceUrl = "http://api.push.mob.com";

var deviceClient = {

    /**
     * 获取设备别名
     * @param registrationId
     * @return alias 别名
     */
    getDeviceAlias: function (appkey, appSecret, registrationId, callback) {
        if (registrationId == null || registrationId == undefined || registrationId == "") {
            callback("registrationId is null ", null);
            return false;
        }
        var path = deviceUrl + "/alias/" + registrationId;
        httpCommon.get(appkey, appSecret, path, function (err, data) {
            if (err != null) {
                callback(err, data);
            } else {
                if (typeof data == 'string') {
                    data = JSON.parse(data);
                }
                callback(null, data['alias']);
            }
        });
    },

    /**
     * 绑定设备别名，如果存在则覆盖原有别名
     * @param alias
     * @param registrationId
     * @return (true 表示成功)
     */
    setDeviceAlias: function (appkey, appSecret, alias, registrationId, callback) {
        if (registrationId == null || registrationId == undefined || registrationId == "") {
            callback("registrationId is null ", null);
            return false;
        }
        var path = deviceUrl + "/alias/";
        var json = {
            'registrationId': registrationId,
            'alias': alias
        }
        httpCommon.post(appkey, appSecret, path, json, function (err, data) {
            if (err != null) {
                callback && callback(err, data);
            } else {
                callback && callback(null, true);
            }
        });
    },

    /**
     * 清空设备别名
     * @param registrationId
     * @return (true 表示成功)
     */
    cleanDeviceAlias: function (appkey, appSecret, registrationId, callback) {
        if (registrationId == null || registrationId == undefined || registrationId == "") {
            callback("registrationId is null ", null);
            return false;
        }
        var path = deviceUrl + "/alias/";
        var json = {
            'registrationId': registrationId,
            'alias': ''
        }
        httpCommon.post(appkey, appSecret, path, json, function (err, data) {
            if (err != null) {
                callback && callback(err, data);
            } else {
                callback && callback(null, true);
            }
        });
    },

    /**
     * 获取设备标签
     * @param registrationId
     * @return tags 标签集合
     */
    getDeviceTags: function (appkey, appSecret, registrationId, callback) {
        if (registrationId == null || registrationId == undefined || registrationId == "") {
            callback("registrationId is null ", null);
            return false;
        }
        var path = deviceUrl + "/tags/" + registrationId;
        httpCommon.get(appkey, appSecret, path, function (err, data) {
            if (err != null) {
                callback(err, data);
            } else {
                if (typeof data == 'string') {
                    data = JSON.parse(data);
                }
                callback(null, data['tags']);
            }
        })
    },

    /**
     * 设备绑定标签
     * @param tags
     * @param registrationId
     * @return  (true 表示成功)
     */
    addDeviceTags: function (appkey, appSecret, tags, registrationId, callback) {
        if (registrationId == null || registrationId == undefined || registrationId == "") {
            callback("registrationId is null ", null);
            return false;
        }
        if (tags instanceof  Array) {
            if (tags == null || tags.length < 1) {
                callback("tags is null ", null);
                return false;
            }
        } else {
            callback("tags type should be array ", null);
            return false;
        }

        var path = deviceUrl + "/tags/";
        var json = {
            'registrationId': registrationId,
            'tags': tags,
            'opType': 1
        }
        httpCommon.post(appkey, appSecret, path, json, function (err, data) {
            if (err != null) {
                callback && callback(err, data);
            } else {
                callback && callback(null, true);
            }
        });
    },

    /**
     * 删除设备指定标签
     * @param tags
     * @param registrationId
     * @return  (true 表示成功)
     */
    removeDeviceTags: function (appkey, appSecret, tags, registrationId, callback) {
        if (registrationId == null || registrationId == undefined || registrationId == "") {
            callback("registrationId is null ", null);
            return false;
        }
        if (tags instanceof  Array) {
            if (tags == null || tags.length < 1) {
                callback("tags is null ", null);
                return false;
            }
        } else {
            callback("tags type should be array ", null);
            return false;
        }
        var path = deviceUrl + "/tags/";
        var json = {
            'registrationId': registrationId,
            'tags': tags,
            'opType': 2
        }
        httpCommon.post(appkey, appSecret, path, json, function (err, data) {
            if (err != null) {
                callback && callback(err, data);
            } else {
                callback && callback(null, true);
            }
        });
    },

    /**
     * 清空设备标签
     * @param registrationId
     * @return (true 表示成功)
     */
    cleanDeviceTags: function (appkey, appSecret, registrationId, callback) {
        if (registrationId == null || registrationId == undefined || registrationId == "") {
            callback("registrationId is null ", null);
            return false;
        }
        var path = deviceUrl + "/tags/";
        var json = {
            'registrationId': registrationId,
            'opType': 3
        }
        httpCommon.post(appkey, appSecret, path, json, function (err, data) {
            if (err != null) {
                callback && callback(err, data);
            } else {
                callback && callback(null, true);
            }
        });
    }

}
module.exports = deviceClient;