import { Renderer } from "../../../CONSOLE/LUNGS/Renderer.js";

export default class Insert extends Renderer{

    constructor({
        INSERT_CONFIG_PATH = 0,
        INSERT_CONFIG_FILE = 0,
        INSERT_CONFIG_DATA = 0,
        INSERT_CONFIG_TAG = 0,
        INSERT_CONFIG_LIST = 0,
        INSERT_CONFIG_MARKDOWN = 0
    }){

        super();

        this.INSERT_PATH = INSERT_CONFIG_PATH;
        this.INSERT_FILE = INSERT_CONFIG_FILE;
        this.INSERT_DATA = INSERT_CONFIG_DATA;
        this.INSERT_DB_LIST_TAG = INSERT_CONFIG_TAG;
        this.INSERT_LIST = INSERT_CONFIG_LIST;
        this.INSERT_MARKDOWN = INSERT_CONFIG_MARKDOWN
    };

    async BASE_FILE() {
        this.RENDERER_PATH = `${this.INSERT_PATH}/${this.INSERT_FILE}.json`;
        this.RENDERER_DATA = this.INSERT_DATA;

        console.log('WORKING ON BASE FILE FOR DATABASE');
        console.log(`PATH IS: ${this.RENDERER_PATH}`);
        console.log(`DATA IS:`);
        console.log(this.RENDERER_DATA);

        return await this.SAVE();
    };
    async LIST_FILE() {
        this.RENDERER_PATH = `${this.INSERT_PATH}/${this.INSERT_DB_LIST_TAG}List.json`;
        this.INSERT_LIST.push(this.INSERT_FILE);
        this.RENDERER_DATA = this.INSERT_LIST;

        console.log('INSERTING LIST FILE FOR DATABASE');
        console.log(`PATH IS: ${this.RENDERER_PATH}`);
        console.log(`DATA IS: ${this.RENDERER_DATA}`);

        return await this.SAVE();
    };
    async GOBLIN_FILE() {

        this.RENDERER_PATH = this.INSERT_PATH;
        this.RENDERER_DATA = this.INSERT_MARKDOWN;

        console.log('INSERTING MARKDOWN FILE FOR DATABASE');
        console.log(`PATH IS: ${this.RENDERER_PATH}`);
        console.log(`DATA IS: ${this.RENDERER_DATA}`);

        await this.MARKDOWN();
    }
}