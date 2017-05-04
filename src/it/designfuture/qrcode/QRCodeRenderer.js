sap.ui.define(['jquery.sap.global'],
	function(jQuery) {
	"use strict";


	/**
	* QRCode renderer.
	* @static
	* @namespace
	*/
	var QRCode = {};
	
	/**
	 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
	 * @param {sap.ui.core.Control} oControl An object representation of the control that should be rendered.
	 */
	QRCode.render = function(oRM, oControl) {
		oRM.write("<div");
		oRM.writeControlData(oControl);
		oRM.addClass("opeui5-qrcode");
		oRM.writeClasses();
		oRM.write(">");
		oRM.write("</div>");
	};


	return QRCode;

}, /* bExport= */ true);