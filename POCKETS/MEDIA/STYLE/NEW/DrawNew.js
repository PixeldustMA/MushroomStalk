import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";

export default class Draw_New {

    constructor() {

    };

    DRAW() {};

    PANEL_TITLE() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TITLE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TITLE.append(...[
            this.HEADER_TITLE,
            this.BUTTON_BACK
        ]);        
        return this.WRAPPER_TITLE;
    };
    PANEL_NAME() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_NAME = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_NAME.append(...[
            this.LABEL_NAME,
            this.INPUT_NAME
        ]);        
        return this.WRAPPER_NAME;
    };
    PANEL_ARTIST() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_ARTIST = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_ARTIST.append(...[
            this.LABEL_ARTIST,
            this.SELECT_ARTIST,
            this.LABEL_ALBUM,
            this.SELECT_ALBUM
        ]);        
        return this.WRAPPER_ARTIST;
    };
    PANEL_PLAYLISTS() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_PLAYLIST = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_PLAYLIST.append(...[]);        
        return this.WRAPPER_PLAYLIST;
    };
    PANEL_STYLE() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_STYLE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_STYLE.append(...[
            this.LABEL_STYLE,
            this.SELECT_STYLE
        ]);        
        return this.WRAPPER_STYLE;
    };
}

