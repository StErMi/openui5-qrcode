/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library it.designfuture.qrcode.
 */
sap.ui.define([
	'jquery.sap.global', 
	'sap/ui/core/library' // library dependency
	],  function(jQuery, library) {

		"use strict";

		/**
		 * Suite controls library.
		 *
		 * @namespace
		 * @name it.designfuture.qrcode
		 * @author Emanuele Ricci <stermi@gmail.com>
		 * @version ${version}
		 * @public
		 */
		
		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name : "it.designfuture.qrcode",
			noLibraryCSS: true,
			version: "${version}",
			dependencies : ["sap.ui.core", "sap.m"],
			types: [],
			interfaces: [],
			controls: [ 
				"it.designfuture.qrcode.QRCode"
			],
			elements: []
		});

		return it.designfuture.qrcode;

}, /* bExport= */ false);