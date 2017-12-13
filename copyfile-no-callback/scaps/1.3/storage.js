cordova.define("cordova/plugin/storage/1.3",function(e,r,o){function t(e){}function n(e){return !0}var a;window.PalmSystem?(t("Window.PalmSystem Available"),a=e("cordova/plugin/webos/service")):a={Request:function(e,r){t(e+" invoked. But I am a dummy because PalmSystem is not available"),"function"==typeof r.onFailure&&r.onFailure({returnValue:!1,errorText:"PalmSystem Not Available. Cordova is not installed?"})}};var i=function(){};Error.ERROR_CODE={IO_ERROR:"IO_ERROR",DEVICE_ERROR:"DEVICE_ERROR",BAD_PARAMETER:"BAD_PARAMETER",SERVER_ERROR:"SERVER_ERROR",NETWORK_ERROR:"NETWORK_ERROR",SYSTEM_ERROR:"SYSTEM_ERROR"},i.SCAP_URI="",i.MAX_BUFFER_LENGTH=10240,i.AppMode={USB:"usb",LOCAL:"local"},i.prototype.downloadFirmware=function(e,r,o){a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"downloadFirmware",parameters:{uri:o.uri},onSuccess:function(o){o.returnValue===!0?e():r({errorCode:o.errorCode,errorText:o.errorText})},onFailure:function(e){r({errorCode:e.errorCode,errorText:e.errorText})}})},i.prototype.upgradeFirmware=function(e,r){a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"upgradeFirmware",parameters:{},onSuccess:function(o){o.returnValue===!0?e():r({errorCode:o.errorCode,errorText:o.errorText})},onFailure:function(e){r({errorCode:e.errorCode,errorText:e.errorText})}})},i.prototype.getFirmwareUpgradeStatus=function(e,r){a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"getFirmwareUpgradeStatus",parameters:{},onSuccess:function(o){o.returnValue===!0?e({status:o.status,upgradeProgress:o.upgradeProgress,downloadProgress:o.downloadProgress}):r({errorCode:o.errorCode,errorText:o.errorText})},onFailure:function(e){r({errorCode:e.errorCode,errorText:e.errorText})}})},i.prototype.changeLogoImage=function(e,r,o){a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"changeLogoImage",parameters:{uri:o.uri},onSuccess:function(o){o.returnValue===!0?e():r({errorCode:o.errorCode,errorText:o.errorText})},onFailure:function(e){r({errorCode:e.errorCode,errorText:e.errorText})}})},i.prototype.upgradeApplication=function(e,r,o){a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"upgradeApplication",parameters:{from:"remote",type:void 0===o||null===o?"zip":o.type,to:void 0===o||null===o?i.AppMode.LOCAL:o.to,recovery:void 0===o||null===o?!1:o.recovery},onSuccess:function(o){o.returnValue===!0?setTimeout(function(){e()},3e3):r({errorCode:o.errorCode,errorText:o.errorText})},onFailure:function(e){r({errorCode:e.errorCode,errorText:e.errorText})}})},i.prototype.removeApplication=function(e,r,o){a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"removeApplication",parameters:{to:o.to},onSuccess:function(o){o.returnValue===!0?e():r({errorCode:o.errorCode,errorText:o.errorText})},onFailure:function(e){r({errorCode:e.errorCode,errorText:e.errorText})}})},i.prototype.copyFile=function(e,r,o){if(t("Options: "+JSON.stringify(o,null,3)),o.maxRedirection&&o.maxRedirection>5)return t("Bad options TOO MANY REDIRECTION"),void r({errorCode:"BAD_PARAMETER",errorText:"Redirect cannot be more that 5"});if(o.headers&&JSON.stringify(o.headers).length>1024)return t("header too long header too long"),void r({errorCode:"BAD_PARAMETER",errorText:"Header data cannot be bigger than 1K"});if("undefined"==typeof o.httpOption&&(o.httpOption={}),o.httpOption.headers&&JSON.stringify(o.httpOption.headers).length>1024)return t("header too long header too long"),void r({errorCode:"BAD_PARAMETER",errorText:"Header data cannot be bigger than 1K"});if((o.maxRedirection||o.headers)&&(o.maxRedirection&&"undefined"==typeof o.httpOption.maxRedirection&&(o.httpOption.maxRedirection=o.maxRedirection),o.headers&&"undefined"==typeof o.httpOption.headers&&(o.httpOption.headers=o.headers)),"undefined"!=typeof o.httpOption.maxRedirection)if("undefined"!=typeof o.maxRedirection){if(o.httpOption.maxRedirection!==o.maxRedirection)return void r({errorCode:"BAD_PARAMETER",errorText:"Both options.httpOption.maxRedirection and options.maxRedirection are exists,but different value. What value you want to use?"})}else o.maxRedirection=o.httpOption.maxRedirection;t(o),a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"fs/copyFile",parameters:{dest:o.destination,src:o.source,ftpOption:o.ftpOption,httpOption:o.httpOption},onSuccess:function(o){o.returnValue===!0?(t("SUCCESS"),e()):(t("Err: "+o.errorText),r({errorCode:o.errorCode,errorText:o.errorText}))},onFailure:function(e){t("Err: "+e.errorText),r({errorCode:e.errorCode,errorText:e.errorText})}})},i.prototype.removeFile=function(e,r,o){if(!o||!n(o.file))return void r({errorCode:"BAD_PARAMETER",errorText:"options.file is a mandatory parameter"});var i={file:o.file};o.recursive===!0&&(i.recursive=!0),a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"fs/removeFile",parameters:i,onSuccess:function(o){t("onSuccess"),o.returnValue===!0?e():r({errorCode:o.errorCode,errorText:o.errorText})},onFailure:function(e){t("onFailure"),r({errorCode:e.errorCode,errorText:e.errorText})}})},i.prototype.listFiles=function(e,r,o){var i={};if(o&&o.path){if(!n(o.path))return void r({errorCode:"BAD_PARAMETER",errorText:"File URI is not valid."});i.pathURI=o.path}else i.pathURI="file://internal/";a.Request("luna://com.webos.service.commercial.signage.storageservice/",{method:"fs/listFiles",parameters:i,onSuccess:function(o){if(o.returnValue===!0){for(var n=[],a=0;a<o.files.length;++a){t(o.files[a]);var i={name:o.files[a].name,type:"folder"===o.files[a].type?"folder":"file",size:o.files[a].size};n.push(i)}var s={files:n,totalCount:o.totalCount};e(s)}else r({errorCode:o.errorCode,errorText:o.errorText})},onFailure:function(e){r({errorCode:e.errorCode,errorText:e.errorText})}})},i.prototype.getStorageInfo=function(e,r){a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"fs/storageInfo",parameters:{},onSuccess:function(o){if(t("returned : "+JSON.stringify(o,null,3)),o.returnValue===!0){t("returned : "+JSON.stringify(o,null,3));var n={free:o.spaceInfo.freeSize,total:o.spaceInfo.totalSize,used:o.spaceInfo.usedSize,externalMemory:o.externalStorage};e(n)}else r({errorCode:o.errorCode,errorText:o.errorText})},onFailure:function(e){r({errorCode:e.errorCode,errorText:e.errorText})}})},i.prototype.mkdir=function(e,r,o){if(!o||!n(o.path))return void r({errorCode:"BAD_PARAMETER",errorText:"options.path is a mandatory parameter"});var i={pathURI:o.path};a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"fs/mkdir",parameters:i,onSuccess:function(o){t("onSuccess"),o.returnValue===!0?e():r({errorCode:o.errorCode,errorText:o.errorText})},onFailure:function(e){t("onFailure"),r({errorCode:e.errorCode,errorText:e.errorText})}})},i.prototype.exists=function(e,r,o){if(!o||!n(o.path))return t("BAD_PARAMETER"),void r({errorCode:"BAD_PARAMETER",errorText:"options.path is a mandatory parameter"});var i={pathURI:o.path};a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"fs/exists",parameters:i,onSuccess:function(o){if(t("onSuccess"),o.returnValue===!0){t("returned : "+JSON.stringify(o,null,3));var n={exists:o.exists};e(n)}else r({errorCode:o.errorCode,errorText:o.errorText})},onFailure:function(e){t("onFailure"),r({errorCode:e.errorCode,errorText:e.errorText})}})},i.prototype.readFile=function(e,r,o){if(o)if(n(o.path))if(o.length&&(o.length>i.MAX_BUFFER_LENGTH||o.length<1))r({errorCode:"BAD_PARAMETER",errorText:"length should be > 0 and < "+i.MAX_BUFFER_LENGTH});else if(o.position&&o.position<0)r({errorCode:"BAD_PARAMETER",errorText:"position should be > 0"});else{var t={};t.path=o.path,t.length=o.length?o.length:i.MAX_BUFFER_LENGTH,t.position=o.position?o.position:0,t.encoding=o.encoding?o.encoding:"utf-8",a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"fs/readFile",parameters:t,onSuccess:function(o){if(o.returnValue)if("binary"===t.encoding){for(var n=o.data,a=new Uint8Array(n.length),i=0;i<n.length;++i)a[i]=n[i];e({data:a.buffer})}else e({data:o.data});else r({errorCode:o.errorCode,errorText:o.errorText})},onFailure:function(e){r({errorCode:e.errorCode,errorText:e.errorText})}})}else r({errorCode:"BAD_PARAMETER",errorText:"options.path is a mandatory parameter"});else r({errorCode:"BAD_PARAMETER",errorText:"options.path is a mandatory parameter"})},i.prototype.writeFile=function(e,r,o){if(o)if(n(o.path))if(o.data)if(o.mode&&"truncate"!==o.mode&&"append"!==o.mode&&"position"!==o.mode)r({errorCode:"BAD_PARAMETER",errorText:"mode should be 'truncate'|'append'|'position'"});else if(o.position&&o.position<0)r({errorCode:"BAD_PARAMETER",errorText:"position should be > 0"});else if(o.offset&&o.offset<0)r({errorCode:"BAD_PARAMETER",errorText:"offset should be > 0"});else if(o.length&&(o.length>i.MAX_BUFFER_LENGTH||o.length<1))r({errorCode:"BAD_PARAMETER",errorText:"length should be > 0 and < "+i.MAX_BUFFER_LENGTH});else if(o.encoding&&"utf8"!==o.encoding&&"binary"!==o.encoding&&"base64"!==o.encoding)r({errorCode:"BAD_PARAMETER",errorText:"Invalid encoding: "+o.encoding});else{t("REQUEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");var s={};s.path=o.path,s.mode=o.mode?o.mode:"truncate",s.position=o.position?o.position:0,s.encoding=o.encoding?o.encoding:"utf8";var d=o.offset?o.offset:0;if("binary"===s.encoding){t("binary, size is: "+o.data.byteLength);var c=new Uint8Array(o.data);t("uint8View: "+c);for(var u=o.length?o.length:i.MAX_BUFFER_LENGTH,l=[],p=0,f=d;f<c.length&&u>p;++f,p++)l[p]=c[f];t("array length: "+p),s.data=l,s.length=p,s.offset=0}else if("base64"===s.encoding){var T=o.length?o.length:i.MAX_BUFFER_LENGTH;t("base64, size is: "+o.data.length);var m,g=o.data,R=window.atob(g),h=R.substring(d,d+T),x=new Uint8Array(h.length);for(m=0;m<h.length;m++)x[m]=h.charCodeAt(m);var A=[];for(m=0;m<x.length;++m)A[m]=x[m];s.data=A,s.length=A.length,s.offset=0}else{var E=o.length?o.length:i.MAX_BUFFER_LENGTH;s.data=o.data.substring(d,d+E),s.length=s.data.length,s.offset=0}try{a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"fs/writeFile",parameters:s,onSuccess:function(o){t("onSuccess!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"),o.returnValue?e({written:o.written}):(t("FAILED: "+o.errorText),r({errorCode:o.errorCode,errorText:o.errorText}))},onFailure:function(e){t("onFailure!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"),t("FAILED: "+e.errorText),r({errorCode:e.errorCode,errorText:e.errorText})}})}catch(C){t("EXCEPTION!!!!!!!!!!!!!!!!!"+C),r({errorCode:"STWF",errorText:"Storage.writeFile() error is occured during operation."})}}else r({errorCode:"BAD_PARAMETER",errorText:"options.data is a mandatory parameter"});else r({errorCode:"BAD_PARAMETER",errorText:"options.path is a is not valid"});else r({errorCode:"BAD_PARAMETER",errorText:"options.path is a mandatory parameter"})},i.prototype.statFile=function(e,r,o){if(o&&n(o.path))if(o.path)try{a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"fs/statFile",parameters:{path:o.path},onSuccess:function(o){t("onSuccess!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"),o.returnValue?e(o.stat):(t("FAILED: "+o.errorText),r({errorCode:o.errorCode,errorText:o.errorText}))},onFailure:function(e){t("onFailure!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"),t("FAILED: "+e.errorText),r({errorCode:e.errorCode,errorText:e.errorText})}})}catch(i){t("EXCEPTION!!!!!!!!!!!!!!!!!"+i),r({errorCode:"STSF",errorText:"Storage.statFile() error is occured during operation."})}else r({errorCode:"BAD_PARAMETER",errorText:"options.path is a mandatory parameter"});else r({errorCode:"BAD_PARAMETER",errorText:"options.path is a mandatory parameter"})},i.prototype.removeAll=function(e,r,o){if(o)if(o.device)try{a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"fs/removeAll",parameters:{device:o.device},onSuccess:function(o){t("onSuccess!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"),o.returnValue?e():(t("FAILED: "+o.errorText),r({errorCode:o.errorCode,errorText:o.errorText}))},onFailure:function(e){t("onFailure!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"),t("FAILED: "+e.errorText),r({errorCode:e.errorCode,errorText:e.errorText})}})}catch(n){t("EXCEPTION!!!!!!!!!!!!!!!!!"+n),r({errorCode:"STRA",errorText:"Storage.removeAll() error is occured during operation."})}else r({errorCode:"BAD_PARAMETER",errorText:"options.device is a mandatory parameter"});else r({errorCode:"BAD_PARAMETER",errorText:"options.device is a mandatory parameter"})},i.prototype.fsync=function(e,r,o){try{var i={};if(o&&o.path){if(!n(o.path))return void r({errorCode:"BAD_PARAMETER",errorText:"Invalid File URI"});i.path=o.path}a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"fs/fsyncFile",parameters:i,onSuccess:function(o){t("onSuccess!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"),o.returnValue?e():(t("FAILED: "+o.errorText),r({errorCode:o.errorCode,errorText:o.errorText}))},onFailure:function(e){t("onFailure!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"),t("FAILED: "+e.errorText),r({errorCode:e.errorCode,errorText:e.errorText})}})}catch(s){t("EXCEPTION!!!!!!!!!!!!!!!!!"+s),r({errorCode:"STFS",errorText:"Storage.fsync() error is occured during operation."})}},i.prototype.moveFile=function(e,r,o){if(o)if(n(o.oldPath))if(n(o.newPath))try{a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"fs/moveFile",parameters:{oldPath:o.oldPath,newPath:o.newPath},onSuccess:function(o){t("onSuccess!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"),o.returnValue?e():(t("FAILED: "+o.errorText),r({errorCode:o.errorCode,errorText:o.errorText}))},onFailure:function(e){t("onFailure!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"),t("FAILED: "+e.errorText),r({errorCode:e.errorCode,errorText:e.errorText})}})}catch(i){t("EXCEPTION!!!!!!!!!!!!!!!!!"+i),r({errorCode:"STMF",errorText:"Storage.moveFile() error is occured during operation."})}else r({errorCode:"BAD_PARAMETER",errorText:"options.newPath is a mandatory parameter"});else r({errorCode:"BAD_PARAMETER",errorText:"options.oldpath is a mandatory parameter"});else r({errorCode:"BAD_PARAMETER",errorText:"options.path is a mandatory parameter"})},i.prototype.unzipFile=function(e,r,o){if(o)if(n(o.zipPath))if(n(o.targetPath))try{a.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"fs/unzip",parameters:{zipPath:o.zipPath,targetPath:o.targetPath},onSuccess:function(o){t("onSuccess!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"),o.returnValue?e():(t("FAILED: "+o.errorText),r({errorCode:o.errorCode,errorText:o.errorText}))},onFailure:function(e){t("onFailure!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"),t("FAILED: "+e.errorText),r({errorCode:e.errorCode,errorText:e.errorText})}})}catch(i){t("EXCEPTION!!!!!!!!!!!!!!!!!"+i),r({errorCode:"STUF",errorText:"Storage.unzipFile() error is occured during operation."})}else r({errorCode:"BAD_PARAMETER",errorText:"options.targetPath is a mandatory parameter"});else r({errorCode:"BAD_PARAMETER",errorText:"options.zipPath is a mandatory parameter"});else r({errorCode:"BAD_PARAMETER",errorText:"options.path is a mandatory parameter"})},o.exports=i});