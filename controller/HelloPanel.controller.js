sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
      onShowHello : function () {
         // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("Save Contact");
         var sMsg = oBundle.getText("Say Contact saved successfully.", [sRecipient]);
         // show message
         MessageToast.show(sMsg);
      },
		onOpenDialog : function () {
			MessageToast.show('Contact saved successfully!');
		},

		onCloseDialog : function () {
			this.byId("helloDialog").close();
		}
   });
});