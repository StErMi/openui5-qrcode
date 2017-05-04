// Provides control it.designfuture.qrcode.QRCode
sap.ui.define([
	"sap/ui/core/Control",
	"./3rdparty/qrcode"
], function (Control, qrcode) {
	"use strict";
	
	/**
	 * Constructor for a new QRCode.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given 
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * QRCode Control to render a QR Code
	 * @extends sap.m.InputBase
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @since 1.40
	 * @name it.designfuture.qrcode.QRCode
	 */
	var QRCodeControl =  Control.extend("it.designfuture.qrcode.QRCode", {
		
		__qrcode: undefined,
		
		metadata : {
			library: 'it.designfuture.qrcode',
			properties: {
				
				/**
				 * QRCode's text
				 */
				text : {type : "string", group : "Appearance", defaultValue : null},
				
				/**
				 * QRCode's width
				 */
				width : {type : "int", group : "Appearance", defaultValue : 256},
				
				/**
				 * QRCode's height
				 */
				height : {type : "int", group : "Appearance", defaultValue : 256},
				
				/**
				 * HTML color (black/#ffffff) of the dark part of the QRCode
				 */
				colorDark : {type : "string", group : "Appearance", defaultValue : "#000000"},
				
				/**
				 * HTML color (white/#ffffff) of the dark part of the QRCode
				 */
				colorLight : {type : "string", group : "Appearance", defaultValue : "#ffffff"},
				
				/**
				 * Error correction level 0/1/2/3
				 */
				correctLevel : {type : "int", group : "Appearance", defaultValue : QRCode.CorrectLevel.H}
			},
			aggregations: {},
			events: {},
		},
		
		init: function() {
			//	Init all the things!
		},
		
		onAfterRendering: function() {
			this.reDraw();
		},
		
		//////////////////////////////////////////////
		// GETTER / SETTER
		//////////////////////////////////////////////
		
		/*
		* Return the text of the QR Code
		* @public
		* @returns {string} Text of the QR Code
		*/
		getText: function() {
			return this.getProperty("text");
		},
		
		/*
		* Set a new text of the QR Code
		* @public
		* @param {string} sText - Text of the QR Code
		* @param {boolean} bSkipDraw - skip the redraw
		*/
		setText: function(sText, bSkipDraw) {
			this.setProperty("text", sText, true);
			if( !bSkipDraw ) {
				this.reDraw();
			}
		},
		
		/*
		* Return the width of the QR Code
		* @public
		* @returns {int} Width of the QR Code
		*/
		getWidth: function() {
			return this.getProperty("width");
		},
		
		
		/*
		* Set the width of the QR Code
		* @public
		* @param {int} iWidth - Width of the QR Code
		* @param {boolean} bSkipDraw - skip the redraw
		*/
		setWidth: function(iWidth, bSkipDraw) {
			if( isNaN(iWidth) ) {
				throw new Error("Width must be an intreger");
			}
			iWidth = parseInt(iWidth, 10);
			if( iWidth <= 0 ) {
				throw new Error("Value " + iWidth + " is not a valid width");
			}
			
			this.setProperty("width", parseInt(iWidth, 10), true);
			if( !bSkipDraw ) {
				this.reDraw();
			}
		},
		
		
		/*
		* Return the height of the QR Code
		* @public
		* @returns {int} Height of the QR Code
		*/
		getHeight: function() {
			return this.getProperty("height");
		},
		
		/*
		* Set the height of the QR Code
		* @public
		* @param {int} iHeight - Height of the QR Code
		* @param {boolean} bSkipDraw - skip the redraw
		*/
		setHeight: function(iHeight, bSkipDraw) {
			if( isNaN(iHeight) ) {
				throw new Error("Height must be an intreger");
			}
			iHeight = parseInt(iHeight, 10);
			if( iHeight <= 0 ) {
				throw new Error("Value " + iHeight + " is not a valid height");
			}
			
			
			this.setProperty("height", parseInt(iHeight, 10), true);
			if( !bSkipDraw ) {
				this.reDraw();
			}
		},
		
		/*
		* Return the RGB dark color of the QR Code
		* @public
		* @returns {string} RGB dark color of the QR Code
		*/
		getColorDark: function() {
			return this.getProperty("colorDark");
		},
		
		/*
		* Set the RGB dark color of the QR Code
		* @public
		* @param {string} sColorDark - RGB dark color of the QR Code
		* @param {boolean} bSkipDraw - skip the redraw
		*/
		setColorDark: function(sColorDark, bSkipDraw) {
			var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(sColorDark);
			if( !isOk ) {
				throw new Error("Value " + sColorDark + " is not a valid RGB format");
			}
			
			this.setProperty("colorDark", sColorDark, true);
			if( !bSkipDraw ) {
				this.reDraw();
			}
		},
		
		/*
		* Return the RGB light color of the QR Code
		* @public
		* @returns {string} RGB light color of the QR Code
		*/
		getColorLight: function() {
			return this.getProperty("colorLight");
		},
		
		/*
		* Set the RGB light color of the QR Code
		* @public
		* @param {string} sColorLight - RGB light color of the QR Code
		* @param {boolean} bSkipDraw - skip the redraw
		*/
		setColorLight: function(sColorLight, bSkipDraw) {
			var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(sColorLight);
			if( !isOk ) {
				throw new Error("Value " + sColorLight + " is not a valid RGB format");
			}
			
			this.setProperty("colorLight", sColorLight, true);
			if( !bSkipDraw ) {
				this.reDraw();
			}
		},
		
		/*
		* Return the Error Correction Level of the QR Code
		* @public
		* @returns {int} Error Correction Level of the QR Code
		*/
		getCorrectLevel: function() {
			return this.getProperty("correctLevel");
		},
		
		/*
		* Set the Error Correction Level of the QR Code
		* @public
		* @param {int} iCorrectLevel - RGB light color of the QR Code
		* @param {boolean} bSkipDraw - skip the redraw
		*/
		setCorrectLevel: function(iCorrectLevel, bSkipDraw) {
			if( isNaN(iCorrectLevel) ) {
				throw new Error("Value " + iCorrectLevel + " is not a valid integer for Error Correction Level");
			}
			
			var correctLevel = parseInt(iCorrectLevel, 10);
			if( iCorrectLevel < 0 || iCorrectLevel > 3 ) {
				throw new Error("Value " + correctLevel + " is not a valid value for Error Correction Level (min 0, max 3)");
			}
			
			this.setProperty("correctLevel", correctLevel, true);
			if( !bSkipDraw ) {
				this.reDraw();
			}
		},
		
		//////////////////////////////////////////////
		// QRCODE METHODS
		//////////////////////////////////////////////
		
		/*
		* Draw the QRCode
		* If the QR Code does not exist it creates a new one, if it already exist it just refresh it
		*/
		reDraw: function() {
			var iCorrectLevel = this.getCorrectLevel() < 0 || this.getCorrectLevel() > 3 ? QRCode.CorrectLevel.H : this.getCorrectLevel();
			if( this.__qrcode ) {
				this.__qrcode._htOption.width = this.getWidth();
				this.__qrcode._htOption.height = this.getHeight();
				this.__qrcode._htOption.colorDark = this.getColorDark();
				this.__qrcode._htOption.colorLight = this.getColorLight();
				this.__qrcode._htOption.correctLevel = iCorrectLevel;
				if( this.getText() ) {
					this.__qrcode.makeCode( this.getText() );
				} else {
					this.__qrcode.clear();
				}
			} else {
				var oElement = this.getDomRef();
				if( oElement ) {
					this.__qrcode = new QRCode( this.getDomRef(), {
						text: this.getText(),
						width: this.getWidth(),
						height: this.getHeight(),
						colorDark: this.getColorDark(),
						colorLight: this.getColorLight(),
						correctLevel: iCorrectLevel
					});	
				}
			}
		},
		
		/*
		* Clear the QR Code
		*/
		clear: function() {
			if( this.__qrcode ) {
				this.__qrcode.clear();
			}
		}
		
	});


	/*
	* Override the exit method to free local resources and destroy 
	* @public
	*/	
	QRCode.prototype.exit = function() {
		this.__qrcode.clear();
		this.__qrcode = undefined;
	};
	
	return QRCodeControl;

}, /* bExport= */ true);