/**
 * Created by hlliu on 2018/2/27.
 * 地区信息相关接口
 */
var httpCommon = require("./../utils/HttpUtils");

var baseUrl = "http://api.push.mob.com";

var areaClient = {

    /**
     * 获取地理位置列表 -- 子级列表
     * 如果需要查询中国下所有省份信息：parentId可以传入null 或者 ‘0’
     * */
    getArea:function(appkey, appSecret,parentId,callback){
        if(parentId == null || parentId == ""){
            parentId = "0";
        }
        var path = baseUrl+"/area/" + parentId;
        httpCommon.get(appkey, appSecret,path,callback);
    }
}

module.exports = areaClient;