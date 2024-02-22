import { Globe } from "./SpaceController.js";
import { Stalk } from "./StalkController.js";

class Sunflower extends Globe{

    constructor(
        origin,
        target,
        startDate = 0) {
        super()
        this.originyear = parseInt(startDate);
        this.stalk = new Stalk();
        this.origin = origin;
        this.target = target;
    }

	async convert() {

        const time = await this.stalk.machete("TIME");
        this.stalk.path = time;
        const data = await this.stalk.Read();

        let originPlanetArray = data[this.origin.toUpperCase()];
        let targetPlanetArray = data[this.target.toUpperCase()];

        let y = this.originyear + (
            parseInt(targetPlanetArray[0]) -
            parseInt(originPlanetArray[0]));

        let planetObject = {};
        planetObject[this.origin.toUpperCase()] = this.originyear;
        planetObject[originPlanetArray[1]] = this.conversion(this.originyear, data, originPlanetArray, 1);
        planetObject[originPlanetArray[2]] = this.conversion(this.originyear, data, originPlanetArray, 2);
        planetObject[originPlanetArray[3]] = this.conversion(this.originyear, data, originPlanetArray, 3);
        planetObject["UHX"] = this.uhxConversion(data, originPlanetArray, this.originyear);

        let targetObject = {};
        targetObject[this.target.toUpperCase()] = y;
        targetObject[targetPlanetArray[1]] = this.conversion(y, data, targetPlanetArray, 1);
        targetObject[targetPlanetArray[2]] = this.conversion(y, data, targetPlanetArray, 2);
        targetObject[targetPlanetArray[3]] = this.conversion(y, data, targetPlanetArray, 3);
        targetObject["UHX"] = this.uhxConversion(data, targetPlanetArray, y);

        return {
            planetObject,
            targetObject
        }
	}

    conversion(startDate, data, arr, value) {

        return startDate + (
            parseInt(data[arr[value]]) - 
            parseInt(arr[0])
        )
    }

    uhxConversion(data, array, YEAR) {
        return YEAR + (
            parseInt(data["UHX"]) -
            parseInt(array[0]));
    }

};

export { Sunflower};