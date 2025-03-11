export default class DrawWizard {

    constructor(){

    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    /**
     * ## DRAW THE PAGE
     * 
     * -------------------
     * 
     * #### *CLASS MUST BE INITIALISED FIRST*
     * 
     * Run all functions associated with drawing the welcome page
     * 
     * Attach all relevant wrappers to their appropriate sections
     * 
     * Run this function to run the class
     */
    async DRAW_PAGE() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'DRAWING WIZARD PAGE';
        await this.INSTANCE_BEETLE.READ_MODE();

        await this.REMEMBER();

        this.SECTION_Title.append(this.PANEL_Title());
        // this.SECTION_Belly.append(this.PANEL_Belly());
    };
    PANEL_Title() {

    };
}