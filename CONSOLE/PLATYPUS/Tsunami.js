import { User } from "../../APPS/USERS/User.js";
import { Renderer } from "./Renderer.js";

class Tsunami extends Renderer {

    constructor() {
        super();
        this.userInstance = new User();
    };
    async EARTHQUAKE () {
        await this.CLEAR_USERS();
    };
    async CLEAR_USERS() {
        await this.userInstance.CLEAR_USERS();
        await this.userInstance.RESET_FROGS();
        await this.userInstance.RESET_RESIDENT();
        await this.userInstance.RESET_USER_MEMORY();
    };
};

export {Tsunami}