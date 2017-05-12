# openui5-qrcode

openui5-qrcode is a SAPUI5 Custom Control that allow you to generate and easily embed QR Code inside your SAPUI5 Application

![QRCode preview](https://raw.githubusercontent.com/StErMi/openui5-qrcode/master/preview.PNG)

## Demo

You can checkout a demo with different configuration parameter here: https://stermi.github.io/openui5-qrcode/demo/

## Usage

### Configure manifest.json

Add the library to sap.ui5 dependencies list and configure the resourceRoots to point where you uploaded the custom library.

```json
"sap.ui5": {
    ...
	"dependencies": {
		"minUI5Version": "1.30.0",
		"libs": {
    		...
			"it.designfuture.qrcode": {}
		}
	},
	"resourceRoots": {
		"it.designfuture.qrcode": "./thirdparty/it/designfuture/qrcode/"
	}
}
```

### Add the custom control inside an XML View

First of all add the namespace to the View

```xml
xmlns:df="it.designfuture.qrcode"
```

And than you can simply add the QRCode custom control

```xml
<df:QRCode
	text="OpenUI5 Rocks!"
	width="256"
	height="256"
	colorDark="#000000"
	colorLight="#ffffff"
	correctLevel="2"
/>
```

## Parameters

| Name | Type | Default| Description
| :---- | :------------------- | :---- | :---------  |
| text | string | "" | Text embedded in the QRCode
| width | int | 256 | QRCode's width
| height | int | 256 | QRCode's height
| colorDark | string | "#000000" | HTML color (black/#ffffff) of the dark part of the QRCode
| colorLight | string | "#ffffff" | HTML color (white/#ffffff) of the dark part of the QRCode
| correctLevel | int | 2 | Text embedded in the QRCode


## Methods

| Name |  Description
| :---- | :------------------- |
| reDraw | Draw the QRCode. If the QR Code does not exist it creates a new one, if it already exist it just refresh it
| clear | Clear the QR Code
| getText | Return the text of the QR Code
| setText | Set a new text of the QR Code
| getWidth | Return the width of the QR Code
| setWidth | Set the width of the QR Code
| getHeight | Return the text of the QR Code
| setHeight | Set the height of the QR Code
| getColorDark | Return the RGB dark color of the QR Code
| setColorDark | Set the RGB dark color of the QR Code
| getText | Return the text of the QR Code
| getColorLight | Return the RGB light color of the QR Code
| setColorLight | Set the RGB light color of the QR Code
| getCorrectLevel | Return the Error Correction Level of the QR Code
| setCorrectLevel | Set the Error Correction Level of the QR Code

## Build

If you would like to extend and customize the control, you can easily do that but re-building the code with just a simple Grunt command:

```
npm install
grunt build
```

You just need to take note of two things:

 1. **compatVersion**: you should type here your project SAPUI5 version. Old projects (1.28.x) will generate a *library-preload.json*, new version will instead create a *library-prelaod.js*
 2. **openui5_theme**: add addictional files for each theme you are supporting in your application

## Credits

Emanuele Ricci

 - Email: [stermi@gmail.com](stermi@gmail.com)
 - Twitter: [@StErMi](https://twitter.com/StErMi)

## License
This project is licensed under the Apache 2.0 License - see the [LICENSE.md](LICENSE.md) file for details