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
			//library: 'it.designfuture.qrcode',
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
				colorDark : {type : "sap.ui.core.CSSColor", group : "Appearance", defaultValue : "#000000"},
				
				/**
				 * HTML color (white/#ffffff) of the dark part of the QRCode
				 */
				colorLight : {type : "sap.ui.core.CSSColor", group : "Appearance", defaultValue : "#ffffff"},
				
				/**
				 * Error correction level 0/1/2/3
				 */
				correctLevel : {type : "int", group : "Appearance", defaultValue : QRCode.CorrectLevel.H}
			},
			aggregations: {},
			events: {}
		},
		
		init: function() {
			//	Init all the things!
		},
		
		onBeforeRendering: function() {
			this.destroy();
		},
		
		onAfterRendering: function() {
			var iCorrectLevel = this.getCorrectLevel() < 0 || this.getCorrectLevel() > 3 ? QRCode.CorrectLevel.H : this.getCorrectLevel();
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
		},
		
		//////////////////////////////////////////////
		// GETTER / SETTER
		//////////////////////////////////////////////
		
		/*
		* Set a new text of the QR Code
		* @public
		* @param {string} sText - Text of the QR Code
		* @param {boolean} bSkipDraw - skip the redraw
		*/
		setText: function(sText) {
			this.setProperty("text", sText, false);
		},
		
		/*
		* Set the width of the QR Code
		* @public
		* @param {int} iWidth - Width of the QR Code
		*/
		setWidth: function(iWidth) {
			this.setProperty("width", iWidth, false);
		},
		
		/*
		* Set the height of the QR Code
		* @public
		* @param {int} iHeight - Height of the QR Code
		*/
		setHeight: function(iHeight) {
			this.setProperty("height", iHeight, false);
		},
		
		/*
		* Set the RGB dark color of the QR Code
		* @public
		* @param {string} sColorDark - RGB dark color of the QR Code
		*/
		setColorDark: function(sColorDark) {
			this.setProperty("colorDark", sColorDark, false);
		},
		
		/*
		* Set the RGB light color of the QR Code
		* @public
		* @param {string} sColorLight - RGB light color of the QR Code
		* @param {boolean} bSkipDraw - skip the redraw
		*/
		setColorLight: function(sColorLight) {
			this.setProperty("colorLight", sColorLight, false);
		},
		
		/*
		* Set the Error Correction Level of the QR Code
		* @public
		* @param {int} iCorrectLevel - RGB light color of the QR Code
		*/
		setCorrectLevel: function(iCorrectLevel) {
			if( isNaN(iCorrectLevel) ) {
				throw new Error("Value " + iCorrectLevel + " is not a valid integer for Error Correction Level");
			}
			
			var correctLevel = parseInt(iCorrectLevel, 10);
			if( iCorrectLevel < 0 || iCorrectLevel > 3 ) {
				throw new Error("Value " + correctLevel + " is not a valid value for Error Correction Level (min 0, max 3)");
			}
			
			this.setProperty("correctLevel", correctLevel, false);
		},
		
		//////////////////////////////////////////////
		// QRCODE METHODS
		//////////////////////////////////////////////
		
		/*
		* Clear the QR Code
		*/
		clear: function() {
			if( this.__qrcode ) {
				this.__qrcode.clear();
			}
		},
		
		/*
		* Destroy the QR Code
		*/
		destroy: function() {
			this.clear();
			this.__qrcode = undefined;
		}
		
	});


	/*
	* Override the exit method to free local resources and destroy 
	* @public
	*/	
	QRCodeControl.prototype.exit = function() {
		this.destroy();
	};
	
	return QRCodeControl;

}, /* bExport= */ true);