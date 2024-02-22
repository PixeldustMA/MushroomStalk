import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { SetDay } from "../../CLOCK/Calender.js";
import { jellyRoute } from "../CONSOLE/JellyfishRoutes.js";

// == INSERT RENDER CLASS HERE == //
const connect = new Stalk();

class jelly {

    constructor() {
        this.path = "";
        this.data = "";
        this.routeObject;
        // this.InitMemory();
    }

    async InitMemory() {
        const y = await fetch('../../APPS/JELLYFISH/MEMORY/RouteMemory.json')
            .then(response => {
                if (!response.ok) {
                    // TODO ERROR
                    console.log("ROUTE NOT VALID");
                }
                return response.json();
            })
            .then(json => {
                this.routeObject = json;
                return this.routeObject;
            })
            .catch(function () {
                console.log("ROUTE NOT VALIDdd");
            });
        this.routeObject = await y;
        return this.routeObject;
    }

    // == CONNECT TO A READ FUNCTION == //
    async Read() {
        connect.path = this.path;
        return await connect.Read();
    }

    // == CONNECT TO A SAVE FUNCTION == //
    async Save() {
        connect.path = this.path;
        connect.data = this.data;
        return await connect.Save();
    }

    // == CONNECT TO A PATH CREATOR == //
    async formPath() {
        connect.path = this.path;
        return await connect.fetchPath();        
    }

    // == ADD DAY GENERATOR == //
    fetchDay() {
        return SetDay();
    }
    
    // == ADD A LOAD FUNCTION == //
    load(tag) {
        return connect.load(tag);
    }

    // == ROUTES == //
    async search(tag) {
        const trails = new jellyRoute();
        return await trails.route(tag);
    }
}
// MACHETE - TRACKERSET
export {jelly}
