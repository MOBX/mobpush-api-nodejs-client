# [MobPush API for NodeJs](http://wiki.mob.com/mobpush-rest-api-接口文档/)

![image](https://github.com/MOBX/MOB-SMS-WEBAPI/blob/master/doc/images/logo.png)

**[MobPush API for NodeJs](http://wiki.mob.com/mobpush-rest-api-接口文档/)** 
为了帮助开发者更方便接入MobPush免费推送SDK，提供完整的API接口的JS实现，包含设备操作相关接口、推送操作相关接口以及公共接口。

了解更多 [MobPush 免费推送SDK.](http://mobpush.mob.com)


## 优势

**免费使用**、**自定义UI**、**稳定服务**、**流程体验**、**数据同步**、**专业技术团队服务**

## 接口
* 推送接口
	* 发送推送
	* 查询推送（根据batchId）
	* 查询推送（根据workno）
* 推送统计接口
	* 查询推送统计（根据batchId）
	* 查询推送统计（根据workno）
* 别名操作接口
	* 查询别名
	* 设置别名
* 标签操作接口
	* 查询标签
	* 设置标签
* 公共接口
	* 地理位置信息接口	


 
## 使用注意事项
* 需要依赖模块
```xml
  "dependencies": {
    "crypto": "0.0.3",
    "express": "^4.16.2",
    "request": "^2.51.0"
  }
``` 
* 错误码请参考 
  [MobPush Api 错误码](http://wiki.mob.com/mobpush-rest-api-接口文档/#map-6)

## 使用DEMO 

发送推送示例片段代码，一下代码摘抄demo.js

```xml    
var push = new PushWork.PushWork(PushWork.ALL,"test content" , PushWork.notify) //初始化基础信息
    .buildTarget(1, null, null, null, null, null)  // 设置推送范围
    .buildAndroid("Android Title", 0, null, true, true, true) //定制android样式
    .buildIos("ios Title", "ios Subtitle", null, 1, null, null, null, null) //定制ios设置
    .buildExtra(1, "{\"key1\":\"value\"}") // 设置扩展信息
;
pushClient.sendPush(appkey, appSecret ,push.payload,function(err, data){
    console.log(err);
    console.log(data);
});
 
```