/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library it.designfuture.qrcode.
 */
sap.ui.define([],  function() {

		"use strict";

		/**
		 * Suite controls library.
		 *
		 * @namespace
		 * @name it.designfuture.qrcode
		 * @author Emanuele Ricci <stermi@gmail.com>
		 * @version 0.0.10
		 * @public
		 */
		
		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name : "it.designfuture.qrcode",
			noLibraryCSS: true,
			version: "0.0.10",
			dependencies : ["sap.ui.core"],
			types: [],
			interfaces: [],
			controls: [ 
				"it.designfuture.qrcode.QRCode"
			],
			elements: []
		});

		return it.designfuture.qrcode;

}, /* bExport= */ false);