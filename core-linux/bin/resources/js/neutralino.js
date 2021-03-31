var Neutralino=function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.request=t.RequestType=void 0,function(e){e.GET="GET",e.POST="POST"}(t.RequestType||(t.RequestType={})),t.request=function(e){var t="",o=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");o.onreadystatechange=function(){if(4==o.readyState&&200==o.status){var t=null,r=o.responseText;r&&(t=JSON.parse(r)),e.onSuccess&&t&&t.success&&e.onSuccess(t),e.onError&&t&&t.error&&e.onError(t.error)}else 4==o.readyState&&e.onError&&e.onError("Neutralino server is offline. Try restarting the application")},e.isNativeMethod&&(e.url="/__nativeMethod_"+e.url),e.data&&(t=JSON.stringify(e.data)),"GET"==e.type&&(o.open("GET",e.url,!0),o.setRequestHeader("Authorization","Basic "+window.NL_TOKEN),o.send()),"POST"==e.type&&(o.open("POST",e.url,!0),o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.setRequestHeader("Authorization","Basic "+window.NL_TOKEN),o.send(t))}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.open=t.getConfig=t.keepAlive=t.exit=void 0;var r=o(0);t.exit=function(){r.request({url:"app.exit",type:r.RequestType.POST,isNativeMethod:!0})},t.keepAlive=function(e){r.request({url:"app.keepAlive",type:r.RequestType.GET,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})},t.getConfig=function(e){r.request({url:"app.getConfig",type:r.RequestType.GET,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})},t.open=function(e){r.request({url:"app.open",type:r.RequestType.POST,data:e,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.init=t.app=t.debug=t.storage=t.computer=t.os=t.filesystem=void 0,t.filesystem=o(3),t.os=o(4),t.computer=o(5),t.storage=o(6),t.debug=o(7),t.app=o(1);var r=o(8);Object.defineProperty(t,"init",{enumerable:!0,get:function(){return r.init}})},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.readDirectory=t.removeFile=t.readFile=t.writeFile=t.removeDirectory=t.createDirectory=void 0;var r=o(0);t.createDirectory=function(e){r.request({url:"filesystem.createDirectory",type:r.RequestType.POST,data:e,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})},t.removeDirectory=function(e){r.request({url:"filesystem.removeDirectory",type:r.RequestType.POST,data:e,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})},t.writeFile=function(e){r.request({url:"filesystem.writeFile",type:r.RequestType.POST,data:e,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})},t.readFile=function(e){r.request({url:"filesystem.readFile",type:r.RequestType.POST,data:e,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})},t.removeFile=function(e){r.request({url:"filesystem.removeFile",type:r.RequestType.POST,data:e,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})},t.readDirectory=function(e){r.request({url:"filesystem.readDirectory",type:r.RequestType.POST,data:e,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.showMessageBox=t.showNotification=t.showDialogSave=t.showDialogOpen=t.getEnvar=t.execCommand=t.MessageBoxType=void 0;var r=o(0);!function(e){e.WARN="WARN",e.ERROR="ERROR",e.INFO="INFO",e.QUESTION="QUESTION"}(t.MessageBoxType||(t.MessageBoxType={})),t.execCommand=function(e){r.request({url:"os.execCommand",type:r.RequestType.POST,data:e,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})},t.getEnvar=function(e){r.request({url:"os.getEnvar",type:r.RequestType.POST,data:e,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})},t.showDialogOpen=function(e){r.request({url:"os.dialogOpen",type:r.RequestType.POST,data:e,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})},t.showDialogSave=function(e){r.request({url:"os.dialogSave",type:r.RequestType.POST,data:e,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})},t.showNotification=function(e){r.request({url:"os.showNotification",type:r.RequestType.POST,data:e,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})},t.showMessageBox=function(e){r.request({url:"os.showMessageBox",type:r.RequestType.POST,data:e,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRamUsage=void 0;var r=o(0);t.getRamUsage=function(e){r.request({url:"computer.getRamUsage",type:r.RequestType.GET,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getData=t.putData=void 0;var r=o(0);t.putData=function(e){r.request({url:"storage.putData",type:r.RequestType.POST,data:e,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})},t.getData=function(e){r.request({url:"storage.getData",type:r.RequestType.POST,data:e,onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=t.LoggerType=void 0;var r=o(0);!function(e){e.WARN="WARN",e.ERROR="ERROR",e.INFO="INFO"}(t.LoggerType||(t.LoggerType={})),t.log=function(e){r.request({url:"debug.log",type:r.RequestType.POST,data:{type:e.type,message:e.message},onSuccess:e.onSuccess,onError:e.onError,isNativeMethod:!0})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var r=o(9),n=o(10);t.init=function(e){var t=null,o=null;if(e.onSuccess&&e.onSuccess(),e.pingSuccessCallback&&(t=e.pingSuccessCallback),e.pingFailCallback&&(o=e.pingFailCallback),window.NL_MODE&&"browser"==window.NL_MODE&&r.ping.start(t,o),void 0!==window.NL_ARGS)for(var s=0;s<window.NL_ARGS.length;s++)if("--debug-mode"==window.NL_ARGS[s]){n.devClient.start();break}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ping=void 0;var r=o(1);t.ping={start:function(e,t){setInterval((function(){r.keepAlive({onSuccess:e,onError:t})}),5e3)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.devClient=void 0;var r=o(0);t.devClient={start:function(){setInterval((function(){r.request({url:"http://localhost:8080",type:r.RequestType.GET,onSuccess:function(e){e&&e.needsReload&&location.reload()},onError:function(){console.error("Unable to communicate with neu devServer")}})}),1e3)}}}]);