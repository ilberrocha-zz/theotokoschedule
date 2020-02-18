sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return resourceBundle.getText("contactsStatusA");
				case "B":
					return resourceBundle.getText("contactsStatusB");
				case "C":
					return resourceBundle.getText("contactsStatusC");
				default:
					return sStatus;
			}
		}
	};
});