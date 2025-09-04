import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

export default class NV_Chunk_Pen extends Stalk{

    constructor() {

        // ============= //
        // ## WRAPPER ## //
        // ============= //

        this.WRAPPER_RAINBOW = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_RAINBOW = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_RAINBOW.append(...[]);
        return this.WRAPPER_RAINBOW;
    };

    // ============= //
    // ## UTILITY ## //
    // ============= //

    async LOAD_CHUNKS() {

        let ARRAY_PENS = this.ACTIVE_PENS;
        for (let INDEX_PENS = 0; INDEX_PENS < ARRAY_PENS.length; INDEX_PENS++) {
            const PEN = ARRAY_PENS[INDEX_PENS];
            let INSTANCE_CHUNK = new NV_Chunk_Pen();
            await INSTANCE_CHUNK.INITIALISE(this.SESSION.NOVA.PENS[PEN].SHORT, this.SESSION.NOVA.PENS[PEN].LONG, this.SESSION.NOVA.PENS[PEN].COLOUR);
            this.WRAPPER_RAINBOW.append(INSTANCE_CHUNK.DRAW());
        };
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE()  {

        // ============= //
        // << SESSION >> //
        // ============= //

        await this.REQUEST_SESSION_NOVA();

        // ============== //
        // << ELEMENTS >> //
        // ============== //

    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

}