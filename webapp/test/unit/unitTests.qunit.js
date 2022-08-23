/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comkostal/viz_gdh_external_layer/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
