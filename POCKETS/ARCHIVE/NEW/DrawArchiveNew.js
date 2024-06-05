// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         ADD A NEW CHARACTER        //
// ================================= //

import { Panels_Activity } from "../../../APPS/ARCHIVE/ACTIVITY/Panels_Activity.js";
import { Panel_Archive } from "../../../APPS/ARCHIVE/PANELS/Panels_Archive.js";
import { Collapsible } from "../../../APPS/JELLYFISH/COLLAPSIBLE/Collapsible.js";
import { Submit } from "../../../APPS/ARCHIVE/CONSOLE/Submit.js";
import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

class Page_Archive_New extends Stalk {

    constructor() {

        super();

        // == SECTIONS == //
        this.SECTION_Title = document.getElementById('SECTION_Archive-New-Title');
        this.SECTION_Submit = document.getElementById('SECTION_Archive-New-Submit');
        this.SECTION_Button = document.getElementById('SECTION_Archive-New-Buttons');
        this.SECTION_Form = document.getElementById('SECTION_Archive-New-Form');

        // == INSTANCES == //
        this.submitInstance = new Submit();

        // == PANELS == //
        this.NewCharacterPanel = "";
        this.activityPanel = "";

        // == FLAGS == //
        this.sticky = 0;
    };

    DRAW_PAGE() {
        this.SECTION_Title.append(this.PANEL_TITLE());
        this.SECTION_Submit.append(this.PANEL_SUBMIT());
        this.SECTION_Form.append(this.PANEL_FORM());
        this.SECTION_Button.append(this.PANEL_BUTTONS());
    };
    PANEL_TITLE() {

        // == WRAPPERS == //
        let wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Archive-New-Title',
            classes: ['TITLE_PANEL']
        }).init();

        // == TEXT == //
        let headerArchiveNew = new create({
            tag: 'h1',
            id: 'HEADER_Archive-New-Header',
            elementText: ['ARCHIVE', 'HEADERS', 'NEW'],
            classes: ['defaultTitle']
        }).init();

        // == ATTACHMENTS == //
        wrapper.append(...[
            headerArchiveNew
        ]);
        return wrapper;
    };
    PANEL_FORM() {

        // == WRAPPERS == //
        let wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Archive-New-Form',
            classes: ['FORM_PANEL']
        }).init();

        // == PANEL == //
        const collapseRequired = new Collapsible(this.NewCharacterPanel, "REQUIRED", "REQUIRED");
        const requiredCharacterPanel = collapseRequired.DRAW();

        // == ATTACHMENTS == //
        wrapper.append(...[
            requiredCharacterPanel
        ]);
        return wrapper;
    };
    PANEL_BUTTONS() {

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Buttons-New',
            classes: ['LEFT_PANEL']
        }).init();

        // == BUTTONS == //
        const activityButton = new create({
            tag: 'button',
            id: 'BUTTON_New-Character-Activity',
            classes: ['menuButton']
        }).init();

        // == ATTACHMENTS == //
        this.#BUTTON_ADD(activityButton, this.activityPanel)
        wrapper.append(...[
            activityButton
        ]);
        return wrapper;
    };
    PANEL_SUBMIT() {

        // == OPTIONS == //
        const sections = [
            "CHOOSE SECTION", 
            "DRAGON", 
            "KESSYA", 
            "WAR", 
            "FINAL TIMELINE", 
            "NIGHTMARE"
        ];

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Buttons-New',
            classes: ['SUBMIT_PANEL']
        }).init();

        // == INPUTS == //
        let selectSection = new create({
            tag: 'select',
            options: sections,
            id: 'SELECT_Archive-New-Sections',
            boxName: 'SECTION SELECT'
        }).init();

        // == TEXTT == //
        let labelSection = new create({
            tag: 'label',
            id: 'LABEL_Archive-New-Section',
            elementText: ['ARCHIVE', 'HEADERS', 'SECTION'],
            labelFor: 'SECTION SELECT'
        }).init();

        // == BUTTONS == //
        let buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT'],
            classes: ["BUTTON_SUBMIT"]
        }).init();

        // == LISTENERS == //
        buttonSubmit.addEventListener('click', (event) => {
            let chosenSection = selectSection.options[selectSection.selectedIndex].text;
            let sect = {SECTION: chosenSection};
            this.REMEMBER("SECTION", sect)
            .then((DATA) => {
                this.submitInstance.SUBMIT_NEW_CHARACTER().then((RESULT) => {return RESULT});     
                return DATA
            });
        });

        // == ATTACHMENTS == //
        wrapper.append(...[
            labelSection,
            selectSection,
            buttonSubmit
        ]);
        return wrapper;
    }
    async PANEL_SELECT_ACTIVITY() {

        // == WRAPPERS == //
        let wrapperActivity = new create({
            tag: 'div'
        }).init();

        // == PANELS == //
        const instanceActivity = new Panels_Activity();
        const collapseActivity = new Collapsible(instanceActivity.DRAW(wrapperActivity), "ACTIVITY", "ACTIVITY");
        const activityPanel = collapseActivity.DRAW();

        // == ATTACHMENTS == //
        return activityPanel;
    };
    async RESET_MEMORY() {
        this.path = await this.INIT_ROUTE({
            TAG: 'NEW_CHARACTER',
            SECTION: 'DATABASE',
            SUBSECTION: 'ARCHIVE'
        });
        let memory = {
            REQUIRED: "NONE",
            ACTIVITY: "NONE",
            PERSONAL: "NONE",
            ANCESTRY: "NONE",
            EDUCATION: "NONE",
            HALEX: "NONE",
            EMPLOYMENT: "NONES"
        };
        this.data = memory;
        await this.SAVE();
    };
    STICK_HEADER() {
        if (window.scrollY > this.sticky) {
            this.SECTION_Submit.classList.add("sticky");
        } else {
            this.SECTION_Submit.classList.remove("sticky");
        };
    };
    #BUTTON_ADD(button, panel) {
        button.addEventListener('click', (event) => {
            this.SECTION_Form.append(panel);
        });
        return button;
    };
    async INITIALISE_PAGE() {
        await this.RESET_MEMORY();
        const panelArchive = new Panel_Archive();
        await panelArchive.INITIALISE_PAGE();
        this.NewCharacterPanel = panelArchive.CHARACTER();
        this.sticky = this.SECTION_Submit.offsetTop;

        this.activityPanel = await this.PANEL_SELECT_ACTIVITY();
    }
};

// == RUN PAGE == //
const pageArchiveNew = new Page_Archive_New();
await pageArchiveNew.INITIALISE_PAGE();
pageArchiveNew.DRAW_PAGE();
window.onscroll = function() {pageArchiveNew.STICK_HEADER()};
