    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/suite/ui/microchart/ComparisonMicroChart",
        "sap/suite/ui/microchart/ComparisonMicroChartData",
        "sap/ui/core/IconPool"
    ], function (Controller, JSONModel, ComparisonMicroChart, ComparisonMicroChartData,IconPool) {
        var oPageController = Controller.extend("com.kostal.vizgdhexternallayer.controller.View1", {
            onInit: function () {

            // initialize font family to icon pool
            var b = [];
			var c = {};
			//Fiori Theme font family and URI
			var t = {
				fontFamily: "SAP-icons-TNT",
				fontURI: sap.ui.require.toUrl("sap/tnt/themes/base/fonts/")
			};
			//Registering to the icon pool
			IconPool.registerFont(t);
			b.push(IconPool.fontLoaded("SAP-icons-TNT"));
			c["SAP-icons-TNT"] = t;
			//SAP Business Suite Theme font family and URI
			var B = {
				fontFamily: "BusinessSuiteInAppSymbols",
				fontURI: sap.ui.require.toUrl("sap/ushell/themes/base/fonts/")
			};
			//Registering to the icon pool
			IconPool.registerFont(B);
			b.push(IconPool.fontLoaded("BusinessSuiteInAppSymbols"));
			c["BusinessSuiteInAppSymbols"] = B;



                // get the path to the JSON file
                //var sPath = jQuery.sap.getModulePath("", "/graphData/graph.json"); 

                //var oModel = new JSONModel(sap.ui.require.toUrl(sPath));
                var oModel = new JSONModel("graphData/graph.json");
                oModel.setSizeLimit(Number.MAX_SAFE_INTEGER);
                var that = this;
                //var oGraph = this.byId("graph");
    
                this.getView().setModel(oModel);
                //oGraph.setLayoutAlgorithm(new TwoColumnsLayout());
    
                this._oModelSettings = new JSONModel({
                    source: "atomicCircle",
                    orientation: "LeftRight",
                    arrowPosition: "End",
                    arrowOrientation: "ParentOf",
                    nodePlacement: "Simple",
                    nodeSpacing: 40,
                    mergeEdges: false
                });
    
                this.getView().setModel(this._oModelSettings, "settings");
    
 /*               var fnSetContent = function (oNode) {
                    oNode.setContent(new ComparisonMicroChart({
                        size: "M",
                        scale: "M",
                        data: [
                            new ComparisonMicroChartData({
                                title: "USA",
                                value: Math.floor(Math.random() * 60),
                                color: "Neutral"
                            }),
                            new ComparisonMicroChartData({
                                title: "EMEA",
                                value: Math.floor(Math.random() * 60),
                                color: "Error"
                            }),
                            new ComparisonMicroChartData({
                                title: "APAC",
                                value: -20,
                                color: "Good"
                            }),
                            new ComparisonMicroChartData({
                                title: "LTA",
                                value: Math.floor(Math.random() * 60) * -1,
                                color: "Critical"
                            }),
                            new ComparisonMicroChartData({
                                title: "ALPS",
                                value: Math.floor(Math.random() * 20),
                                color: "Good"
                            })
                        ]
                    }).addStyleClass("sapUiSmallMargin"));
    
                }; */
    
/*                oModel.attachRequestCompleted(function (oData) {
                    that.byId("graph").getNodes().forEach(function (oNode) {
                        if (oNode.getKey() === "21" || oNode.getKey() === "18") {
                            fnSetContent(oNode);
                        }
                    }); 
                }); */
            },
            onAfterRendering: function () {
                this.byId("graphWrapper").$().css("overflow-y", "auto");
            },
            mergeChanged: function (oEvent) {
                this._oModelSettings.setProperty("/mergeEdges", !!Number(oEvent.getSource().getProperty("selectedKey")));
            },
            spacingChanged: function (oEvent) {
                this._oModelSettings.setProperty("/nodeSpacing", Number(oEvent.getSource().getProperty("selectedKey")));
            }
        });
        return oPageController;
    });
    