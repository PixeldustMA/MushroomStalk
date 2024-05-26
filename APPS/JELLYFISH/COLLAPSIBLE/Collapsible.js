import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

class Collapsible {

    constructor(content, titleText, tag, charinstance) 
    {
        this.content = content;
        this.title = titleText;
        this.tag = tag;
        this.charinstance = charinstance
    };

    DRAW() {

        // == WRAPPERS == //
        let Wrapper = new create({
            tag: 'div',
            id: 'COLLAPSIBLEBUTTON'
        }).init();
        let contentWrapper = new create({
            tag: 'div',
            classes: ['content']
        }).init();

        // == BUTTONS == //
        let collapsibleWrapper = new create({
            tag: 'button',
            id: `BUTTON_Collapsible-${this.title}`,
            classes: ['collapsible'],
        }).init();
        collapsibleWrapper.innerHTML = this.title;

        // == ACTIONS == //
        setTimeout(() => {
            collapsibleWrapper.addEventListener("click", (e) => {
                this.SHOW_HIDE_CONTENT(this.title);
            })
        }, 1000);

        // == ATTACHMENTS == //
        contentWrapper.appendChild(this.content);
        // contentWrapper.append(this.SectionButtonPanels());
        Wrapper.append(...[
            collapsibleWrapper,
            contentWrapper
        ]);
        return Wrapper;
    };
    SECTION_BUTTON_PANELS() {

        // // == WRAPPERS == //
        // let wrapper = new create({
        //     tag: 'div'
        // }).init();

        // // == SUBMIT == //
        // let submitButton = new create({
        //     tag: 'button',
        //     elementText: ['USEFUL', 'GENERAL', 'SUBMIT'],
        //     id: 'Button_Submit_Archive_New',
        //     classes: ['BUTTONARCHIVE']
        // }).init();

        // submitButton.addEventListener('click', (SUBMITEVENT) => {
        //     switch (this.tag) {
        //         case "NEWCHARACTER":
        //             console.log("SUBMIT NEW CHARACTER");
        //             break;
        //         case "PARENT":
        //             this.#PARENT();
        //             break;
        //         default:
        //             break;
        //     }
        // })
        // wrapper.append(...[
        //     // submitButton
        // ]);
        // return wrapper
    };
    SHOW_HIDE_CONTENT(segmentName) {
        var collapsibleContainer = document.getElementById(`BUTTON_Collapsible-${this.title}`);
            const container = collapsibleContainer;
            if (container.innerHTML === segmentName) {
                container.classList.toggle('active');
                var content = container.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
        };
    };
};

export {Collapsible}