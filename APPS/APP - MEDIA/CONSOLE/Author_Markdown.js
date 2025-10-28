import MANAGER_Markdown from "../../APP - DATABASE/MANAGERS/Markdown_Manager.js";

export default class Markdown_Author extends MANAGER_Markdown{

    constructor({
        AUTHOR_CONFIG_AUTHOR = 0,
        AUTHOR_CONFIG_PATH = 0
    }) {

        super();

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.PATH_OBSIDIAN = AUTHOR_CONFIG_PATH;

        // ============== //
        // ## PROPERTY ## //
        // ============== //

        this.PROPERTY_AUTHOR = AUTHOR_CONFIG_AUTHOR;
    };

    // ========== //
    // ## FILE ## //
    // ========== //

    CREATE_AUTHOR_FILE() {
        return `views:
  - type: table
    name: Table
    filters:
      and:
        - AUTHOR == "${this.PROPERTY_AUTHOR}"
    sort: []
  - type: cards
    name: View
    filters:
      and:
        - AUTHOR == "${this.PROPERTY_AUTHOR}"`
    };

    // ================ //
    // ## OPERATIONS ## //
    // ================ //

    async SAVE_AUTHOR() {
        this.RENDERER_PATH = `${this.PATH_OBSIDIAN}/${this.PROPERTY_AUTHOR[0]}/${this.PROPERTY_AUTHOR}.base`;
        this.RENDERER_DATA = this.CREATE_AUTHOR_FILE();
        await this.MARKDOWN();
    };
}