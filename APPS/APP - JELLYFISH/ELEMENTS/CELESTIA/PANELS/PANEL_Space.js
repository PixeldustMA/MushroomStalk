import Connector_Jellyfish from "../../CONSOLE/ARTERIES/Connector_Jellyfish";
import Create from "../APP - JELLYFISH/CREATE/Create";

export default class PANEL_SPACE {

    constructor() {

        this.LABEL_SPACE = 'UNSET';
        this.SELECT_SPACE = 'UNSET';
        this.OPTIONS_SPACE = []
    };

        /**
     * ## PANEL - SPACE
     * 
     * -----------------------
     * 
     * Create a panel focussed around space
     * 
     * ------------------------
     * ### RETURNS -->> {PANEL}
     * @returns {HTMLElement}
     */
    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Character = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // << ATTACHMENNTS >> //
        WRAPPER_Character.append(...[
            this.LABEL_SPACE,
            this.SELECT_SPACE
        ]);
        return WRAPPER_Character;
    };
    async INITIALISE() {

    };
    ACTIVATE_UPDATE() {
        selectSpace.addEventListener('change', (event) => {

            this.memory.SPACE.SPACE = selectSpace.options[selectSpace.selectedIndex].text;
        });

    }
    async #TEXT() {
        this.LABEL_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TYPE: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Choose-Space'
        }).INIT();

        this.LABEL_SPACE.innerHTML = 'SPACE';
    };
    async #SELECT() {

        this.SELECT_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TYPE: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Space-Choice',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SPACE,
            CREATE_CONFIG_TAGGING_BOXNAME: 'SPACE-SELECT',
            CREATE_CONFIG_PERSONALITY_CLASSES:['FORM_SELECT']
        }).INIT();

    };
    #OPTIONS() {

                // const space = await this.Kessikaya.SEARCH_SPACE();
                // space.unshift('CHOOSE SPACE');
    }
}