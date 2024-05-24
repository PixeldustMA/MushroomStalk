import { Renderer } from "./Renderer.js";
import { User } from "../../APPS/USERS/User.js";

class Dissolve extends Renderer {

    constructor() {
        super()
    };

    async DISSOLVE(Globule) {
        console.log(Globule)
        if (Globule.hasOwnProperty('USERS')) {
            await this.IMPORT_USERS(Globule['USERS']);
        }
    }
    async IMPORT_USERS(userFiles) {
        for (const userKey in userFiles) {
            if (Object.hasOwnProperty.call(userFiles, userKey)) {
                const userDataElement = userFiles[userKey][1];
                let userInstance = new User();
                userInstance.userName = userKey;
                userInstance.userData = userDataElement;
                await userInstance.NEW_USER();
            };
        };
    };
};

export {Dissolve}
