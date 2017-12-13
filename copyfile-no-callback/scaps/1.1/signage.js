cordova.define("cordova/plugin/signage/1.1",function(j,z,c){var A;function h(B){console.log(B)}if(window.PalmSystem){h("Window.PalmSystem Available");A=j("cordova/plugin/webos/service")}else{h("Window.PalmSystem is NOT Available");A={Request:function(B,C){h(B+" invoked. But I am a dummy because PalmSystem is not available");if(typeof C.onFailure==="function"){C.onFailure({returnValue:false,errorCode:"CORDOVA_ERR",errorText:"PalmSystem Not Available. Cordova is not installed?"})}}}}var u=function(B){var C=l[B];h(JSON.stringify(C,null,3));if(C&&C.getEvent===true){if(l[B].listenerObj){l[B].listenerObj.cancel();l[B].getEvent=false;l[B].listenerObj=null}}};var m=function(C,B){var D=l[C];if(D&&typeof D.createListener==="function"){D.listenerObj=D.createListener(B);D.getEvent=true}};function k(C){if(C.substring(0,"ext://".length)!=="ext://"){return false}var B=C.substring("ext://".length);h("Type :"+B);var D=B.split(":");h("splited :"+D);if(D.length===1){if(D[0]==="internal_memory"){return true}}else{if(D.length===2){if(D[0]==="hdmi"||D[0]==="dvi"||D[0]==="dp"){if(D[1].match(/[0-9]/m)){return true}}return false}else{return false}}}function g(B){if(B==="internal_usb"){return"ext://internal_memory"}else{if(B==="dp"){return"ext://dp:1"}else{if(B==="dvi"){return"ext://dvi:1"}else{if(B==="hdmi1"){return"ext://hdmi:1"}else{if(B==="hdmi2"){return"ext://hdmi:2"}else{return false}}}}}}function d(C){if(C.substring(0,"ext://".length)!=="ext://"){h("Bad prefix: "+C);return false}var B=C.substring("ext://".length);h("body is: "+B);if(B==="internal_memory"){return"internal_usb"}else{var D=B.split(":");if(D.length!==2){h("Bad Syntax: "+C);return false}if(D[0]==="hdmi"){return D[0]+D[1]}else{return D[0]}}}function s(B,D){for(var C in B){if(B[C]===D){return true}}return false}var p={FAILOVER_MODE:"failover",FAILOVER_PRIORITY:"failoverPriority",IR_OPERATION_MODE:"enableIrRemote",LOCALKEY_OPERATION_MODE:"enableLocalKey",OSD_PORTRAIT_MODE:"osdPortraitMode",TILE_MODE:"tileMode",TILE_ID:"tileId",TILE_ROW:"tileRow",TILE_COLUME:"tileCol",TILE_NATURALMODE:"naturalMode",DPM_MODE:"dpmMode",AUTOMATIC_STANDBY_MODE:"autoSB",ISM_METHOD:"ismmethod",SES_MODE:"smartEnergy",DO_15OFF_MODE:"15off",MONITOR_FAN:"monitorFan",MONITOR_SIGNAL:"monitorSignal",MONITOR_LAMP:"monitorLamp",MONITOR_SCREEN:"monitorScreen",MONITOR_AUDIO:"monitorAudio",AUDIO_SOURCE_HDMI1:"audioSourceHdmi1",AUDIO_SOURCE_HDMI2:"audioSourceHdmi2",AUDIO_SOURCE_DP:"audioSourceDp",};var q=function(B){h("Create Listener for monitorTemperature");var C=A.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"systemMonitor/getTemperature",parameters:{subscribe:true},onSuccess:function(D){h("temperature!!!!!!!!! : "+JSON.stringify(D,null,3));if(D.returnValue===true){var E={source:a.MonitoringSource.THERMOMETER,type:a.EventType.CURRENT_TEMPERATURE,data:{temperature:D.temperature}};if(B){B(E)}}},onFailure:function(D){h("monitor_temperature!!!!!!!!! : FAIL "+JSON.stringify(D,null,3))}});return C};var f=function(B){h("Create Listener for monitorFan");var C=A.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"systemMonitor/getFanEvent",parameters:{subscribe:true},onSuccess:function(D){h("monitor_fan!!!!!!!!! : "+JSON.stringify(D,null,3));if(D.returnValue===true){var E={source:a.MonitoringSource.FAN,type:a.EventType.FAN_STATUS,data:{status:D.fanFault}};if(B){B(E)}}},onFailure:function(D){h("monitor_fan!!!!!!!!! : FAIL "+JSON.stringify(D,null,3))}});return C};var i=function(B){h("Create Listener for monitorLamp");var C=A.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"systemMonitor/getLampEvent",parameters:{subscribe:true},onSuccess:function(D){h("monitor_lamp!!!!!!!!! : "+JSON.stringify(D,null,3));if(D.returnValue===true){var E={source:a.MonitoringSource.LAMP,type:a.EventType.LAMP_STATUS,data:{status:D.lampFault}};if(B){B(E)}}},onFailure:function(D){h("monitor_lamp!!!!!!!!! : FAIL "+JSON.stringify(D,null,3))}});return C};var o=function(B){h("Create Listener for monitorSignal");var C=A.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"systemMonitor/getSignalEvent",parameters:{subscribe:true},onSuccess:function(D){h("monitor_signal!!!!!!!!! : "+JSON.stringify(D,null,3));if(D.returnValue===true){var E={type:a.EventType.NO_SIGNAL,source:a.MonitoringSource.SIGNAL};if(D.noSignal===true){E.data.status="no_signal"}else{E.data.status="signal_available"}if(B){B(E)}}},onFailure:function(D){h("monitor_signal!!!!!!!!! : FAIL "+JSON.stringify(D,null,3))}});return C};var v=function(B){h("Create Listener for monitorScreen");var C=A.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"systemMonitor/getScreenEvent",parameters:{subscribe:true},onSuccess:function(D){h("monitor_screen!!!!!!!!! : "+JSON.stringify(D,null,3));if(D.returnValue===true){var E={source:a.MonitoringSource.SCREEN,type:a.EventType.SCREEN_STATUS,data:{status:D.screen}};if(B){B(E)}}},onFailure:function(D){h("monitor_screen!!!!!!!!! FAIL : "+JSON.stringify(D,null,3))}});return C};var l={fan:{getEvent:false,listenerObj:null,createListener:f},screen:{getEvent:false,listenerObj:null,createListener:v},temperature:{getEvent:false,listenerObj:null,createListener:q},signal:{getEvent:false,listenerObj:null,createListener:o},lamp:{getEvent:false,listenerObj:null,createListener:i}};var r={row:0,col:0};var a=function(){};a.UNDEFINED="___undefined___";a.OsdPortraitMode={ON:"90",OFF:"off"};a.AutomaticStandbyMode={OFF:"off",STANDBY_4HOURS:"4hours",};a.IsmMethod={NORMAL:"NORMAL",ORBITER:"ORBITER",INVERSION:"INVERSION",COLORWASH:"COLORWASH",WHITEWASH:"WHITEWASH"};a.FailoverMode={OFF:"off",AUTO:"auto",MANUAL:"manual"};a.DigitalAudioInput={HDMI_DP:"hdmi",AUDIO_IN:"audioIn"};a.DpmMode={OFF:"off",POWER_OFF_5SECOND:"5sec",POWER_OFF_10SECOND:"10sec",POWER_OFF_15SECOND:"15sec",POWER_OFF_1MINUTE:"1min",POWER_OFF_3MINUTE:"3min",POWER_OFF_5MINUTE:"5min",POWER_OFF_10MINUTE:"10min"};a.KeyOperationMode={ALLOW_ALL:"normal",POWER_ONLY:"usePwrOnly",BLOCK_ALL:"blockAll"};a.EventType={CURRENT_TEMPERATURE:"CURRENT_TEMPERATURE",FAN_STATUS:"FAN_STATUS",LAMP_STATUS:"LAMP_STATUS",SCREEN_STATUS:"SCREEN_STATUS",SIGNAL_STATUS:"SIGNAL_STATUS",};a.MonitoringSource={FAN:"FAN",LAMP:"LAMP",SIGNAL:"SIGNAL",SCREEN:"SCREEN",THERMOMETER:"THERMOMETER"};function t(E,D,F,B,C){var G={category:E,keys:D};A.Request("luna://com.lge.settingsservice/",{method:"getSystemSettings",parameters:G,onSuccess:function(H){h("On Success");if(H.returnValue===true){var I=F(H.settings);if(I===false){if(C&&typeof C==="function"){C({errorText:"Invalid DB value",errorCode:"DB_ERROR",})}}else{if(B&&typeof B==="function"){h("successCallback!!!!!!!!!");B(I)}else{h("successCallback not registered or is not a function: "+B)}}}else{h("Settings Failed:  "+JSON.stringify(H,null,3));if(C&&typeof C==="function"){C({errorText:"Invalid DB value : "+H.errorText,errorCode:"DB_ERROR",})}}},onFailure:function(H){h("On Failure");delete H.returnValue;if(H.settings){h("settings = "+JSON.stringify(H.settings,null,3));var J=F(H.settings);h("errorKey = "+JSON.stringify(H.errorKey,null,3));for(var I=0;I<H.errorKey.length;++I){J[H.errorKey[I]]=a.UNDEFINED}h("cbObj = "+JSON.stringify(J,null,3));if(B&&typeof B==="function"){h("successCallback!!!!!!!!!");B(J)}}else{if(C&&typeof C==="function"){C({errorText:((typeof H.errorText==="undefined")?"DB Failure":H.errorText),errorCode:"DB_ERROR",})}}}});h("Requested Service: luna://com.lge.settingsservice/getSystemSettings");h("params : "+JSON.stringify(G))}function e(G,F,B,C){var H={category:G,settings:F};h("settings : "+JSON.stringify(F,null,3));var D=false;for(var E in F){if(E){h("has key : "+E);D=true;break}}if(D===false){h("Nothing to set!!!!!");B();return}A.Request("luna://com.lge.settingsservice/",{method:"setSystemSettings",parameters:H,onSuccess:function(){h("On Success");if(B&&typeof B==="function"){h("SUCCEES CALLBACK!!!!!!!");B()}},onFailure:function(I){h("On Failure");delete I.returnValue;if(C&&typeof C==="function"){h("ERROR CALLBACK!!!!!!!");C(I)}}});h("Requested Service: luna://com.lge.settingsservice/setSystemSettings");h("params : "+JSON.stringify(H))}a.prototype.setPortraitMode=function(B,D,G){var H={};var F;function E(J){if(J.portraitMode){for(var K in a.OsdPortraitMode){if(J.portraitMode===a.OsdPortraitMode[K]){return true}}F="Unrecognized OsdPortraintMode : "+J.portraitMode;return false}else{F="portraitMode does not exist.";return false}}if(E(G)){var C=G.portraitMode;h("portraitMode: "+G.portraitMode);H[p.OSD_PORTRAIT_MODE]=C;h("Set: "+JSON.stringify(H,null,3));e("commercial",H,B,D);h("setPortraitMode Done")}else{var I={errorCode:"BAD_PARAMETER",errorText:F};D(I)}};a.prototype.setFailoverMode=function(D,I,P){var G={};var J;function C(Q){h("options:"+JSON.stringify(Q,null,3));var U=Q.failoverMode;if(typeof U==="undefined"){J="Fail over mode not set : ";return false}if(U.mode===a.FailoverMode.MANUAL){if(typeof U.priority==="undefined"){J="priority should be present when mode is MANUAL.";return false}else{if(U.priority.length===0||typeof U.priority.length==="undefined"){return false}for(var S=0;S<U.priority.length;++S){if(!k(U.priority[S])){J="Invalid input value : "+U.priority[S];return false}}}}else{if(typeof U.priority!=="undefined"){J="This priority is available only if mode is : Signage.FailoverMode.MANUAL";return false}else{if(typeof U.mode!=="undefined"){var T=false;h("Mode is: "+U.mode);for(var R in a.FailoverMode){if(U.mode===a.FailoverMode[R]){h("Matched with: "+a.FailoverMode[R]);T=true}}if(!T){h("Unrecognized failoverMode : "+U.mode);J="Unrecognized failoverMode : "+U.mode;return false}}}}return true}if(C(P)){var M=P.failoverMode;if(M.mode===a.FailoverMode.MANUAL){var N=M.priority;h("priority: "+M.priority);for(var H=0;H<5;++H){var K=p.FAILOVER_PRIORITY+(H+1);h("attrName: "+K);var E="";if(H<N.length){var B=N[H];h("input: "+B);E=d(B);if(E===false){var F={errorCode:"API_ERROR",errorText:B+" is not valid"};I(F);return}}else{h("No more input URI")}h("inputValue: "+E);G[K]=E}G[p.FAILOVER_MODE]=M.mode}else{if(M.mode){var O=M.mode;h("mode: "+M.mode);G[p.FAILOVER_MODE]=O}}h("Set: "+JSON.stringify(G,null,3));e("commercial",G,D,I);h("setFailoverMode Done")}else{var L={errorCode:"BAD_PARAMETER",errorText:J};I(L)}};a.prototype.getFailoverMode=function(B,C){var E=function(H){var J={};J.mode=H[p.FAILOVER_MODE];var K=[];for(var G=1;G<6;++G){var F=p.FAILOVER_PRIORITY+G;h("Key is: "+F);var I=g(H[F]);h("Value is: "+I);if(I===false){return false}K.push(I)}J.priority=K;return J};var D=[p.FAILOVER_MODE,p.FAILOVER_PRIORITY+"1",p.FAILOVER_PRIORITY+"2",p.FAILOVER_PRIORITY+"3",p.FAILOVER_PRIORITY+"4",p.FAILOVER_PRIORITY+"5"];t("commercial",D,E,B,C)};function x(D,B){var C=typeof D;h("mytype: "+C);h("type: "+B);if(C==="undefined"){return true}else{if(C===B){return D}else{return false}}}a.prototype.setTileInfo=function(C,H,J){var I;var B=function(U){var K=typeof U.tileInfo.enabled;h("enabledType:"+K);if(K!=="undefined"&&K!=="boolean"){I="enabled should be a boolean";return false}var T=U.tileInfo.row;var M=x(T,"number");if(M===false){I="Invalid type for row"+T;return false}else{if(M===true){h("Row is not defined")}else{if(T>15||T<1){I="row should be 0<n<16 but :"+T;return false}}}var N=U.tileInfo.column;var P=x(N,"number");if(P===false){I="Invalid type for column"+N;return false}else{if(M===true){h("column is not defined")}else{if(N>15||N<1){I="column should be 0<n<16 but :"+N;return false}}}var L=U.tileInfo.tileId;var S=x(L,"number");if(S===false){I="Invalid type for "+N;return false}else{if(S===true){h("id is not defined")}else{if(L<1){I="tileId should be bigger than 0 but :"+L;return false}var Q=r.row;if(T){Q=T}var R=r.column;if(N){R=N}h("curRow : "+Q);h("curCol : "+R);h("id : "+L);if(L>R*Q){I="ID should be less than curRow*curCol";return false}}}var O=typeof U.tileInfo.naturalMode;if(O!=="undefined"&&O!=="boolean"){I="naturalMode should be a boolean";return false}return true};if(B(J)===true){var D=J.tileInfo;var F={};if(typeof D.enabled==="boolean"){if(D.enabled){F[p.TILE_MODE]="on"}else{F[p.TILE_MODE]="off"}}if(D.row){F[p.TILE_ROW]=D.row.toString()}if(D.column){F[p.TILE_COLUME]=D.column.toString()}if(D.tileId){F[p.TILE_ID]=D.tileId.toString()}if(typeof D.naturalMode==="boolean"){if(D.naturalMode){F[p.TILE_NATURALMODE]="on"}else{F[p.TILE_NATURALMODE]="off"}}h("Set: "+JSON.stringify(F,null,3));var G=function(){h("Do callback!!!!!!!!");if(D.row){r.row=D.row}if(D.column){r.column=D.column}if(C&&typeof C==="function"){h("Invoke successCallback");C();h("Invoked successCallback")}};e("commercial",F,G,H);h("setTileInfo Done")}else{var E={errorCode:"BAD_PARAMETER",errorText:I};H(E)}};function n(B){if(B==="on"){return true}else{if(B==="off"){return false}else{return false}}}a.prototype.getTileInfo=function(B,C){var E=function(F){var G={};h("settings Value: "+JSON.stringify(F,null,3));G.enabled=n(F[p.TILE_MODE]);G.row=parseInt(F[p.TILE_ROW],10);G.column=parseInt(F[p.TILE_COLUME],10);G.tileId=parseInt(F[p.TILE_ID],10);G.naturalMode=n(F[p.TILE_NATURALMODE]);h("Return Value: "+JSON.stringify(G,null,3));return G};var D=[p.TILE_MODE,p.TILE_ROW,p.TILE_COLUME,p.TILE_ID,p.TILE_NATURALMODE,];t("commercial",D,E,B,C)};a.prototype.getSignageInfo=function(B,C){var E=function(F){var G={};h("settings: "+JSON.stringify(F,null,3));G.portraitMode=F[p.OSD_PORTRAIT_MODE];G.ismMethod=F[p.ISM_METHOD];G.digitalAudioInputMode={"ext://hdmi:1":F[p.AUDIO_SOURCE_HDMI1],"ext://hdmi:2":F[p.AUDIO_SOURCE_HDMI2],"ext://dp:1":F[p.AUDIO_SOURCE_DP],};h("cbObj: "+JSON.stringify(G,null,3));return G};var D=[p.OSD_PORTRAIT_MODE,p.ISM_METHOD,p.AUDIO_SOURCE_HDMI1,p.AUDIO_SOURCE_HDMI2,p.AUDIO_SOURCE_DP,];t("commercial",D,E,B,C)};a.prototype.setIsmMethod=function(B,C,F){var H={};var E;function D(J){if(J.ismMethod){for(var K in a.IsmMethod){if(J.ismMethod===a.IsmMethod[K]){return true}}E="Unrecognized ismMethod  : "+J.ismMethod;return false}else{E="ismMethod  does not exist.";return false}}if(D(F)){if(F.ismMethod){var G=F.ismMethod;h("ismMethod : "+G);H[p.ISM_METHOD]=G}h("Set: "+JSON.stringify(H,null,3));e("commercial",H,B,C);h("setIsmMethod Done")}else{var I={errorCode:"BAD_PARAMETER",errorText:E};C(I)}};a.prototype.setDigitalAudioInputMode=function(B,D,G){var H={};var F;function E(J){if(J.digitalAudioInputList){for(var K in J.digitalAudioInputList){if(K){if(!k(K)){F="Invalid Input Type  : "+K;return false}var N=J.digitalAudioInputList[K];var M=false;for(var L in a.DigitalAudioInput){if(N===a.DigitalAudioInput[L]){M=true}}if(!M){F="Invalid Audio Input  : "+N;return false}}}return true}else{F="digitalAudioInputList  does not exist.";return false}}if(E(G)){for(var C in G.digitalAudioInputList){if(C==="ext://hdmi:1"){H[p.AUDIO_SOURCE_HDMI1]=G.digitalAudioInputList[C]}else{if(C==="ext://hdmi:2"){H[p.AUDIO_SOURCE_HDMI2]=G.digitalAudioInputList[C]}else{if(C==="ext://dp:1"){H[p.AUDIO_SOURCE_DP]=G.digitalAudioInputList[C]}}}}A.Request("luna://com.lge.settingsservice/",{method:"setSystemSettings",parameters:{category:"commercial",settings:H},onSuccess:function(){if(typeof B==="function"){B()}},onFailure:function(J){delete J.returnValue;if(typeof D==="function"){D(J)}}})}else{var I={errorCode:"BAD_PARAMETER",errorText:F};D(I)}};var y=false;a.prototype.registerSystemMonitor=function(C,G,K){var J=["fan","signal","lamp","screen","temperature"];var H;var I="BAD_PARAMETER";h("Listeners are: "+JSON.stringify(l,null,3));function B(L){if(y===true){H="Not ready to register monitor now.";I="SYSTEM_ERROR";return false}h("options are: "+JSON.stringify(L,null,3));if(typeof L.eventHandler!=="function"){H="No event handler was given or event hadnler is not a function";return false}if(L.monitorConfiguration){for(var N in L.monitorConfiguration){if(N){var P=false;for(var M=0;M<J.length;++M){if(N===J[M]){h("Found key: "+J[M]);P=true}}if(!P){H="Invalid Monitoring source  : "+N;return false}var O=L.monitorConfiguration[N];h("value: "+O);if(typeof O!=="boolean"){H="Invalid value  : "+O;return false}}}return true}else{H="monitorConfiguration  does not exist.";return false}}if(B(K)){var E=function(){h("Canceled all previous message subscriptions");var M=K.eventHandler;for(var L in K.monitorConfiguration){if(L){var N=K.monitorConfiguration[L];if(N===true){h("Add listener for : "+L);m(L,M)}}}h("Monitoring Setup : "+JSON.stringify(l,null,3));h("Start Polling : ");A.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"systemMonitor/startMonitor",parameters:{},onSuccess:function(O){h("On Success");if(O.returnValue===true){if(C&&typeof C==="function"){C()}}else{if(G&&typeof G==="function"){G(O)}}y=false},onFailure:function(O){h("On Failure");delete O.returnValue;if(G&&typeof G==="function"){G(O)}y=false}})};var D=function(L){G(L)};h("Cancel all previous message subscriptions");y=true;b(E,D)}else{var F={errorCode:I,errorText:H};G(F)}};a.prototype.unregisterSystemMonitor=function(B,C){b(B,C);h("After unregister, _gSystemMonitoringSetup are: "+JSON.stringify(l,null,3))};function b(B,C){h("cancelAllSubscription> setup are: "+JSON.stringify(l,null,3));for(var D in l){if(D){u(D)}}h("Stop Polling");A.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"systemMonitor/stopMonitor",parameters:{},onSuccess:function(E){h("On Success");if(E.returnValue===true){if(B&&typeof B==="function"){B()}}else{if(C&&typeof C==="function"){C(E)}}},onFailure:function(E){h("On Failure");delete E.returnValue;if(C&&typeof C==="function"){C(E)}}})}a.prototype.getSystemMonitoringInfo=function(B,C){if(l){B({fan:l.fan.getEvent,signal:l.signal.getEvent,lamp:l.lamp.getEvent,screen:l.screen.getEvent,temperature:l.temperature.getEvent,})}else{var D={errorCode:"ERROR",errorText:"Failed to get system monitoring setup"};C(D)}};a.prototype.setPowerSaveMode=function(D,J,R){var F={};var L;function C(S){if(S.powerSaveMode){for(var T in S.powerSaveMode){if(T){var U=S.powerSaveMode[T];if(T==="ses"||T==="do15MinOff"){if(typeof U!=="boolean"){L="Invalid value  : "+U;return false}}else{if(T==="automaticStandby"){if(!s(a.AutomaticStandbyMode,U)){L="Invalid automaticStandby value  : "+U;return false}}else{if(T==="dpmMode"){if(!s(a.DpmMode,U)){L="Invalid dpmMode value  : "+U;return false}}else{L="Unknown value  : "+T;return false}}}}}return true}else{L="powerSaveMode  does not exist.";return false}}if(C(R)){var G=true;var H=false;var I=false;if(typeof R.powerSaveMode.ses==="boolean"){G=false;if(R.powerSaveMode.ses===true){F[p.SES_MODE]="on"}else{F[p.SES_MODE]="off"}}var B=false;if(typeof R.powerSaveMode.do15MinOff==="boolean"){B=R.powerSaveMode.do15MinOff}else{I=true}if(R.powerSaveMode.dpmMode){G=false;var Q=R.powerSaveMode.dpmMode;h("dpmMode: "+Q);F[p.DPM_MODE]=Q}var P=false;if(R.powerSaveMode.automaticStandby){P=R.powerSaveMode.automaticStandby;h("automaticStandby: "+P)}else{H=true}h("Set: "+JSON.stringify(F,null,3));var M=false;var K="";var O="";var N=function(){if(G===true&&H===true&&I===true){if(M===true){h("Has Error!!!!!"+O+" : "+K);J({errorCode:O,errorText:K});return}else{h("SUCCESS!!!!");D();return}}};if(G===false){e("commercial",F,function(){h("commercial success");G=true;N()},function(S){h("Commercial Failed");G=true;M=true;O=S.errorCode;K=S.errorText;N()})}if(H===false){e("commercial",{noActivityOff:P},function(){h("noActivityOff success");H=true;N()},function(S){h("noActivityOff failed");H=true;M=true;O=S.errorCode;K=S.errorText;N()})}if(I===false){w(B,function(){h("time success");I=true;N()},function(S){h("time failed");I=true;M=true;O=S.errorCode;K=S.errorText;N()})}h("setPowerSaveMode Done")}else{var E={errorCode:"BAD_PARAMETER",errorText:L};J(E)}};function w(C,E,B){var K;if(C){K="on"}else{K="off"}var J;if(C){J="true"}else{J="false"}var H=false;var I=false;var D=false;var F="";var G=function(){if(H===true&&I===true){h("set15MinOff DONE");if(D===true){h("errorText: "+F);B({errorCode:"SET_ERROR",errorText:F})}else{E()}}};A.Request("luna://com.lge.settingsservice/",{method:"setSystemSettings",parameters:{category:"time",settings:{autoOff15Min:K}},onSuccess:function(){h("set15MinOff getSystemSettings On Success");H=true;G()},onFailure:function(L){h("set15MinOff getSystemSettings On Failure");h("result.errorText: "+L.errorText);F+=L.errorText+";";D=true;H=true;G()}});A.Request("luna://com.webos.service.tv.signage/",{method:"setProperties",parameters:{autoPowerOff15Min:J},onSuccess:function(){h("set15MinOff setProperties On Success");I=true;G()},onFailure:function(L){h("set15MinOff setProperties On Failure");h("result.errorText: "+L.errorText);F+=L.errorText+";";D=true;I=true;G()}})}a.prototype.getPowerSaveMode=function(B,G){var D=false;var E=false;var F=false;var I=false;var H="";var K="";var C={ses:"",dpmMode:"",automaticStandby:"",do15MinOff:"",};var J=function(){if(D===true&&E===true&&F===true){if(I===true){h("Has Error!!!!!"+K+" : "+H);G({errorCode:K,errorText:H});return}else{h("SUCCESS!!!!");B(C);return}}};t("commercial",["dpmMode","smartEnergy"],function(L){C.dpmMode=L.dpmMode;if(L.smartEnergy==="on"){C.ses=true}else{if(L.smartEnergy==="off"){C.ses=false}}},function(){D=true;J()},function(L){D=true;I=true;K=L.errorCode;H=L.errorText;J()});t("commercial",["noActivityOff"],function(L){C.automaticStandby=L.noActivityOff},function(){E=true;J()},function(L){E=true;I=true;K=L.errorCode;H=L.errorText;J()});t("time",["autoOff15Min"],function(L){if(L.autoOff15Min==="on"){C.do15MinOff=true}else{if(L.autoOff15Min==="off"){C.do15MinOff=false}}},function(){F=true;J()},function(L){F=true;I=true;K=L.errorCode;H=L.errorText;J()})};a.prototype.setUsagePermission=function(C,F,J){var E={};var G;function B(K){if(K){h("Options: "+JSON.stringify(K,null,3))}else{h("Options not defined: "+K)}if(K.policy){for(var L in K.policy){if(L){var M=K.policy[L];if(L==="remoteKeyOperationMode"||L==="localKeyOperationMode"){if(!s(a.KeyOperationMode,M)){G="Invalid  KeyOperationMode value  : "+M;return false}}else{G="Unknown value  : "+L;return false}}}return true}else{G="policy  does not exist.";return false}}if(B(J)){if(J.policy.localKeyOperationMode){var I=J.policy.localKeyOperationMode;h("portraitMode: "+I);E[p.LOCALKEY_OPERATION_MODE]=I}if(J.policy.remoteKeyOperationMode){var H=J.policy.remoteKeyOperationMode;h("portraitMode: "+H);E[p.IR_OPERATION_MODE]=H}h("Set: "+JSON.stringify(E,null,3));e("hotelMode",E,C,F);h("setPolicy Done")}else{var D={errorCode:"BAD_PARAMETER",errorText:G};F(D)}};a.prototype.getUsagePermission=function(B,C){var E=function(F){var G={};h("settings: "+JSON.stringify(F,null,3));G.remoteKeyOperationMode=F[p.IR_OPERATION_MODE];G.localKeyOperationMode=F[p.LOCALKEY_OPERATION_MODE];h("cbObj: "+JSON.stringify(G,null,3));return G};var D=[p.IR_OPERATION_MODE,p.LOCALKEY_OPERATION_MODE,];t("hotelMode",D,E,B,C)};a.prototype.getUsageData=function(B,C){var D=false;var E=false;var G={uptime:false,totalUsed:false,};function F(){h("accessResult!!!!!!!!!!!!!!!!!!");if(D===true&&E===true){h("CB Object: "+JSON.stringify(G,null,3));if(G.uptime===false||G.totalUsed===false){C({errorCode:"CORDOVA_FAIL",errorText:"Failed to get usage data",});return}else{h("SUCCESS!!!!!!!!!!!!!!!!!!");B(G);return}}else{h("Not Yet!!!!!!!!!!!!!!!!!!")}}A.Request("luna://com.webos.service.tv.signage/",{method:"getUTT",parameters:{},onSuccess:function(H){h("On getUTT Success");D=true;if(H.returnValue===true){h("UTT is :"+H.UTT);G.totalUsed=H.UTT}F()},onFailure:function(H){h("On getUTT Failure :"+JSON.stringify(H,null,3));D=true;F()}});A.Request("luna://com.webos.service.tv.signage/",{method:"dsmp/getElapsedTime",parameters:{},onSuccess:function(H){h("On getElapsedTime Success");E=true;h("result: "+JSON.stringify(H,null,3));if(H.returnValue===true){var I=H.elapsedTime;h("Elapsed!!: "+I);G.uptime=I}F()},onFailure:function(H){h("On getSystemSettings Failure "+JSON.stringify(H,null,3));E=true;F()}})};a.prototype.captureScreen=function(B,C,D){var E={save:(D==undefined||D==null||D.save==undefined?false:D.save)};if(D!==undefined&&D!==null&&D.thumbnail!==undefined&&D.thumbnail===true){E.width=128;E.height=72}A.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"captureScreen",parameters:E,onSuccess:function(F){h("On Success");if(F.returnValue===true){B({data:F.data,size:F.size,encoding:F.encoding})}else{C({errorCode:F.errorCode,errorText:F.errorText})}},onFailure:function(F){h("On Failure");C({errorCode:F.errorCode,errorText:F.errorText})}})};a.prototype.addEventListener=m;a.prototype.removeEventListener=u;c.exports=a});
