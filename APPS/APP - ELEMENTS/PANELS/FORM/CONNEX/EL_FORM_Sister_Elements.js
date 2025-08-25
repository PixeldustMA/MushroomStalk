import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_FORM_Sister {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_SISTER = 'UNSET';
        this.WRAPPER_DISPLAY = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_SISTER = 'UNSET';

        this.LABELS = [];
    };

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_SISTER = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_SISTER.append(...[
            this.HEADER_SISTER,
            this.WRAPPER_DISPLAY
        ]);
        return this.WRAPPER_SISTER;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // =========== //
        // << BUILD >> //
        // =========== //

        await this.#HEADERS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_SISTER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Sister-Sister'
        }).INIT();

        this.HEADER_SISTER.innerHTML = 'SISTER ELEMENTS'
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    // ========= //
    // << GET >> //
    // ========= //

    GET_SISTERS() {return this.LABELS;};

    // ========= //
    // << SET >> //
    // ========= //
    
    async SET_SISTERS(PARAMETER_VALUE) {

        console.log(PARAMETER_VALUE.length)
        for (let INDEX_ELEMENT = 0; INDEX_ELEMENT < PARAMETER_VALUE.length; INDEX_ELEMENT++) {
            const ELEMENT = PARAMETER_VALUE[INDEX_ELEMENT];
            console.log(INDEX_ELEMENT);
            let LABEL = await new Create({
                CREATE_CONFIG_ELEMENT_TAG: 'label',
                CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Sister-Element'
            }).INIT();
            LABEL.innerHTML = ELEMENT;
            // this.LABELS.push(ELEMENT);
            // console.log(this.LABELS)
            this.WRAPPER_DISPLAY.append(LABEL);
        };
    };
    SET_SISTER_LIST(PARAMETER_ARRAY) {
        for (let index = 0; index < PARAMETER_ARRAY.length; index++) {
            const element = PARAMETER_ARRAY[index];
            if (!this.LABELS.includes(element)){this.LABELS.push(element);}
            
        }
    };
}