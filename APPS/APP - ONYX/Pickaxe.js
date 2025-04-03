export default class Pickaxe {

    constructor({
        PICKAXE_CONFIG_HTML = 0
    }){
        this.DATA_HTML = PICKAXE_CONFIG_HTML;
        this.DATA_RESULT = '';
    };

    IDENTIFY_HTML_DATA_TYPE(){

        // << READ DATA TYPE IN OBJECT >> //

        const KEYS_Data = Object.keys(this.DATA_HTML);
        for (let INDEX_KEYS = 0; INDEX_KEYS < KEYS_Data.length; INDEX_KEYS++) {
            const BLOCK_Key = KEYS_Data[INDEX_KEYS];
            const BLOCK_Data = this.DATA_HTML[BLOCK_Key];

            if(BLOCK_Data.TYPE === 'HEADER'){
                this.DATA_RESULT += this.#GENERATE_HEADER(BLOCK_Data.TEXT);
            }
            else if (BLOCK_Data.TYPE === 'CHECKBOX') {
                this.DATA_RESULT += this.#GENERATE_CHECKBOX(BLOCK_Data.TEXT);
            }
        }
        // << CONVERT IT >> //

    };

    #GENERATE_HEADER(PARAMETER_HEADER_TEXT){return `# ${PARAMETER_HEADER_TEXT}`;};
    #GENERATE_CHECKBOX(PARAMETER_TEXT){return `- [ ] ${PARAMETER_TEXT}`;};
}