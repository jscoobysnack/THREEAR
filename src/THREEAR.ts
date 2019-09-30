import Source from "./Source";
import PatternMarker from "./PatternMarker";
import BarcodeMarker from "./BarcodeMarker";
import MultiMarker from "./MultiMarker";
import { Controller, ControllerParameters } from "./Controller";

let controller: Controller;
function initialize(parameters: Partial<ControllerParameters>) {
	if (controller === undefined || controller.disposed === true) {
		controller = new Controller(parameters);
	}
	return controller.postInit;
}

export type Controller = typeof controller;
export { Source, initialize, PatternMarker, BarcodeMarker, MultiMarker };
