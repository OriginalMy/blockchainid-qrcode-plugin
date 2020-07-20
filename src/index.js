const BlockchainID = function (options) {
  var _options = options || {};
  this.options = this.mergeOptions(this.defaultOptions, _options);
  this.context = this.options.el;
  this._execTimeout = false;
  if (!document.querySelector(this.context)) {
    var erroMensage = this.translate("elementContextError").replace(
      "{{element}}",
      this.context
    );
    this.error(erroMensage);
    throw new Error(erroMensage);
  }
  if (!this.options.companyId) {
    var errorMessage = this.translate("companyIdError");
    this.error(errorMessage);
    throw new Error(errorMessage);
  }
  console.log(
    "Running in " + this.options.env === "prod" ? "Production" : "Staging"
  );
  this.setFontFace();
  this.renderButton();
};

BlockchainID.prototype.defaultOptions = {
  infos: ["name", "email", "blockchainid"], // https://omid.originalmy.com/documentation
  env: "prod",
  mobileScheme: "originalmy",
  el: "#blockchainID",
  buttonIcon:
    "https://originalmy.com/assets/images/logos/new-om-logo-white-no-title.svg",
  buttonText: null,
  showQRCodeIcon: true,
  mode: "body", // dialog | body
  dialogLogo:
    "https://originalmy.com/assets/images/logos/new-om-logo-with-horizontal-text.svg",
  lang: () => navigator.language || navigator.userLanguage || "en",
  closeButtonIconColor: "#000",
  closeButtonImage:
    '<?xml version="1.0"?> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve" class=""><g><g> <g> <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717    L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859    c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287    l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285    L284.286,256.002z" data-original="#000000" class="active-path" data-old_color="#000000" fill="{{color}}"/> </g> </g></g> </svg>',
  buttonStyle: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    borderRadius: "100px",
    padding: "10px 20px",
    width: "275px",
    height: "50px",
    outline: "none",
    border: "none",
  },
  buttonIconStyle: {
    width: "30px",
    height: "30px",
    marginRight: "10px",
    lineHeight: "30px",
    verticalAlign: "middle",
  },
  buttonTextStyle: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: ".9rem",
    fontFamily: "'Poppins', sans-serif",
    height: "30px",
    lineHeight: "30px",
    verticalAlign: "middle",
  },
  qrcodeStyle: {
    width: "300px",
    height: "300px",
  },
  qrcodeContainerStyle: {
    width: "300px",
    height: "300px",
  },
  dialogStyle: {
    backgroundColor: "#fefefe",
    margin: " 50px auto 0px auto" /* 15% from the top and centered */,
    padding: "20px",
    border: "1px solid #888",
    width: "340px",
    position: "relative",
    borderRadius: "5px",
    zIndex: 1001,
  },
  dialogBackdropStyle: {
    position: "fixed" /* Stay in place */,
    zIndex: 1000 /* Sit on top */,
    left: 0,
    top: 0,
    width: "100%" /* Full width */,
    height: "100%" /* Full height */,
    overflow: "auto" /* Enable scroll if needed */,
    backgroundColor: "rgb(0,0,0)" /* Fallback color */,
    backgroundColor: "rgba(0,0,0,0.4)" /* Black w/ opacity */,
  },
  dialogLogoStyle: {
    width: "260px",
    margin: "0 auto",
    display: "block",
  },
  dialogCloseButtonStyle: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: "10px",
    marginRight: "20px",
    backgroundColor: "transparent",
    border: "none",
    fontFamily: "Verdana,sans-serif",
    fontSize: "25px",
    padding: 0,
    lineHeight: 1,
    width: "20px",
    height: "20px",
  },
  errorStyle: {
    backgroundColor: "#f8d7da",
    border: "1px solid #f5c6cb",
    color: "#721c24",
    borderRadius: "5px",
    padding: "10px",
    display: "inline-block",
    textAlign: "center",
    fontSize: "0.9rem",
  },
  translations: {
    en: {
      buttonText: "Sign in with OriginalMy",
      companyIdError: "Company ID not found.",
      elementContextError:
        "{{element}} could not be found. Please add a element with {{element}} identifier.",
    },
    pt: {
      buttonText: "Entrar com OriginalMy",
      companyIdError: "Company ID não encontrado",
      elementContextError:
        "{{element}} não pode ser encontrado. Por favor adicione o identificador {{element}}.",
    },
    pt_BR: {
      buttonText: "Entrar com OriginalMy",
      companyIdError: "Company ID não encontrado",
      elementContextError:
        "{{element}} não pode ser encontrado. Por favor adicione o identificador {{element}}",
    },
    fallback: "en",
  },
};

BlockchainID.prototype.error = function (message) {
  const el = document.querySelector(this.context);
  const errorContainer = document.createElement("div");
  errorContainer.innerText = "BlockchainID: " + message;
  for (var property in this.options.errorStyle)
    errorContainer.style[property] = this.options.errorStyle[property];
  if (el) el.appendChild(errorContainer);
  else {
    errorContainer.style.position = "absolute";
    errorContainer.style.top = 0;
    errorContainer.style.left = 0;
    errorContainer.style.right = 0;
    errorContainer.style.marginTop = 30;
    document.body.appendChild(errorContainer);
  }
};

BlockchainID.prototype.isObject = function (item) {
  return item && typeof item === "object" && !Array.isArray(item);
};

BlockchainID.prototype.mergeOptions = function (target, source) {
  let output = Object.assign({}, target);
  if (this.isObject(target) && this.isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (this.isObject(source[key])) {
        if (!(key in target)) Object.assign(output, { [key]: source[key] });
        else output[key] = this.mergeOptions(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};

BlockchainID.prototype.setFontFace = function () {
  var newStyle = document.createElement("style");
  newStyle.appendChild(
    document.createTextNode(
      "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');"
    )
  );
  document.head.appendChild(newStyle);
};

BlockchainID.prototype.translate = function (key) {
  var lang = this.options.lang;
  var fallbackLang = this.options.translations.fallback;
  if (typeof lang === "function") lang = lang();
  if (typeof lang === "string" && typeof lang === "function")
    throw new Error("Lang format invalid");
  var dictionary = this.options.translations[lang];
  if (!dictionary) dictionary = this.options.translations[fallbackLang];
  return dictionary[key];
};

BlockchainID.prototype.getQRCodeURL = function () {
  if (!this.options.showQRCodeIcon) return this._nonce.qrcode + "&qc=0";
  return this._nonce.qrcode;
};

BlockchainID.prototype.getAuthURI = function () {
  return this._nonce.uri;
};

BlockchainID.prototype.getAuthNonce = function () {
  return this._nonce.nonce.nid;
};

BlockchainID.prototype.initBlockchainID = function () {
  this._execTimeout = false;
  return this.getNonce()
    .then(
      function (data) {
        if (data.status !== "success") return alert(data.data.message);
        this._execTimeout = true;
        this._nonce = data.data.auth;
        this.timeoutStatus = setTimeout(this.getAuth.bind(this), 5000);
        const el = document.querySelector(this.context);
        if (el) {
          if (this.checkIfIsMobileAndTablet()) {
            const optionScheme = this.options.mobileScheme;
            const scheme = optionScheme + "://" + optionScheme + "/login";
            window.location.href =
              scheme + "?uri=" + encodeURIComponent(this.getAuthURI());
          } else {
            if (this.options.mode === "body") return this.renderQRCode();
            this.renderDialog();
          }
        } else alert("Element not found. Add a element with " + this.context);
      }.bind(this)
    )
    .catch(function (error) {
      console.error(error);
    });
};

BlockchainID.prototype.getAuth = function () {
  this.request({
    url: this.baseURL + "/login/status/" + this.getAuthNonce(),
    type: "get",
  })
    .then(
      function (data) {
        if (data && data.status !== "success") {
          if (data && data.data && data.data.type === "expired") {
            this._execTimeout = false;
            this.renderButton();
            this.cancelAuth();
            if (typeof this.onExpire === "function") return this.onExpire();
            return false;
          }
        } else if (data && data.data && data.data.auth == 1) {
          if (typeof this.onAuthenticate === "function")
            return this.onAuthenticate(data.data);
          return this.initBlockchainID();
        }
        if (this._execTimeout) {
          this.timeoutStatus = setTimeout(this.getAuth.bind(this), 5000);
        }
      }.bind(this)
    )
    .catch(function (err) {
      console.error(err);
    });
};

BlockchainID.prototype.startChecking = function () {
  this._execTimeout = true;
  this.initBlockchainID();
};

BlockchainID.prototype.checkIfIsMobileAndTablet = function () {
  var check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

BlockchainID.prototype.stopChecking = function () {
  this._execTimeout = false;
};

BlockchainID.prototype.getNonce = function () {
  return this.request({
    url:
      this.baseURL +
      "/login/nonce/" +
      this.options.companyId +
      "/" +
      this.options.env +
      "/" +
      this.options.infos.join(","),
    type: "get",
  });
};

BlockchainID.prototype.initConfig = function () {
  return this.request({
    url: "https://api1.originalmy.com/login/config/" + this.options.env,
    type: "get",
  });
};

BlockchainID.prototype.request = function (options) {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.responseType = "json";
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.status));
        }
      }
    };
    request.onerror = function () {
      reject(Error("Network Error"));
    };
    request.open(options.type || options.method || "GET", options.url, true);
    request.send(options.data || {});
  });
};

BlockchainID.prototype.cancelAuth = function () {
  this._execTimeout = false;
  if (this.dialog) this.dialog.remove();
  if (typeof this.onCancel === "function") this.onCancel();
};

BlockchainID.prototype.renderDialog = function () {
  // Backdrop
  const backdrop = document.createElement("div");
  backdrop.id = "BlockchainID-Dialog-Backdrop";
  backdrop.classList.add("BlockchainID-Dialog-Backdrop");
  for (var property in this.options.dialogBackdropStyle)
    backdrop.style[property] = this.options.dialogBackdropStyle[property];
  // Dialog
  const dialog = document.createElement("div");
  dialog.classList.add("BlockchainID-Dialog-Content");
  for (var property in this.options.dialogStyle)
    dialog.style[property] = this.options.dialogStyle[property];
  // Close button
  const closeButton = document.createElement("button");
  closeButton.insertAdjacentHTML(
    "beforeend",
    this.options.closeButtonImage.replace(
      "{{color}}",
      this.options.closeButtonIconColor
    )
  );
  closeButton.classList.add("BlockchainID-Dialog-Close-Button");
  closeButton.addEventListener("click", this.cancelAuth.bind(this));
  closeButton.addEventListener("focus", function (e) {
    e.target.style.outline = "none";
  });
  for (var property in this.options.dialogCloseButtonStyle)
    closeButton.style[property] = this.options.dialogCloseButtonStyle[property];
  dialog.appendChild(closeButton);
  //Dialog logotype
  if (this.options.dialogLogo) {
    const dialogLogo = document.createElement("img");
    dialogLogo.classList.add("BlockchainID-Dialog-Logo");
    dialogLogo.src = this.options.dialogLogo;
    for (var property in this.options.dialogLogoStyle)
      dialogLogo.style[property] = this.options.dialogLogoStyle[property];
    dialog.appendChild(dialogLogo);
  }
  this.dialog = backdrop;
  dialog.appendChild(
    this.renderQRCode(function () {
      backdrop.appendChild(dialog);
      document.body.appendChild(backdrop);
    })
  );
};

BlockchainID.prototype.renderQRCode = function (callback) {
  const el = document.querySelector(this.context);
  const qrcodeContainer = document.createElement("div");
  qrcodeContainer.classList.add("BlockchainID-QRCode-Container");
  for (var property in this.options.qrcodeContainerStyle)
    qrcodeContainer.style[property] = this.options.qrcodeContainerStyle[
      property
    ];
  const qrcode = document.createElement("img");
  qrcode.classList.add("BlockchainID-QRCode");
  for (var property in this.options.qrcodeStyle)
    qrcode.style[property] = this.options.qrcodeStyle[property];
  qrcode.src = this.getQRCodeURL();
  qrcode.onload = function () {
    if (this.options.mode === "body") {
      el.innerHTML = "";
      el.appendChild(qrcodeContainer);
    }
    if (typeof this.onQRCodeLoad === "function") this.onQRCodeLoad();
    if (typeof callback === "function") callback();
  }.bind(this);
  qrcodeContainer.appendChild(qrcode);
  if (this.options.mode !== "body") return qrcodeContainer;
  return qrcodeContainer;
};

BlockchainID.prototype.renderButton = function () {
  const el = document.querySelector(this.context);
  const button = document.createElement("button");
  button.style.display = "none";
  button.classList.add("BlockchainID-Button");
  button.addEventListener("focus", function (e) {
    e.target.style.outline = "none";
  });
  for (var property in this.options.buttonStyle)
    button.style[property] = this.options.buttonStyle[property];
  if (this.options.buttonIcon && this.options.buttonIcon.length > 0) {
    const icon = document.createElement("img");
    icon.onload = function () {
      button.style.display = "inline-block";
    };
    icon.classList.add("BlockchainID-Button-Icon");
    icon.src = this.options.buttonIcon;
    for (var property in this.options.buttonIconStyle)
      icon.style[property] = this.options.buttonIconStyle[property];
    button.innerHTML = "";
    button.append(icon);
  } else {
    button.style.display = "inline-block";
  }
  const textSpan = document.createElement("span");
  textSpan.classList.add("BlockchainID-Button-Text-Span");
  for (var property in this.options.buttonTextStyle)
    textSpan.style[property] = this.options.buttonTextStyle[property];
  textSpan.innerText = this.options.buttonText || this.translate("buttonText");
  button.appendChild(textSpan);
  button.addEventListener("click", this.onClick.bind(this));
  el.innerHTML = "";
  el.appendChild(button);
  this.button = button;
};

BlockchainID.prototype.onClick = function () {
  if (this.button) this.button.removeEventListener("click", this.onClick);
  this._execTimeout = true;
  if (!this.baseURL) {
    this.initConfig()
      .then(
        function (resp) {
          this.baseURL = resp.data.base_path;
          this.startChecking();
        }.bind(this)
      )
      .catch(function (err) {
        console.error(err);
      });
  } else {
    this.startChecking();
  }
};
export default BlockchainID;
