import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

class Page_Archive_Foyer extends Stalk{

    constructor() {
        super();

        this.SECTION_Title = document.getElementById('Section_TitleBar');
        this.SECTION_Search = document.getElementById('Section_Search');
        this.SECTION_New = document.getElementById('Section_New-Character');
        this.SECTION_Active = document.getElementById('Section_Active');

        this.Active_Character = {};
        this.Character_Name = "";
    };

    DRAW_PAGE() {
        this.SECTION_Title.append(this.PANEL_TITLE());
        this.SECTION_Search.append(this.PANEL_SEARCH());
        this.SECTION_New.append(this.PANEL_NEW_CHARACTER());
        this.SECTION_Active.append(this.PANEL_ACTIVE());
    };
    PANEL_TITLE() {

        // == WRAPPER == //
        let wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Archive-Entry-Title'
        }).init();

        // == TEXT == //
        let archiveHeader = new create({
            tag: 'h1',
            id: 'HEADER_Archive-Main',
            elementText: ['AREA', 'ARCHIVE', 'ARCHIVE'],
        }).init();

        // == ATTACHMENT == //
        wrapper.append(...[
            archiveHeader
        ]);

        return wrapper;
    };
    PANEL_SEARCH() {

        // == WRAPPERS == //
        const searchWrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Entry-Search'
        }).init();

        // == TEXT == //
        const headerSearch = new create({
            tag: 'h2',
            elementText: ['ARCHIVE', 'HEADERS', 'SEARCH'],
            id: 'HEADER_Entry-Search-Title'
        }).init();

        // == BUTTONS == //
        const buttonDisplay = new create({
            tag: 'button',
            id: 'BUTTON_Archive-Entry-Display',
            elementText: ['USEFUL', 'GENERAL', 'OPEN'],
        }).init()

        searchWrapper.append(...[headerSearch, buttonDisplay])
        return searchWrapper;
    };
    PANEL_NEW_CHARACTER() {

        // == WRAPPERS == //
        const wrapperNew = new create({
            tag: 'div',
            id: 'WRAPPER_Entry-New'
        }).init();

        // == TEXT == //
        const headerNew = new create({
            tag: 'h2',
            elementText: ['ARCHIVE', 'HEADERS', 'NEW'],
            id: 'HEADER_Entry-New-Title'
        }).init();

        // == BUTTONS == //
        const buttonNew = new create({
            tag: 'button',
            id: 'BUTTON_Archive-Entry-New',
            elementText: ['USEFUL', 'GENERAL', 'OPEN'],
        }).init()

        buttonNew.addEventListener('click', (DISPLAY_EVENT) => {
            this.LOAD(['ADD', 'MAINPAGES', 'ARCHIVE']);
        });

        wrapperNew.append(...[headerNew, buttonNew])
        return wrapperNew;
    }
    PANEL_ACTIVE() {

        // == WRAPPERS == //
        const wrapperActive = new create({
            tag: 'div',
            id: 'WRAPPER_Entry-Active'
        }).init();

        // == TEXT == //
        const headerActive = new create({
            tag: 'h2',
            elementText: ['ARCHIVE', 'HEADERS', 'ACTIVE'],
            id: 'HEADER_Entry-New-Title'
        }).init();
        const headerUpdate = new create({
            tag: 'h2',
            elementText: ['ARCHIVE', 'HEADERS', 'UPDATE'],
            id: 'HEADER_Entry-Update-Title'
        }).init();
        const headerCurrent = new create({
            tag: 'h3',
            elementText: ['ARCHIVE', 'HEADERS', 'UNSELECTED'],
            id: 'HEADER_Entry-Current-Selected'
        }).init();
        headerCurrent.innerHTML = this.Character_Name;

        // == BUTTONS == //
        const buttonChange = new create({
            tag: 'button',
            id: 'BUTTON_Archive-Entry-New',
            elementText: ['ARCHIVE', 'BUTTONS', 'CHANGE'],
        }).init();
        const buttonUpdate = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'UPDATE']
        }).init();

        buttonChange.addEventListener('click', (DISPLAY_EVENT) => {
            this.LOAD([
                'ARCHIVE_SEARCH',
                "MAINPAGES",
                "ARCHIVE"
            ]);
        });
        buttonUpdate.addEventListener('click', (DISPLAY_EVENT) => {
            this.LOAD([
            "ARCHIVE_UPDATE",
            "MAINPAGES",
            "ARCHIVE"
            ]);
        });

        wrapperActive.append(...[
            headerActive,
            headerCurrent, 
            buttonChange,

            headerUpdate,
            buttonUpdate
        ])
        return wrapperActive;
    }
    async INITIALISE_PAGE() {
        this.path = await this.INIT_ROUTE({
            TAG: 'ACTIVE_CHARACTER',
            SECTION: 'DATABASE',
            SUBSECTION: 'ARCHIVE'
        })
        // this.Active_Character= await this.READ();
        // this.Character_Name = this.Active_Character.DRAGON.PERSONAL.NAMES.FIRST 
        //                         + " " 
        //                         + this.Active_Character.DRAGON.PERSONAL.NAMES.SURNAME;
    };
}

const pageFoyer = new Page_Archive_Foyer();
await pageFoyer.INITIALISE_PAGE();
pageFoyer.DRAW_PAGE();