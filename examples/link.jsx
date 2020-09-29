import React from "react";
import BlockchainID from "@originalmy/blockchainid-qrcode-plugin";

class LoginScreen extends React.Component {
  state = {
    loginURL: null,
  };

  constructor() {
    this.onLoginUrl = this.onLoginUrl.bind(this);
    this.onAuth = this.onAuth.bind(this);
    this.onExpired = this.onExpired.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.initBlockchainID();
  }

  initBlockchainID() {
    this.blockchainId = new BlockchainID({
      companyId: null,
      infos: ["name", "email", "blockchainid", "id"], // https://omid.originalmy.com/documentation
      mode: "dialog",
    });
    this.blockchainId.onURL = this.onLoginUrl;
    this.blockchainId.onAuthenticate = this.onAuth;
    this.blockchainId.onExpire = this.onExpired;
  }

  onLoginUrl() {
    this.setState({ loginURL: url });
  }

  onAuth(nonce) {
    console.log("Authentication OMyID", nonce);
  }

  onExpired() {
    console.log("Link OMyID expired");
  }

  onLogin() {
    location.href = this.state.loginURL;
  }

  render() {
    return this.state.loginURL ? (
      <button onClick={onLogin}>OriginalMy</button>
    ) : null;
  }
}

export default LoginScreen;
