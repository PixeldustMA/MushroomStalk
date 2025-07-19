import { Renderer } from "../../../CONSOLE/LUNGS/Renderer.js";

export default class MANAGER_Markdown extends Renderer{

    constructor(){super()};
    
        NEW_LINE(PARAMETER_TITLE, PARAMETER_TEXT) {return `${PARAMETER_TITLE}:: ${PARAMETER_TEXT}`};

        // ============= //
    // ## HEADERS ## //
    // ============= //

    SET_HEADER_LEVEL_ONE(PARAMETER_TEXT) {
        return `# ${PARAMETER_TEXT}`;
    };
    SET_HEADER_LEVEL_TWO(PARAMETER_TEXT) {
        return `## ${PARAMETER_TEXT}`;
    };
    SET_HEADER_LEVEL_THREE(PARAMETER_TEXT) {
        return `### ${PARAMETER_TEXT}`;
    };
    SET_HEADER_LEVEL_FOUR(PARAMETER_TEXT) {
        return `#### ${PARAMETER_TEXT}`;
    };
    SET_HEADER_LEVEL_FIVE(PARAMETER_TEXT) {
        return `##### ${PARAMETER_TEXT}`;
    };
    SET_HEADER_LEVEL_SIX(PARAMETER_TEXT) {
        return `###### ${PARAMETER_TEXT}`;
    };
    // ========== //
    // ## CODE ## //
    // ========== //

    SET_CODE_BLOCK() {
        return `\`\`\``
    };

    // =================== //
    // ## TRACKER PARTS ## //
    // =================== //

    SET_COLUMN_TOWER() {
        return `> [!col] `;
    };
    SET_COLUMN_ITEM() {
        return `> `
    }
    SET_CHECK_BOX(PARAMETER_TEXT) {
        return `- [ ] ${PARAMETER_TEXT} `;
    };
    SET_VIEW_TAG(PARAMETER_TEXT) {
        return `VIEW[{${PARAMETER_TEXT}}][text]`;
    };

    // ============== //
    // ## DATAVIEW ## //
    // ============== //

    SET_DATAVIEW_MINUS_BUTTON(PARAMETER_FRONTMATTER) {
        return `await dv.view("SHELF - SCRIPTS/DV_Button_Minus" , {arg1: "${PARAMETER_FRONTMATTER}"});`
    };
    SET_DATAVIEW_ADD_BUTTON(PARAMETER_FRONTMATTER) {
        return `await dv.view("SHELF - SCRIPTS/DV_Button_Add" , {arg1: "${PARAMETER_FRONTMATTER}"});`
    };
};