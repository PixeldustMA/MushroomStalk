import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../APP - JELLYFISH/CREATE/Create.js";

export default class NV_Chunk_Pen {

    constructor() {

        // ============= //
        // ## WRAPPER ## //
        // ============= //

        this.WRAPPER_CHUNK = 'UNSET'; 

        // ============ //
        // ## HEADER ## //
        // ============ //

        this.HEADER_PEN = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_CHUNK = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_CHUNK.style.backgroundColor = this.PROPERTY_COLOUR;

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_CHUNK.append(...[
            this.HEADER_PEN
        ]);
        return this.WRAPPER_CHUNK;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_HOVER() {

    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(PARAMETER_CHUNK_SHORT, PARAMETER_CHUNK_LONG, PARAMETER_CHUNK_COLOUR)  {

        // ================ //
        // << PROPERTIES >> //
        // ================ //

        this.PROPERTY_SHORT = PARAMETER_CHUNK_SHORT;
        this.PROPERTY_LONG = PARAMETER_CHUNK_LONG;
        this.PROPERTY_COLOUR = PARAMETER_CHUNK_COLOUR;

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        await this.#HEADERS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_PEN = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Title',
        }).INIT();

        this.HEADER_PEN.innerHTML = this.PROPERTY_SHORT;
    };
}