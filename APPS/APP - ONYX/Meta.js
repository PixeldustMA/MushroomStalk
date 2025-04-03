export default class Meta {

    constructor(){};

    // << GET METABIND PATH >> //
    // << READ METABIND FILE >> //
    // << ADD NEW CHARACTER NAME FOR BUTTON >> //
    // << SAVE METABIND FILE >> //

    GENERATE_PLUS_BUTTON_CODE(PARAMETER_BUTTON_NAME) {
        return "const BUTTON_Plus = dv.el('button')/n"
            + "BUTTON_Plus.innerHTML = '+' /n"
            + "BUTTON_Plus.addEventListener('click', (event) => {"
            + "let FILE_Active = app.workspace.getActiveFile();"
            + `app.fileManager.processFrontMatter(X, (frontmatter) => {frontmatter[${PARAMETER_BUTTON_NAME}] += 1;});`
            + "})"
    };
    GENERATE_MINUS_BUTTON_CODE(PARAMETER_BUTTON_NAME) {
        return "const BUTTON_Plus = dv.el('button')/n"
            + "BUTTON_Plus.innerHTML = '+' /n"
            + "BUTTON_Plus.addEventListener('click', (event) => {"
            + "let FILE_Active = app.workspace.getActiveFile();"
            + `app.fileManager.processFrontMatter(X, (frontmatter) => {frontmatter[${PARAMETER_BUTTON_NAME}] -= 1;});`
            + "})"
    };
    UPDATE_FRONTMATTER() {
        // << FIND FRONTMATTER TEXT THAT SAYS 'FM_STOP' >> //
        // << GO TO THE LINE ABOVE AND ADD NEW PROPERTY >> //
    };
    UPDATE_TRACKING_TABLE(PARAMETER_HEADING, PARAMETER_SUB_CATEGORY, PARAMETER_ENTRY) {
        // << FIND END OF LIST AND ADD ENTRY >> //

        // The end of the list will be where there is a line with - [ ] followed by 
        // a blank line

        // << FIND END OF VIEW AND ADD NEW VIEW >> //
        // The end of view will be a sentence with view followed by a blank line

        // << FIND END OF BUTTON AND ADD NEW BUTTON SET >> //
        // The end of button will be a code word i add in the button code

        // << FIND END OF LINKS AND ADD NEW LINK >> //
        // The end of links ?
    }
}