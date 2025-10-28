import MANAGER_Markdown from "../../APP - DATABASE/MANAGERS/Markdown_Manager.js";

export default class Markdown_Genre extends MANAGER_Markdown{

    constructor({
        GENRE_CONFIG_GENRE = 0,
        GENRE_CONFIG_SUBGENRE = 0,
        GENRE_CONFIG_PATH = 0
    }) {

        super();

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.PATH_OBSIDIAN = GENRE_CONFIG_PATH;

        // ============== //
        // ## PROPERTY ## //
        // ============== //

        this.PROPERTY_GENRE = GENRE_CONFIG_GENRE;
        this.PROPERTY_SUBGENRE = GENRE_CONFIG_SUBGENRE;
    };

    // ========== //
    // ## FILE ## //
    // ========== //

    CREATE_GENRE_FILE() {
        return `views:
  - type: table
    name: Table
    filters:
      and:
        - MAIN_GENRE == "${this.PROPERTY_GENRE}"
    sort: []
  - type: cards
    name: View
    filters:
      and:
        - MAIN_GENRE == "${this.PROPERTY_GENRE}"`
    };
    CREATE_SUBGENRE_FILE() {
        return `views:
  - type: table
    name: Table
    filters:
      and:
        - SUBGENRE == "${this.PROPERTY_SUBGENRE}"
    sort: []
  - type: cards
    name: View
    filters:
      and:
        - SUBGENRE == "${this.PROPERTY_SUBGENRE}"`
    }
    // ================ //
    // ## OPERATIONS ## //
    // ================ //

    async SAVE_GENRE() {
        this.RENDERER_PATH = `${this.PATH_OBSIDIAN}/MAIN/${this.PROPERTY_GENRE}.base`;
        this.RENDERER_DATA = this.CREATE_GENRE_FILE();
        await this.MARKDOWN();
        this.RENDERER_PATH = `${this.PATH_OBSIDIAN}/${this.PROPERTY_GENRE}`;
        await this.CREATE_FOLDER();
    };
    async SAVE_SUBGENRE() {
        this.RENDERER_PATH = `${this.PATH_OBSIDIAN}/${this.PROPERTY_GENRE}/${this.PROPERTY_GENRE}.base`;
        this.RENDERER_DATA = this.CREATE_SUBGENRE_FILE();
        await this.MARKDOWN();
    }
};