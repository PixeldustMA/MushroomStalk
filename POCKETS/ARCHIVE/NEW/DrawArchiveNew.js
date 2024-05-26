// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         ADD A NEW CHARACTER        //
// ================================= //

import { Submit } from "../../../APPS/ARCHIVE/CONSOLE/Submit.js";
import { Panel_Archive } from "../../../APPS/ARCHIVE/PANELS/Panels_Archive.js";
import { Collapsible } from "../../../APPS/JELLYFISH/COLLAPSIBLE/Collapsible.js";
import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

class Page_Archive_New extends Stalk {

    constructor() {

        super();

        this.SECTION_Title = document.getElementById('SECTION_Archive-New-Title');
        this.SECTION_Submit = document.getElementById('SECTION_Archive-New-Submit');
        this.SECTION_Button = document.getElementById('SECTION_Archive-New-Buttons');
        this.SECTION_Form = document.getElementById('SECTION_Archive-New-Form');

        this.submitInstance = new Submit();

        this.NewCharacterPanel = "";
        this.activityPanel = "";
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

        wrapper.append(...[
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
    // //     let wrapperActivity = new create({
    // //         tag: 'div'
    // //     }).init();
    // //     const Activity = new activity();
    // //     const collapseActivity = new collapsible(await Activity.build(wrapperActivity), "ACTIVITY", "ACTIVITY");
    // //     const activityPanel = collapseActivity.draw();
    // //     return activityPanel;
    // // };
    // // sections are all here but hidden
    // // == FUNCTIONALITY == //
    // // async CreatePersonalPanel() {
    // //     let wrapperPersonal = new create({
    // //         tag: 'div'
    // //     }).init();
    // //     const Personal = new personal
    // //     const collapsePersonal = new collapsible(await Personal.build(wrapperPersonal), "PERSONAL", "PERSONAL");
    // //     const personalPanel = collapsePersonal.draw();
    // //     return personalPanel
    // // };
    // // async CreateAncestryPanel() {
    // //     let wrapperAncestry = new create({
    // //         tag: 'div'
    // //     }).init();
    // //     const Ancestry = new ancestry();
    // //     const collapseAncestry = new collapsible(await Ancestry.build(wrapperAncestry), "ANCESTRY", "ANCESTRY");
    // //     const ancestryPanel = collapseAncestry.draw();
    // //     return ancestryPanel;
    // // };
    // // async CreateEducationPanel() {
    // //     let wrapperEducation = new create({
    // //         tag: 'div'
    // //     }).init();
    // //     const education = new Education();
    // //     const collapseEducation = new collapsible(await education.build(wrapperEducation), "EDUCATION", "EDUCATION");
    // //     const educationPanel = collapseEducation.draw();
    // //     return educationPanel;
    // // };
    // // async CreateHalexPanel() {
    // //     let wrapperHalex = new create({
    // //         tag: 'div'
    // //     }).init();
    // //     const halex = new Halex();
    // //     const collapseHalex = new collapsible(await halex.build(wrapperHalex), "HALEX", "HALEX");
    // //     const halexPanel = collapseHalex.draw();
    // //     return halexPanel;
    // // };
    // // async CreateLocationPanel() {
    // //     let wrapperLocation = new create({
    // //         tag: 'div'
    // //     }).init();
    // //     const Location = new location();
    // //     const collapseLocation = new collapsible(await Location.build(wrapperLocation), "LOCATION", "LOCATION");
    // //     const locationPanel = collapseLocation.draw();
    // //     return locationPanel;
    // // };
    // // async CreateEmploymentPanel() {
    // //     let wrapperEmployment = new create({
    // //         tag: 'div'
    // //     }).init();
    // //     const employment = new Employment();
    // //     const collapseEmployment = new collapsible(await employment.build(wrapperEmployment), "EMPLOYMENT", "EMPLOYMENT");
    // //     const employmentPanel = collapseEmployment.draw();
    // //     return employmentPanel;
    // // }
    // // async CreateOrganisationPanel() {
    // //     let wrapperOrganisation = new create({
    // //         tag: 'div'
    // //     }).init();
    // //     const Organisation = new organisation();
    // //     const collapseOrganisation = new collapsible(await Organisation.build(wrapperOrganisation), "ORGANISATION", "ORGANISATION");
    // //     const organisationPanel = collapseOrganisation.draw();
    // //     return organisationPanel;
    // // }
    // // async CreateRelationshipPanel() {
    // //     let wrapperRelationship = new create({
    // //         tag: 'div'
    // //     }).init();
    // //     const relationship = new Relationship();
    // //     const collapseRelationship = new collapsible(await relationship.build(wrapperRelationship), "RELATIONSHIP", "RELATIONSHIP");
    // //     const RelationshipPanel = collapseRelationship.draw();
    // //     return RelationshipPanel;
    // // };
    // #BUTTON_ADD(button, panel) {
    //     button.addEventListener('click', (event) => {
    //         sectionForm.append(panel);
    //     });
    //     return button;
    // };
    STICK_HEADER() {
        if (window.scrollY > this.sticky) {
            this.SECTION_Submit.classList.add("sticky");
        } else {
            this.SECTION_Submit.classList.remove("sticky");
        }
    };
    async INITIALISE_PAGE() {
        await this.RESET_MEMORY();
        const panelArchive = new Panel_Archive();
        await panelArchive.INITIALISE_PAGE();
        this.NewCharacterPanel = panelArchive.CHARACTER();
        this.sticky = this.SECTION_Submit.offsetTop;
    }
};

const pageArchiveNew = new Page_Archive_New();
await pageArchiveNew.INITIALISE_PAGE();
pageArchiveNew.DRAW_PAGE();
window.onscroll = function() {pageArchiveNew.STICK_HEADER()};
