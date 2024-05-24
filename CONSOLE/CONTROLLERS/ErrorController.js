import { Renderer } from "../PLATYPUS/Renderer.js";
import { create } from "../PLATYPUS/Create.js";
import { pathways } from "../ROUTES/Routes.js";

class Mould extends Renderer{

    constructor() {
        super();
    }

    INVALID_IMAGE() {
        console.log("IMAGE NOT FOUND")
    };
    async INVALID_ROUTE() {

        // == SOURCES == //
        const pathway = new pathways({TAG:'INVALID', SECTION:'ANIMATION', SUBSECTION:0, ASSETS: 1});
        await pathway.SETUP();
        this.path = await pathway.ROUTE();

        // == IMAGE == //
        const imageBox = new create({
            tag: 'img',
            id: 'IMAGE_Invalid-Box',
            source: this.path
        }).init();

        // == ATTACHMENTS == //
        return imageBox;
    };

}

export {Mould}