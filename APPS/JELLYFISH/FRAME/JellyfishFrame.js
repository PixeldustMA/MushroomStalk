import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

class JellyfishFrame extends HTMLElement {

	constructor() {
		super ();
        this.menuButtonHover = false;
	};

	connectedCallback() {
        const SHADOW = this.attachShadow({mode: 'open'});
		const frameWrapper = document.createElement('div');
        frameWrapper.classList.add('Frame')

        customElements.whenDefined('jellyfish-frame').then(() => {
            const stalk = new Stalk();

            let menuButtonPath = stalk.INIT_ROUTE({
                TAG: 'UNPRESSED', 
                ASSET: 1, 
                SECTION: 'IMAGES', 
                SUBSECTION: 'FRAME_MENU'
            }).then((PATH_RESULT) => {
                    let boxWrapper = this.shadowRoot.getElementById('WRAPPER_Frame-Box');
                    const menuImage = new create({
                        tag: 'img',
                        source: PATH_RESULT,
                        classes: ['pixMenu', 'frameButton']
                    }).init();
                    stalk.INIT_ROUTE({
                        TAG: 'PRESSED', 
                        ASSET: 1, 
                        SECTION: 'IMAGES', 
                        SUBSECTION: 'FRAME_MENU'
                    }).then((RESULT) => {
                        menuImage.onmouseenter = function() {
                            menuImage.src = RESULT;
                        };
                        menuImage.onmouseleave = function() {
                            menuImage.src = PATH_RESULT;
                        };
                        menuImage.addEventListener('click', (event) => {
                            console.log('LOAD MENU');
                        });
                        boxWrapper.append(menuImage);
                    });

                    return PATH_RESULT;
            });
            let quitButtonPath = stalk.INIT_ROUTE({
                TAG: 'UNPRESSED', 
                ASSET: 1, 
                SECTION: 'IMAGES', 
                SUBSECTION: 'FRAME_QUIT'
            }).then((PATH_RESULT) => {

                let boxWrapper = this.shadowRoot.getElementById('WRAPPER_Frame-Box');
                const quitImage = new create({
                tag: 'img',
                source: PATH_RESULT,
                classes: ['pixQuit', 'frameButton']
                }).init();
                stalk.INIT_ROUTE({
                    TAG: 'PRESSED', 
                    ASSET: 1, 
                    SECTION: 'IMAGES', 
                    SUBSECTION: 'FRAME_QUIT'
                }).then((RESULT) => {
                    quitImage.onmouseenter = function() {
                        quitImage.src = RESULT;
                    };
                    quitImage.onmouseleave = function() {
                        quitImage.src = PATH_RESULT;
                    };
                    quitImage.addEventListener('click', (event) => {
                        stalk.CLOSE();
                    });
                    boxWrapper.append(quitImage);
                });
                return PATH_RESULT;
            });
            let minButtonPath = stalk.INIT_ROUTE({
                TAG: 'UNPRESSED', 
                ASSET: 1, 
                SECTION: 'IMAGES', 
                SUBSECTION: 'FRAME_MIN'
            }).then((PATH_RESULT) => {

                let boxWrapper = this.shadowRoot.getElementById('WRAPPER_Frame-Box');
                const minImage = new create({
                tag: 'img',
                source: PATH_RESULT,
                classes: ['pixMin', 'frameButton']
                }).init();
                stalk.INIT_ROUTE({
                    TAG: 'PRESSED', 
                    ASSET: 1, 
                    SECTION: 'IMAGES', 
                    SUBSECTION: 'FRAME_MIN'
                }).then((RESULT) => {
                    minImage.addEventListener('click', (event) => {
                        stalk.SMALL();
                    });
                    minImage.onmouseenter = function() {
                        minImage.src = RESULT;
                    };
                    minImage.onmouseleave = function() {
                        minImage.src = PATH_RESULT;
                    };
                    boxWrapper.append(minImage);
                });
                return PATH_RESULT;
            });
            let feetButtonPath = stalk.INIT_ROUTE({
                TAG: 'UNPRESSED', 
                ASSET: 1, 
                SECTION: 'IMAGES', 
                SUBSECTION: 'FRAME_FEETS'
            }).then((PATH_RESULT) => {

                let boxWrapper = this.shadowRoot.getElementById('WRAPPER_Frame-Box');
                const feetImage = new create({
                    tag: 'img',
                    source: PATH_RESULT,
                    classes: ['pixFeet', 'frameButton']
                }).init();
                stalk.INIT_ROUTE({
                    TAG: 'PRESSED', 
                    ASSET: 1, 
                    SECTION: 'IMAGES', 
                    SUBSECTION: 'FRAME_FEETS'
                }).then((RESULT) => {
                    feetImage.addEventListener('click', (event) => {
                        stalk.LOAD(['TITLE', 'MAINPAGES', 'WELCOME'])
                    });
                    feetImage.onmouseenter = function() {
                        feetImage.src = RESULT;
                    };
                    feetImage.onmouseleave = function() {
                        feetImage.src = PATH_RESULT;
                    };
                    boxWrapper.append(feetImage);
                });
                return PATH_RESULT;
            });

            frameWrapper.innerHTML = this.getStyle();
            SHADOW.appendChild(frameWrapper);
        });
    }
    getStyle() {
        return `

        <style>

        .Frame {
            padding: 0%;
            margin: 0%;
        }
        .mainBox {
            -webkit-app-region: drag;
            position: relative;
            top: 0%;
            height: 50px;
            width: 100%;
            background: rgb(46,196,182);
            background: radial-gradient(circle, rgba(46,196,182,1) 12%,
                        rgba(155,93,237,1) 27%, rgba(254,228,64,1) 47%, 
                        rgba(204,0,153,1) 57%, rgba(0,245,212,1) 66%, 
                        rgba(204,0,255,1) 75%, rgba(255,192,0,1) 84%, 
                        rgba(241,91,181,1) 91%); 
            border-color: rgb(148, 204, 214);
            border-style: outset;
            padding: 0%;
            margin: 0%;
        } 
        .frameButton {
            -webkit-app-region: no-drag;
            position: absolute;
            transform: translate(5px, -12px)
        }
        .pixMenu {
            top: 0%;
            left: 0%;
            height: 70px;
            margin: 0%;
        }
        img: {
            margin: 0%;
            padding: 0%;
        }
        .pixQuit {
            top: 0%;
            right: 0%;
            height: 70px;
            margin: 0%;
            padding: 0%;
        }
        .pixFeet {
            top: 0%;
            right: 100px;
            height: 70px;

        }
        .pixMin {
            top: 0%;
            right: 50px;
            height: 70px;
            margin: 0%;
            padding: 0%;
        }
        </style>

        <div id = "WRAPPER_Frame-Box" class = "mainBox">
        </div>
        `
    }

}

window.customElements.define('jellyfish-frame', JellyfishFrame);


export {JellyfishFrame}
