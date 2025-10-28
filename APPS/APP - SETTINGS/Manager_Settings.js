import Stalk from "../../CONSOLE/LUNGS/Stalk.js";

export default class Manager_Settings extends Stalk{

    constructor({
        SETTINGS_CONFIG_BOOK = 0
    }){
        super()
        this.PROPERTY_BOOK = SETTINGS_CONFIG_BOOK;
    };

    async #LOAD() {
        await this.REQUEST_SESSION_SETTINGS_USER();
        this.PATH_SETTINGS_MEDIA = this.SESSION.PATHS.SETTINGS.SETTINGS.FILES.MEDIA;
        this.DATA_MEDIA = this.SESSION.SETTINGS.MEDIA;
    };
    async UPDATE_ACTIVE_BOOK_LIST() {
        await this.#LOAD();

        if (!this.DATA_MEDIA.BOOKS.includes(this.PROPERTY_BOOK)) {
            this.DATA_MEDIA.BOOKS.push(this.PROPERTY_BOOK);
            this.RENDERER_DATA = this.DATA_MEDIA;
            this.RENDERER_PATH = this.PATH_SETTINGS_MEDIA;
            await this.SAVE()
        };
    };
}