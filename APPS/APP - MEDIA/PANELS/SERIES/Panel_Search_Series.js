import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";

export default class Panel_Search_Series extends Stalk{

    constructor() {

        super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_SERIES = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_POSITION = 'UNSET';
        this.LABEL_SERIES = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_POSITION = 'UNSET';
        this.SELECT_SERIES = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_POSITION = 'UNSET';
        this.OPTIONS_SERIES = 'UNSET';

        // =========== //
        // ## BLOCK ## //
        // =========== //

        this.BLOCK_CREATE = new Create({});
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_SERIES = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#ACTIVATE_POSITION();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_SERIES.append(...[
            this.LABEL_SERIES,
            this.SELECT_SERIES,
            this.LABEL_POSITION,
            this.SELECT_POSITION
        ]);        
        return this.WRAPPER_SERIES;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    #ACTIVATE_POSITION() {
        this.SELECT_SERIES.addEventListener('change', (CHANGE_EVENT) => {
            let SERIES_TAG = this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_SERIES);
            let SERIES_DATA = this.SESSION.MEDIA.SERIES.DATA[SERIES_TAG];
            this.OPTIONS_POSITION = ['CHOOSE THE BOOKS POSITION'];
            for (let index = 0; index < parseInt(SERIES_DATA.PARTS); index++) {
                this.OPTIONS_POSITION.push(index + 1)
            };
            this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_POSITION, this.OPTIONS_POSITION)
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(PARAMETER_AUTHOR) {

        // ============== //
        // << SESSIONS >> //
        // ============== //

        await this.REQUEST_SESSION_MEDIA();
        console.log(this.SESSION.MEDIA)
        this.DATA_AUTHOR = this.SESSION.MEDIA.AUTHORS.DATA[PARAMETER_AUTHOR];

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        await this.#LABEL();
        await this.#TEXT_SETTINGS();
        await this.#OPTIONS();
        await this.#SELECT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #LABEL() {
        this.LABEL_SERIES = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Series-SelectSeries',
        }).INIT();
        this.LABEL_POSITION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Series-SelectPosition',
        }).INIT();
    };
    async #SELECT() {
        this.SELECT_SERIES = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Series-SelectSeries',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SERIES
        }).INIT();
        this.SELECT_POSITION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Series-SelectPosition',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_POSITION
        }).INIT();
    };
    async #TEXT_SETTINGS() {
        this.LABEL_SERIES.innerHTML = 'Choose a series';
        this.LABEL_POSITION.innerHTML = 'Choose the book position'
    };
    async #OPTIONS() {
        this.OPTIONS_SERIES = this.DATA_AUTHOR.WORK.SERIES;
        this.OPTIONS_SERIES.unshift('CHOOSE A SERIES');
        this.OPTIONS_POSITION = ['X-X-X-X-X-X-X-X-X'];
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_SERIES_NAME() {return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_SERIES)};
    GET_SERIES_POSITION() {return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_POSITION)};
}