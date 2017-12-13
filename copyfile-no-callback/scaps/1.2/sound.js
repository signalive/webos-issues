cordova.define("cordova/plugin/sound/1.2",function(e,c,f){function g(h){}var a;if(window.PalmSystem){g("Window.PalmSystem Available");a=e("cordova/plugin/webos/service")}else{a={Request:function(h,i){g(h+" invoked. But I am a dummy because PalmSystem is not available");if(typeof i.onFailure==="function"){i.onFailure({returnValue:false,errorText:"PalmSystem Not Available. Cordova is not installed?"})}}}}var d=function(){};function b(i,j,h){if(i.errorCode===undefined||i.errorCode===null){i.errorCode=j}if(i.errorText===undefined||i.errorText===null){i.errorText=h}}d.prototype.getSoundStatus=function(h,i){g("getSoundStatus: ");a.Request("luna://com.webos.audio/",{method:"getVolume",onSuccess:function(j){g("getSoundStatus: On Success");if(j.returnValue===true){var k={};k.level=j.volume;k.muted=j.muted;a.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"get",parameters:{category:"commercial",keys:["enableSpeaker"]},onSuccess:function(l){g("getSoundStatus: On Success 2");if(l.returnValue===true){k.externalSpeaker=(l.settings.enableSpeaker==="on"?true:false);if(h&&typeof h==="function"){h(k)}}},onFailure:function(l){g("getSoundStatus: On Failure 2");delete l.returnValue;if(i&&typeof i==="function"){b(l,"SGSS","Sound.getSoundStatus returns failure.");i(l)}}})}},onFailure:function(j){g("getSoundStatus: On Failure");delete j.returnValue;if(i&&typeof i==="function"){b(j,"SGSS","Sound.getSoundStatus returns failure.");i(j)}}});g("Sound.getSoundStatus Done")};d.prototype.setVolumeLevel=function(i,j,k){g("setVolumeLevel: "+JSON.stringify(k));if(typeof k.level!=="number"||isNaN(k.level)||k.level<0||k.level>100){if(j&&typeof j==="function"){var h={};b(h,"SSVL","Sound.setVolumeLevel returns failure. out of range or invalid parameter type.");j(h)}return}a.Request("luna://com.webos.audio/",{method:"setVolume",parameters:{volume:k.level},onSuccess:function(l){g("setVolumeLevel: On Success");if(l.returnValue===true){if(i&&typeof i==="function"){i()}}},onFailure:function(l){g("setVolumeLevel: On Failure");delete l.returnValue;if(j&&typeof j==="function"){b(l,"SSVL","Sound.setVolumeLevel returns failure.");j(l)}}});g("Sound.setVolumeLevel Done")};d.prototype.setExternalSpeaker=function(i,j,l){g("setExternalSpeaker: "+JSON.stringify(l));if(typeof l.externalSpeaker!=="boolean"){if(j&&typeof j==="function"){var h={};b(h,"SSVL","Sound.setExternalSpeaker returns failure. out of range or invalid parameter type.");j(h)}return}var k=null;switch(l.externalSpeaker){case true:k="on";break;case false:k="off";break}a.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"set",parameters:{category:"commercial",settings:{enableSpeaker:k}},onSuccess:function(){g("setExternalSpeaker: On Success");if(typeof i==="function"){i()}},onFailure:function(m){g("setExternalSpeaker: On Failure");delete m.returnValue;if(typeof j==="function"){b(m,"SSES","Sound.setExternalSpeaker returns failure.");j(m)}}});g("Sound.setExternalSpeaker Done")};d.prototype.setMuted=function(i,j,k){g("setMuted: "+JSON.stringify(k));if(typeof k.muted!=="boolean"){if(j&&typeof j==="function"){var h={};b(h,"SSVL","Sound.setMuted returns failure. out of range or invalid parameter type.");j(h)}return}a.Request("luna://com.webos.audio/",{method:"setMuted",parameters:{muted:k.muted},onSuccess:function(l){g("setMuted: On Success");if(l.returnValue===true){if(i&&typeof i==="function"){i()}}},onFailure:function(l){g("setMuted: On Failure");delete l.returnValue;if(j&&typeof j==="function"){b(l,"SSM","Sound.setMuted returns failure.");j(l)}}});g("Sound.setMuted Done")};f.exports=d});
