export default class BAR_Title {

    constructor({
        TITLE_CONFIG_TEXT = 0
    }){

        // ========== //
        // ## TAGS ## //
        // ========== //

        this.TAG_TEXT = TITLE_CONFIG_TEXT;
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();
        WRAPPER_Page.id = `WRAPPER_Title-${this.TAG_TEXT}`;
        this.WRAPPER_Contents = new Connector_Jellyfish().INITIALISE_WRAPPER();
        WRAPPER_Page.id = `WRAPPER_Title-Contents-${this.TAG_TEXT}`;

        // =============== //
        // << LISTENERS >> //
        // =============== //


        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.HEADER_PANEL,
            this.WRAPPER_Contents
        ]);
        return WRAPPER_Page;

    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============= //
        // << SESSION >> //
        // ============= //


        // =========== //
        // << BUILD >> //
        // =========== //

        await this.#TEXT();

    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT() {

        // ============ //
        // << HEADER >> //
        // ============ //

        this.HEADER_PANEL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Sector-Panel'
        }).INIT();

        this.HEADER_PANEL.innerHTML = this.TAG_TEXT;

    };

    // ============ //
    // ## ACCESS ## //
    // ============ //

    APPEND_CONTENTS(PARAMETER_ARRAY_CONTENTS){
        this.WRAPPER_Contents.append(...PARAMETER_ARRAY_CONTENTS);
    };
};