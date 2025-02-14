import { Object3D } from "three";
import { BaseMarker } from "./BaseMarker";

/**
 * MultiMarker takes a given image (as a URL) and use this as the pattern to detect to place
 * a given marker from three.js, in this case an given Object3D
 * @param parameters parameters for determining things the pattern URL and minimum confidence
 */

interface MultiMarkerParameters {
	patternUrl: string;
	markerObject: Object3D;
	size?: number;
	minConfidence?: number;
}

export class MultiMarker extends BaseMarker {
	public static count = 0;
	public patternUrl: string;
	public markerObject: Object3D;

	constructor(parameters: MultiMarkerParameters) {
		super(parameters);

		if (!parameters.patternUrl) {
			throw Error("Multi Marker requires a patternUrl to be passed");
		}

		if (parameters.markerObject === undefined) {
			throw Error("Multi Marker requires a markerObject to be passed");
		}

		this.patternUrl = parameters.patternUrl;
		this.markerObject = parameters.markerObject;

		this.markerObject.visible = false;
	}
}

export default MultiMarker;
