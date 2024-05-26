import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";

class Sunflower extends Stalk{
    constructor(origin, target, startDate = 0) {
        super();
        this.originyear = parseInt(startDate);
        this.origin = origin;
        this.target = target;
    };
	async CONVERT() {
        this.path = await this.INIT_ROUTE({
            TAG: 'TIME',
            SECTION: 'SUNFLOWER',
            SUBSECTION: 'MEMORY'
        });
        const data = await this.READ();

        let originPlanetArray = data[this.origin.toUpperCase()];
        let targetPlanetArray = data[this.target.toUpperCase()];

        let y = this.originyear + (
            parseInt(targetPlanetArray[0]) -
            parseInt(originPlanetArray[0]));

        let planetObject = {};
        planetObject[this.origin.toUpperCase()] = this.originyear;
        planetObject[originPlanetArray[1]] = this.CONVERSION(this.originyear, data, originPlanetArray, 1);
        planetObject[originPlanetArray[2]] = this.CONVERSION(this.originyear, data, originPlanetArray, 2);
        planetObject[originPlanetArray[3]] = this.CONVERSION(this.originyear, data, originPlanetArray, 3);
        planetObject["UHX"] = this.UXX_CONVERSION(data, originPlanetArray, this.originyear);

        let targetObject = {};
        targetObject[this.target.toUpperCase()] = y;
        targetObject[targetPlanetArray[1]] = this.CONVERSION(y, data, targetPlanetArray, 1);
        targetObject[targetPlanetArray[2]] = this.CONVERSION(y, data, targetPlanetArray, 2);
        targetObject[targetPlanetArray[3]] = this.CONVERSION(y, data, targetPlanetArray, 3);
        targetObject["UHX"] = this.UXX_CONVERSION(data, targetPlanetArray, y);

        return {
            planetObject,
            targetObject
        }
	};
    CONVERSION(startDate, data, arr, value) {

        return startDate + (
            parseInt(data[arr[value]]) - 
            parseInt(arr[0])
        )
    };
    UXX_CONVERSION(data, array, YEAR) {
        return YEAR + (
            parseInt(data["UHX"]) -
            parseInt(array[0]));
    };
};

export { Sunflower};