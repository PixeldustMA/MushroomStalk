import { Location } from "../../APPS/EXPLORER/Locations/Location.js";
import { Planet } from "../../APPS/EXPLORER/Locations/Planet.js";

class Globe {

    constructor(
        planetName
    ) {
        this.planetName = planetName;
        this.planet = new Planet(this.planetName);
        this.Location = new Location(this.planetName);
    }
}

export { Globe} 