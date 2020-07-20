!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.BlockchainID=e():t.BlockchainID=e()}(this,(function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var s=function(t){var e=t||{};if(this.options=this.mergeOptions(this.defaultOptions,e),this.context=this.options.el,this._execTimeout=!1,!document.querySelector(this.context)){var o=this.translate("elementContextError").replace("{{element}}",this.context);throw this.error(o),new Error(o)}if(!this.options.companyId){var n=this.translate("companyIdError");throw this.error(n),new Error(n)}console.log("Running in "+this.options.env=="prod"?"Production":"Staging"),this.setFontFace(),this.renderButton()};s.prototype.defaultOptions={infos:["name","email","blockchainid"],env:"prod",mobileScheme:"originalmy",el:"#blockchainID",buttonIcon:"https://originalmy.com/assets/images/logos/new-om-logo-white-no-title.svg",buttonText:null,showQRCodeIcon:!0,mode:"body",dialogLogo:"https://originalmy.com/assets/images/logos/new-om-logo-with-horizontal-text.svg",lang:function(){return navigator.language||navigator.userLanguage||"en"},closeButtonIconColor:"#000",closeButtonImage:'<?xml version="1.0"?> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve" class=""><g><g> <g> <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717    L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859    c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287    l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285    L284.286,256.002z" data-original="#000000" class="active-path" data-old_color="#000000" fill="{{color}}"/> </g> </g></g> </svg>',buttonStyle:{backgroundColor:"#000000",color:"#FFFFFF",borderRadius:"100px",padding:"10px 20px",width:"275px",height:"50px",outline:"none",border:"none"},buttonIconStyle:{width:"30px",height:"30px",marginRight:"10px",lineHeight:"30px",verticalAlign:"middle",cursor:"pointer"},buttonTextStyle:{textTransform:"uppercase",fontWeight:"bold",fontSize:".9rem",fontFamily:"'Poppins', sans-serif",height:"30px",lineHeight:"30px",verticalAlign:"middle"},qrcodeStyle:{width:"300px",height:"300px"},qrcodeContainerStyle:{width:"300px",height:"300px"},dialogStyle:{backgroundColor:"#fefefe",margin:" 50px auto 0px auto",padding:"20px",border:"1px solid #888",width:"340px",position:"relative",borderRadius:"5px",zIndex:1001,boxSizing:"border-box"},dialogBackdropStyle:(n={position:"fixed",zIndex:1e3,left:0,top:0,width:"100%",height:"100%",overflow:"auto",backgroundColor:"rgb(0,0,0)"},r(n,"backgroundColor","rgba(0,0,0,0.4)"),r(n,"boxSizing","border-box"),n),dialogLogoStyle:{width:"260px",margin:"0 auto",display:"block"},dialogCloseButtonStyle:{position:"absolute",top:0,right:0,marginTop:"10px",marginRight:"20px",backgroundColor:"transparent",border:"none",fontFamily:"Verdana,sans-serif",fontSize:"25px",padding:0,lineHeight:1,width:"20px",height:"20px"},errorStyle:{backgroundColor:"#f8d7da",border:"1px solid #f5c6cb",color:"#721c24",borderRadius:"5px",padding:"10px",display:"inline-block",textAlign:"center",fontSize:"0.9rem"},translations:{en:{buttonText:"Sign in with OriginalMy",companyIdError:"Company ID not found.",elementContextError:"{{element}} could not be found. Please add a element with {{element}} identifier."},pt:{buttonText:"Entrar com OriginalMy",companyIdError:"Company ID não encontrado",elementContextError:"{{element}} não pode ser encontrado. Por favor adicione o identificador {{element}}."},pt_BR:{buttonText:"Entrar com OriginalMy",companyIdError:"Company ID não encontrado",elementContextError:"{{element}} não pode ser encontrado. Por favor adicione o identificador {{element}}"},fallback:"en"}},s.prototype.error=function(t){var e=document.querySelector(this.context),o=document.createElement("div");for(var n in o.innerText="BlockchainID: "+t,this.options.errorStyle)o.style[n]=this.options.errorStyle[n];e?e.appendChild(o):(o.style.position="absolute",o.style.top=0,o.style.left=0,o.style.right=0,o.style.marginTop=30,document.body.appendChild(o))},s.prototype.isObject=function(t){return t&&"object"===(void 0===t?"undefined":i(t))&&!Array.isArray(t)},s.prototype.mergeOptions=function(t,e){var o=this,n=Object.assign({},t);return this.isObject(t)&&this.isObject(e)&&Object.keys(e).forEach((function(i){o.isObject(e[i])&&i in t?n[i]=o.mergeOptions(t[i],e[i]):Object.assign(n,r({},i,e[i]))})),n},s.prototype.setFontFace=function(){var t=document.createElement("style");t.appendChild(document.createTextNode("@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');")),document.head.appendChild(t)},s.prototype.translate=function(t){var e=this.options.lang,o=this.options.translations.fallback;if("function"==typeof e&&(e=e()),"string"==typeof e&&"function"==typeof e)throw new Error("Lang format invalid");var n=this.options.translations[e];return n||(n=this.options.translations[o]),n[t]},s.prototype.getQRCodeURL=function(){return this.options.showQRCodeIcon?this._nonce.qrcode:this._nonce.qrcode+"&qc=0"},s.prototype.getAuthURI=function(){return this._nonce.uri},s.prototype.getAuthNonce=function(){return this._nonce.nonce.nid},s.prototype.initBlockchainID=function(){return this._execTimeout=!1,this.getNonce().then(function(t){if("success"!==t.status)return alert(t.data.message);if(this._execTimeout=!0,this._nonce=t.data.auth,this.timeoutStatus=setTimeout(this.getAuth.bind(this),5e3),document.querySelector(this.context))if(this.checkIfIsMobileAndTablet()){var e=this.options.mobileScheme,o=e+"://"+e+"/login";window.location.href=o+"?uri="+encodeURIComponent(this.getAuthURI())}else{if("body"===this.options.mode)return this.renderQRCode();this.renderDialog()}else alert("Element not found. Add a element with "+this.context)}.bind(this)).catch((function(t){console.error(t)}))},s.prototype.getAuth=function(){this.request({url:this.baseURL+"/login/status/"+this.getAuthNonce(),type:"get"}).then(function(t){if(t&&"success"!==t.status){if(t&&t.data&&"expired"===t.data.type)return this._execTimeout=!1,this.renderButton(),this.cancelAuth(),"function"==typeof this.onExpire&&this.onExpire()}else if(t&&t.data&&1==t.data.auth)return"function"==typeof this.onAuthenticate?this.onAuthenticate(t.data):this.initBlockchainID();this._execTimeout&&(this.timeoutStatus=setTimeout(this.getAuth.bind(this),5e3))}.bind(this)).catch((function(t){console.error(t)}))},s.prototype.startChecking=function(){this._execTimeout=!0,this.initBlockchainID()},s.prototype.checkIfIsMobileAndTablet=function(){var t,e=!1;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0),e},s.prototype.stopChecking=function(){this._execTimeout=!1},s.prototype.getNonce=function(){return this.request({url:this.baseURL+"/login/nonce/"+this.options.companyId+"/"+this.options.env+"/"+this.options.infos.join(","),type:"get"})},s.prototype.initConfig=function(){return this.request({url:"https://api1.originalmy.com/login/config/"+this.options.env,type:"get"})},s.prototype.request=function(t){return new Promise((function(e,o){var n=new XMLHttpRequest;n.responseType="json",n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?e(n.response):o(Error(n.status)))},n.onerror=function(){o(Error("Network Error"))},n.open(t.type||t.method||"GET",t.url,!0),n.send(t.data||{})}))},s.prototype.cancelAuth=function(){this._execTimeout=!1,this.dialog&&this.dialog.remove(),"function"==typeof this.onCancel&&this.onCancel()},s.prototype.renderDialog=function(){var t=document.createElement("div");for(var e in t.id="BlockchainID-Dialog-Backdrop",t.classList.add("BlockchainID-Dialog-Backdrop"),this.options.dialogBackdropStyle)t.style[e]=this.options.dialogBackdropStyle[e];var o=document.createElement("div");for(var e in o.classList.add("BlockchainID-Dialog-Content"),this.options.dialogStyle)o.style[e]=this.options.dialogStyle[e];var n=document.createElement("button");for(var e in n.insertAdjacentHTML("beforeend",this.options.closeButtonImage.replace("{{color}}",this.options.closeButtonIconColor)),n.classList.add("BlockchainID-Dialog-Close-Button"),n.addEventListener("click",this.cancelAuth.bind(this)),n.addEventListener("focus",(function(t){t.target.style.outline="none"})),this.options.dialogCloseButtonStyle)n.style[e]=this.options.dialogCloseButtonStyle[e];if(o.appendChild(n),this.options.dialogLogo){var i=document.createElement("img");for(var e in i.classList.add("BlockchainID-Dialog-Logo"),i.src=this.options.dialogLogo,this.options.dialogLogoStyle)i.style[e]=this.options.dialogLogoStyle[e];o.appendChild(i)}this.dialog=t,o.appendChild(this.renderQRCode((function(){t.appendChild(o),document.body.appendChild(t)})))},s.prototype.renderQRCode=function(t){var e=document.querySelector(this.context),o=document.createElement("div");for(var n in o.classList.add("BlockchainID-QRCode-Container"),this.options.qrcodeContainerStyle)o.style[n]=this.options.qrcodeContainerStyle[n];var i=document.createElement("img");for(var n in i.classList.add("BlockchainID-QRCode"),this.options.qrcodeStyle)i.style[n]=this.options.qrcodeStyle[n];return i.src=this.getQRCodeURL(),i.onload=function(){"body"===this.options.mode&&(e.innerHTML="",e.appendChild(o)),"function"==typeof this.onQRCodeLoad&&this.onQRCodeLoad(),"function"==typeof t&&t()}.bind(this),o.appendChild(i),this.options.mode,o},s.prototype.renderButton=function(){var t=document.querySelector(this.context),e=document.createElement("button");for(var o in e.style.display="none",e.classList.add("BlockchainID-Button"),e.addEventListener("focus",(function(t){t.target.style.outline="none"})),this.options.buttonStyle)e.style[o]=this.options.buttonStyle[o];if(this.options.buttonIcon&&this.options.buttonIcon.length>0){var n=document.createElement("img");for(var o in n.onload=function(){e.style.display="inline-block"},n.classList.add("BlockchainID-Button-Icon"),n.src=this.options.buttonIcon,this.options.buttonIconStyle)n.style[o]=this.options.buttonIconStyle[o];e.innerHTML="",e.append(n)}else e.style.display="inline-block";var i=document.createElement("span");for(var o in i.classList.add("BlockchainID-Button-Text-Span"),this.options.buttonTextStyle)i.style[o]=this.options.buttonTextStyle[o];i.innerText=this.options.buttonText||this.translate("buttonText"),e.appendChild(i),e.addEventListener("click",this.onClick.bind(this)),t.innerHTML="",t.appendChild(e),this.button=e},s.prototype.onClick=function(){this.button&&this.button.removeEventListener("click",this.onClick),this._execTimeout=!0,this.baseURL?this.startChecking():this.initConfig().then(function(t){this.baseURL=t.data.base_path,this.startChecking()}.bind(this)).catch((function(t){console.error(t)}))},e.default=s,t.exports=e.default}])}));