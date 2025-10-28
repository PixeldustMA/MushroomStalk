import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../CREATE/Create.js";

export default class Draw_Alphabet {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_A_E = 'UNSET';
        this.WRAPPER_F_J = 'UNSET';
        this.WRAPPER_K_O = 'UNSET';
        this.WRAPPER_P_T = 'UNSET';
        this.WRAPPER_U_Y = 'UNSET';
        this.WRAPPER_Z = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_A = 'UNSET';
        this.BUTTON_B = 'UNSET';
        this.BUTTON_C = 'UNSET';
        this.BUTTON_D = 'UNSET';
        this.BUTTON_E = 'UNSET';
        this.BUTTON_F = 'UNSET';
        this.BUTTON_G = 'UNSET';
        this.BUTTON_H = 'UNSET';
        this.BUTTON_I = 'UNSET';
        this.BUTTON_J = 'UNSET';
        this.BUTTON_K = 'UNSET';
        this.BUTTON_L = 'UNSET';
        this.BUTTON_M = 'UNSET';
        this.BUTTON_N = 'UNSET';
        this.BUTTON_O = 'UNSET';
        this.BUTTON_P = 'UNSET';
        this.BUTTON_Q = 'UNSET';
        this.BUTTON_R = 'UNSET';
        this.BUTTON_S = 'UNSET';
        this.BUTTON_T = 'UNSET';
        this.BUTTON_U = 'UNSET';
        this.BUTTON_V = 'UNSET';
        this.BUTTON_W = 'UNSET';
        this.BUTTON_X = 'UNSET';
        this.BUTTON_Y = 'UNSET';
        this.BUTTON_Z = 'UNSET';

        // ============== //
        // ## PROPERTY ## //
        // ============== //

        this.ACTIVE_LETTER = '';
    };

    // ========== //
    // ## DRAW ## //
    // ========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_PANEL = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_PANEL.append(...[
            this.PANEL_A(),
            this.PANEL_F(),
            this.PANEL_K(),
            this.PANEL_P(),
            this.PANEL_U()
        ]);    
        return this.WRAPPER_PANEL;
    };

    // ============ //
    // ## PANELS ## //
    // ============ //

    PANEL_A() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_A_E = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BUTTON(this.BUTTON_A);
        this.ACTIVATE_BUTTON(this.BUTTON_B);
        this.ACTIVATE_BUTTON(this.BUTTON_C);
        this.ACTIVATE_BUTTON(this.BUTTON_D);
        this.ACTIVATE_BUTTON(this.BUTTON_E);

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_A_E.append(...[
            this.BUTTON_A,
            this.BUTTON_B,
            this.BUTTON_C,
            this.BUTTON_D,
            this.BUTTON_E
        ]);    
        return this.WRAPPER_A_E;
    };
    PANEL_F() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_F_J = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BUTTON(this.BUTTON_F);
        this.ACTIVATE_BUTTON(this.BUTTON_G);
        this.ACTIVATE_BUTTON(this.BUTTON_H);
        this.ACTIVATE_BUTTON(this.BUTTON_I);
        this.ACTIVATE_BUTTON(this.BUTTON_J);

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_F_J.append(...[
            this.BUTTON_F,
            this.BUTTON_G,
            this.BUTTON_H,
            this.BUTTON_I,
            this.BUTTON_J
        ]);    
        return this.WRAPPER_F_J;
    };
    PANEL_K() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_K_O = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BUTTON(this.BUTTON_K);
        this.ACTIVATE_BUTTON(this.BUTTON_L);
        this.ACTIVATE_BUTTON(this.BUTTON_M);
        this.ACTIVATE_BUTTON(this.BUTTON_N);
        this.ACTIVATE_BUTTON(this.BUTTON_O);

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_K_O.append(...[
            this.BUTTON_K,
            this.BUTTON_L,
            this.BUTTON_M,
            this.BUTTON_N,
            this.BUTTON_O
        ]);    
        return this.WRAPPER_K_O;
    };
    PANEL_P() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_P_T = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BUTTON(this.BUTTON_P);
        this.ACTIVATE_BUTTON(this.BUTTON_Q);
        this.ACTIVATE_BUTTON(this.BUTTON_R);
        this.ACTIVATE_BUTTON(this.BUTTON_S);
        this.ACTIVATE_BUTTON(this.BUTTON_T);

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_P_T.append(...[
            this.BUTTON_P,
            this.BUTTON_Q,
            this.BUTTON_R,
            this.BUTTON_S,
            this.BUTTON_T
        ]);    
        return this.WRAPPER_P_T;
    };
    PANEL_U() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_U_Y = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BUTTON(this.BUTTON_U);
        this.ACTIVATE_BUTTON(this.BUTTON_V);
        this.ACTIVATE_BUTTON(this.BUTTON_W);
        this.ACTIVATE_BUTTON(this.BUTTON_X);
        this.ACTIVATE_BUTTON(this.BUTTON_Y);

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_U_Y.append(...[
            this.BUTTON_U,
            this.BUTTON_V,
            this.BUTTON_W,
            this.BUTTON_X,
            this.BUTTON_Y
        ]);    
        return this.WRAPPER_U_Y;
    };
    PANEL_Z() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_Z = new Connector_Jellyfish().INITIALISE_WRAPPER();
        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BUTTON(this.BUTTON_Z);

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //
        this.WRAPPER_Z.append(...[
            this.BUTTON_Z
        ]);    
        return this.WRAPPER_Z;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_BUTTON(PARAMETER_BUTTON) {
        PARAMETER_BUTTON.addEventListener('click', (event) => {
            this.ACTIVE_LETTER = PARAMETER_BUTTON.innerHTML;
            PARAMETER_BUTTON.style.backgroundcolor = 'Red';
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){
        await this.#BUTTONS()
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #BUTTONS(){

        this.BUTTON_A = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-A',
        }).INIT();
        this.BUTTON_B = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-B',
        }).INIT();
        this.BUTTON_C = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-C',
        }).INIT();
        this.BUTTON_D = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-D',
        }).INIT();
        this.BUTTON_E = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-E',
        }).INIT();
        this.BUTTON_F = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-F',
        }).INIT();
        this.BUTTON_G = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-G',
        }).INIT();
        this.BUTTON_H = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-H',
        }).INIT();
        this.BUTTON_I = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-I',
        }).INIT();
        this.BUTTON_J = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-J',
        }).INIT();
        this.BUTTON_K = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-K',
        }).INIT();
        this.BUTTON_L = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-L',
        }).INIT();
        this.BUTTON_M = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-M',
        }).INIT();
        this.BUTTON_N = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-N',
        }).INIT();
        this.BUTTON_O = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-O',
        }).INIT();
        this.BUTTON_P = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-P',
        }).INIT();
        this.BUTTON_Q = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-Q',
        }).INIT();
        this.BUTTON_R = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-R',
        }).INIT();
        this.BUTTON_S = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-S',
        }).INIT();
        this.BUTTON_T = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-T',
        }).INIT();
        this.BUTTON_U = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-U',
        }).INIT();
        this.BUTTON_V = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-V',
        }).INIT();
        this.BUTTON_W = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-W',
        }).INIT();
        this.BUTTON_X = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-X',
        }).INIT();
        this.BUTTON_Y = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-Y',
        }).INIT();
        this.BUTTON_Z = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Alphabet-Z',
        }).INIT();

        this.BUTTON_A.innerHTML = 'A';
        this.BUTTON_B.innerHTML = 'B';
        this.BUTTON_C.innerHTML = 'C';
        this.BUTTON_D.innerHTML = 'D';
        this.BUTTON_E.innerHTML = 'E';
        this.BUTTON_F.innerHTML = 'F';
        this.BUTTON_G.innerHTML = 'G';
        this.BUTTON_H.innerHTML = 'H';
        this.BUTTON_I.innerHTML = 'I';
        this.BUTTON_J.innerHTML = 'J';
        this.BUTTON_K.innerHTML = 'K';
        this.BUTTON_L.innerHTML = 'L';
        this.BUTTON_M.innerHTML = 'M';
        this.BUTTON_N.innerHTML = 'N';
        this.BUTTON_O.innerHTML = 'O';
        this.BUTTON_P.innerHTML = 'P';
        this.BUTTON_Q.innerHTML = 'Q';
        this.BUTTON_R.innerHTML = 'R';
        this.BUTTON_S.innerHTML = 'S';
        this.BUTTON_T.innerHTML = 'T';
        this.BUTTON_U.innerHTML = 'U';
        this.BUTTON_V.innerHTML = 'V';
        this.BUTTON_W.innerHTML = 'W';
        this.BUTTON_X.innerHTML = 'X';
        this.BUTTON_Y.innerHTML = 'Y';
        this.BUTTON_Z.innerHTML = 'Z';
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_LETTER(){return this.ACTIVE_LETTER};
};