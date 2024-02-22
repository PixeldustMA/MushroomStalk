import { Planet } from "./Planet.js";

class Location extends Planet {

    constructor(
        planetName
    ) {
        super();
        this.planet = planetName;
        this.location = {
            Space: "",
            Sector: "",
            System: "",
            Planet: this.planet
        }
    }
    /**
     * CREATE A LOCATION OBJECT
     * @returns {object}
     */
    async constructLocation() {

        const data = await this.fetchPlanetData();
        this.location.Space = data.Location.Space;
        this.location.Sector = data.Location.Sector;
        this.location.System = data.Location.System;
        return this.location;
    }

}

export {Location}