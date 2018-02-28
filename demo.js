
/**
 * Created by hlliu on 2018/2/28.
 * MobPush Client for NodeJs
 */


var areaClient = require("./api/AreaClient");
var deviceClient = require("./api/deviceClient");
var pushClient = require("./api/pushClient");
var PushWork = require("./api/PushWork");
var statsClient = require("./api/statsClient");

var appkey = "您的appkey";
var appSecret = "appkey对应Secret";

/*
areaClient.getArea("moba6b6c6d6","b89d2427a3bc7ad1aea1e1e8c1d36bf3",null,function(err,data){
    console.log(err);
    console.log(data);
})
*/

/*
deviceClient.getDeviceAlias(appkey, appSecret ,"5a5336657ed9ff9caf700135",function(err, data){
    console.log(err);
    console.log(data);
});
*/

/*deviceClient.setDeviceAlias(appkey, appSecret ,"aliastes","5a5336657ed9ff9caf700135",function(err, data){
 console.log(err);
 console.log(data);
 });*/

/*deviceClient.cleanDeviceAlias(appkey, appSecret , "5a5336657ed9ff9caf700135",function(err, data){
    console.log(err);
    console.log(data);
});*/

/*deviceClient.getDeviceTags(appkey, appSecret ,"59f96c815ebdfe7f063b69ae",function(err, data){
 console.log(err);
 console.log(data);
 });*/

/*deviceClient.addDeviceTags(appkey, appSecret,['xxx'] ,"5a5336657ed9ff9caf700135",function(err, data){
    console.log(err);
    console.log(data);
});*/

/*deviceClient.removeDeviceTags(appkey, appSecret,['sa','333'] ,"5a5336657ed9ff9caf700135",function(err, data){
    console.log(err);
    console.log(data);
});*/

/*
deviceClient.cleanDeviceTags(appkey, appSecret ,"5a5336657ed9ff9caf700135",function(err, data){
    console.log(err);
    console.log(data);
})*/

/*pushClient.getPushByBatchId(appkey, appSecret ,"5a911aed3dde6fd72383a972",function(err, data){
    console.log(err);
    console.log(data);
});

pushClient.getPushByWorkno(appkey, appSecret ,"1232131231231xx",function(err, data){
    console.log(err);
    console.log(data);
});*/

/*
var push = new PushWork.PushWork(PushWork.ALL,"test content" , PushWork.notify) //初始化基础信息
    .buildTarget(1, null, null, null, null, null)  // 设置推送范围
    .buildAndroid("Android Title", 0, null, true, true, true) //定制android样式
    .buildIos("ios Title", "ios Subtitle", null, 1, null, null, null, null) //定制ios设置
    .buildExtra(1, "{\"key1\":\"value\"}") // 设置扩展信息
;
pushClient.sendPush(appkey, appSecret ,push.payload,function(err, data){
    console.log(err);
    console.log(data);
});*/

/*statsClient.getStatsByBatchId(appkey, appSecret ,"5a911aed3dde6fd72383a972",function(err, data){
    console.log(err);
    console.log(data);
});


statsClient.getStatsByWorkno(appkey, appSecret ,"1232131231231xx",function(err, data){
    console.log(err);
    console.log(data);
});*/
