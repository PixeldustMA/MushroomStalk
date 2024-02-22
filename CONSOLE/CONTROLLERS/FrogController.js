import { Messages } from "../PLATYPUS/Messages.js";

class Frogs extends Messages {

    constructor () {
        super()
    }

    async FetchMessage() {
        return await this.syncMessages()
    }
}

export {Frogs}