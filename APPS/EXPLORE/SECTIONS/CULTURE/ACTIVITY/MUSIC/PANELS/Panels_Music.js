import { create } from "../../../../../../../CONSOLE/PLATYPUS/Create.js";
import { Panels_Explore } from "../../../../../PANELS/Panels_Explore.js";
import { Music } from "../CONSOLE/Music.js";

class Panels_Music {

    constructor(){
        this.instanceMusic = new Music();
        this.dataMusic = {};
    };

    PANEL_INPUT_ACTIVITY_MUSIC() {

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div'
        }).init();

        // == INPUTS == //
        const selectInstruments = new create({
            tag: 'select',
            id: 'SELECT-Orchestra-Activity-Name',
            options: this.optionsInstrumentType,
            boxName: 'Instrument-Name',
            classes: ['INPUT_LAYOUTS', 'DEFAULT_SELECT']
        }).init();

        // == TEXT == //
        const header_Music = new create({
            tag: 'h2',
            elementText: ["CULTURE", "ACTIVITY_MUSIC", "MUSIC"],
            classes: ['BOX_TITLE']
        }).init();
        const labelInstruments = new create({
            tag: 'label',
            id: 'LABEL-Orchestra-Activity-Name',
            elementText: ["CULTURE", "ACTIVITY_MUSIC", "SELECT_INSTRUMENT"],
            labelFor: 'Instrument-Name',
            classes: ['LABEL_LAYOUT']
        }).init(); 
        // == INPUT == //
        const inputName = new create({
            tag: 'input',
            placeholder: ["FOOD", "PLACEHOLDER", "NAME"]
        }).init();
        // == BUTTONS == //
        const submitButton = new create({
            tag: 'button',
            elementText: ["USEFUL", "GENERAL", "SUBMIT"]
        }).init();
        
        // == TEXT BOXES == //
        const textboxDescription = new create({
            tag: 'textarea'
        }).init();
        // == LISTENERS == //
        submitButton.addEventListener('click', (event) => {
            const instrumentName = inputName.value;
            const instrumentType = selectInstruments.options[selectInstruments.selectedIndex].text;
            const musicOrigin = this.planetPanel.planetBox;
            const planetName = musicOrigin.options[musicOrigin.selectedIndex].text;
            
            const instrumentDescription =  textboxDescription.value; 
            this.instanceMusic.GENERATE_INSTRUMENT(instrumentName, instrumentType, planetName, instrumentDescription)
                .then((MUSIC) => {return MUSIC});
        });

        // == ATTACHMENTS == //
        wrapper.append(...[
            header_Music,

            inputName,
            textboxDescription,
            labelInstruments,
            selectInstruments, 
            this.planet,

            submitButton
        ]);
        return wrapper;
    };
    PANEL_INPUT_MUSIC_TYPE() {

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div'
        }).init();

        // == INPUT == //
        const inputType = new create ({
            tag: 'input',
            boxName: 'INPUT-TYPE,',
            id: 'INPUT_Music-Type',
            classes: ['INPUT_LAYOUTS']
        }).init();

        // == TEXT == //
        const labelType = new create({
            tag: 'label',
            elementText: ["CULTURE", "ACTIVITY_MUSIC", "TYPE"],
            labelFor: 'SELECT-TYPE'
        }).init();

        // == BUTTONS == //
        const buttonSubmit = new create({
            tag: 'button'
        }).init();

        // == TEXT BOXES == //
        const textboxDescription = new create({
            tag: 'textarea'
        }).init();

        // == LISTENERS == //
        buttonSubmit.addEventListener('click', (event) => {
            const typeName = inputType.value;
            const typeDescription = textboxDescription.value;
            this.instanceMusic.GENERATE_INSTRUMENT_TYPE(typeName, typeDescription).then((RESULT) => {return RESULT});
        });

        // == ATTACHMENTS == //
        wrapper.append(...[
            labelType,
            inputType,
            textboxDescription,
            buttonSubmit
        ]);
        return wrapper;
    };
    PABEL_INPUT_CHARACTER_MUSUC() {

        // == WRAPPER == //
        const wrapperMusic = new create({
            tag: 'div'
        }).init();

        // == TEXT == //
        const headerMusic = new create({
            tag: 'h2',
            elementText: ['CULTURE', 'ACTIVITY_MUSIC', 'MUSIC']
        }).init();

        // == SELECT == //
        const selectType = new create({
            tag: 'select',
            options: this.optionsInstrumentType
        }).init();
        const selectInstrument = new create({
            tag: 'select'
        }).init();

        // == BUTTONS == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        // == LISTENERS == //
        selectType.addEventListener('change', (event) => {
            this.instanceMusic.SEARCH_INSTRUMENT_BY_TYPE(selectType.options[selectType.selectedIndex].text)
                .then((INSTRUMENTS) => {
                    let hold = new create({tag: 'div'})
                    hold.changeOptions(selectInstrument, INSTRUMENTS);
                });
        });
        buttonSubmit.addEventListener('click', (event) => {
            this.dataMusic['INSTRUMENT'] = selectInstrument.options[selectInstrument.selectedIndex].text;
            this.dataMusic['BAND_NAME'] = 'NONE';
            this.dataMusic['ORCHESTRA_NAME'] = 'NONE';
            this.dataMusic['MUSIC_PRO'] = false;
            buttonSubmit.innerHTML = 'SUBMITTED';
        });

        // == ATTACHMENTS == //
        wrapperMusic.append(...[headerMusic, selectType, selectInstrument, buttonSubmit]);
        return wrapperMusic;
    }
    async INITIALISE() {
        this.optionsInstruments = await this.instanceMusic.READ_MUSIC_ALL();
        this.optionsInstrumentType = Object.keys(await this.instanceMusic.READ_INSTRUMENT_TYPES());
        this.planetPanel = new Panels_Explore('PLANET_SINGLE');
        this.planet =  await this.planetPanel.CHOOSE_PLANET();
    }
} 

export {Panels_Music}