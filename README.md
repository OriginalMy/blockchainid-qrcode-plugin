---
id: blockchainid
title: BlockchainID
sidebar_label: BlockchainID
---

# BlockchainID QR code

BlockchainID is simple OAuth2 to request personal and verified data from OriginalMy users.

## Import

```javascript
const BlockchainID = require("blockchainid");
```

Or

```javascript
import * as BlockchainID from "blockchainid";
```

Or

```HTML
<script src="https://api1.originalmy.com/blockchainid/blockchainid.js"></script>
```

## Usage

On JavaScript:

```javascript
const blockchainID = new BlockchainID({
  companyId: YOUR_COMPANY_ID,
});

blockchainID.onAuthenticate = function (nonce) {
  console.log("Authentication OMyID", nonce);
  console.log(
    "Make a request to your backend here sending the nonce to get user infos"
  );
};

blockchainID.onExpire = function () {
  console.log("Link OMyID expired");
};

blockchainID.onCancel = function () {
  console.log("Canceling...");
};
```

On HTML:

```html
<div id="blockchainID"></div>
```

## Properties

### `el`

Element where BlockchainID button will stay.

### `companyId`

CompanyID given by OriginalMy API.

### `infos`

List of informations to require from user. See the complete list in [documentation](https://omid.originalmy.com/documentation).

### `mode`

Values: dialog | body (default)

QR code display type

### `mobileScheme`

Values: originalmy (default)

Scheme defined to open the app

### `buttonIcon`

Image URL that stay in button left side

### `buttonText`

Button text

### `showQRCodeIcon`

If you desire to show OriginalMy icon on QR code (default: true)

### `dialogLogo`

Image URL that stay on dialog top

### `lang`

Values: String en (default) | pt

Plugin language

### `closeButtonIconColor`

Values: String #000000 (default)

Dialog close button color

### `buttonStyle`

Override button style

### `buttonIconStyle`

Override button icon style

### `buttonTextStyle`

Override button text style

### `qrcodeStyle`

Override QR code style

### `qrcodeContainerStyle`

Override QR code container style

### `dialogStyle`

Override dialog style

### `dialogBackdropStyle`

Override dialog backdrop style

### `dialogLogoStyle`

Override dialog logo style

### `dialogCloseButtonStyle`

Override dialog close button style

### `translations`

Texts translations

```json
{
  "en": {
    "buttonText": "..."
  },
  "pt-BR": {
    "buttonText": "..."
  }
}
```

## Events

### `onAuthenticate`

Function to be called when the user scan the QR code and accept the required data.

### `onExpire`

Function to be called when the QR code expires.

### `onCancel`

Function to be called when user closes the dialog and cancel authentication.

## Contact

Any bug, error and doubt contato@originalmy.com

OriginalMy. All rights reserved
