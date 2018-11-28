/**
 * Created by hlliu on 2018/2/28.
 * 组装推送内容
 */

/**
 * 设置扩展信息
 * @param unlineTime 整数 1~ 10
 * @param extras
 * @param iosProduction  整数 0 ,1
 * @return PushWork
 */
function buildExtra(unlineTime,extras,iosProduction){
    if(unlineTime  != null && (unlineTime > 0 && unlineTime <= 10))
        this.payload.unlineTime = unlineTime;
    if(extras != null)
        this.payload.extras = extras;
    if(iosProduction != null && (iosProduction == 0 || iosProduction == 1))
        this.payload.iosProduction = iosProduction;
    return this;
}

/**
 * moblink 跳转
 * @param {moblink url} scheme 
 * @param {moblink 参数} data 
 * @return PushWork
 */
function buildScheme(scheme,data){
    if(scheme != null)
        this.payload.scheme = scheme;
    if(scheme != null)
        this.payload.data = data;
    return this;
}

/**
 * 设置推送范围
 * @param target
 * @param tags
 * @param alias
 * @param registrationIds
 * @param city
 * @param block
 * @return PushWork
 */
function buildTarget(){
    if (arguments.length > 0) {
        var target = arguments[0];
        var val = arguments[1];
        if(target == null || target == 1){
            this.payload.target = target;
            return this;
        }else if(target  == 2 && val != null && (val instanceof  Array)){
            this.payload.alias = val;
        }else if(target == 3 && val != null  && (val instanceof  Array)){
            this.payload.tags = val;
        }if(target  == 4 && val != null  && (val instanceof  Array)){
            this.payload.registrationIds = val;
        }if(target == 5 && !val){
            this.payload.city = val;
        }if(target == 6 && !val){
            this.payload.block = val;
        }
		this.payload.target = target;
    }
    return this;
}


/**
 * 设置Android信息
 * @param androidTitle
 * @param androidstyle
 * @param androidContent
 * @param androidVoice
 * @param androidShake
 * @param androidLight
 * @return PushWork
 */
function buildAndroid(androidTitle, androidstyle,androidContent,
    androidVoice, androidShake, androidLight) {
    if (androidTitle != null)
        this.payload.androidTitle = androidTitle;
    if (androidstyle != null && (androidstyle instanceof  Number))
        this.payload.androidstyle = androidstyle;
    if (androidContent != null && androidContent != null  && (androidContent instanceof  Array))
        this.payload.androidContent = androidContent;
    if (androidVoice != null)
        this.payload.androidVoice = androidVoice;
    if (androidShake != null)
        this.payload.androidShake = androidShake;
    if (androidLight != null)
        this.payload.androidLight = androidLight;
    return this;
}

/**
 * 设置IOS信息
 * @param iosTitle
 * @param iosSubtitle
 * @param iosSound
 * @param iosBadge
 * @param iosCategory
 * @param iosSlientPush
 * @param iosContentAvailable
 * @param iosMutableContent
 * @return PushWork
 */
function buildIos(iosTitle, iosSubtitle, iosSound, iosBadge, iosCategory,
    iosSlientPush, iosContentAvailable, iosMutableContent) {
    if (iosTitle != null && iosTitle != undefined)
        this.payload.iosTitle = iosTitle;
    if (iosSubtitle != null && iosSubtitle != undefined)
        this.payload.iosSubtitle = iosSubtitle;
    if (iosSound != null && iosSound != undefined)
        this.payload.iosSound = iosSound;
    if (iosBadge != null)
        this.payload.iosBadge = iosBadge;
    if (iosCategory != null)
        this.payload.iosCategory = iosCategory;
    if (iosSlientPush != null)
        this.payload.iosSlientPush = iosSlientPush;
    if (iosContentAvailable != null)
        this.payload.iosContentAvailable = iosContentAvailable;
    if (iosMutableContent != null)
        this.payload.iosMutableContent = iosMutableContent;
    return this;
}


PushWork.prototype.buildExtra = buildExtra;
PushWork.prototype.buildTarget = buildTarget;
PushWork.prototype.buildAndroid = buildAndroid;
PushWork.prototype.buildIos = buildIos;
PushWork.prototype.buildScheme = buildScheme;

PushWork.prototype.ALL = [1,2]; //所有平台
PushWork.prototype.notify=1; //通知消息
PushWork.prototype.custom=1; //透传消息

//module.exports = pushWork;
function  PushWork(plats, content, type) {
    this.payload = {};
    if(plats != null && (plats instanceof  Array)){
        this.payload.plats = plats;
    }
    if(content != null && content != undefined){
        this.payload.content = content;
    }
    if(type != null  && (type == 1 || type == 2) ){
        this.payload.type = type;
    }
}


exports.PushWork = PushWork