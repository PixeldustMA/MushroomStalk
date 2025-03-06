import PixelScript from "./PixelScript.js";

export default class Pixelate extends PixelScript{

    constructor({
        PIXELATE_CONFIG_SESSION
    }){
        super();

        // ============ //
        // ## MEMORY ## //
        // ============ //

        this.SESSION_MEMORY = PIXELATE_CONFIG_SESSION;
    }

    async PIXELATE_USERS() {
        this.INSTANCE_BEETLE.DAISY_TEXT = `PIXELATING USERS`;
        await this.INSTANCE_BEETLE.READ_MODE();  

        let STRING_User = `${this.TITLE_TAG}USERS${this.TITLE_TAG}`;

        this.RENDERER_PATH = this.SESSION_MEMORY.PATHS.CUPBOARD.FILES.FROGS
        let FILE_Frog = await this.READ_MODE({
            PARAMTER_BRANCH_MODE: 'FILE',
            PARAMETER_SUB_MODE: 'READ'
        });
        let ARRAY_User = Object.keys(FILE_Frog);

        LOOP_Users: for (let INDEX_User = 0; INDEX_User < ARRAY_User.length; INDEX_User++) {

            const DATA_Frog = frogFile[ARRAY_User[INDEX_User]];
            if (DATA_Frog.NAME !== 'TestUser') {
    
                this.RENDERER_PATH = `${this.SESSION_MEMORY.PATHS.CUPBOARD.FOLDERS.FROGS}/${DATA_Frog.NAME.toUpperCase()}`
                let FILE_User = await this.READ_MODE({
                    PARAMTER_BRANCH_MODE: 'FILE',
                    PARAMETER_SUB_MODE: 'READ'
                });

                STRING_User += this.GENERATE_INSERTABLE(`${DATA_Frog.NAME.toUpperCase()}${this.SEPERATOR}${DATA_Frog.PASSWORD.toUpperCase()}`)
                STRING_User += this.GENERATE_MEMORY(JSON.stringify(FILE_User));
                if (INDEX_User >= ARRAY_User.length - 2) {STRING_User += this.SEPERATOR}
            };
        }
        STRING_User += this.TITLE_TAG;
        return STRING_User;
    };
    async PIXELATE_RESIDENT(){

        this.INSTANCE_BEETLE.DAISY_TEXT = `PIXELATING RESIDENT`  
        await this.INSTANCE_BEETLE.READ_MODE();  

        let STRING_Resident = `${this.TITLE_TAG}RESIDENT${this.TITLE_TAG}`;

        this.RENDERER_PATH = this.SESSION_MEMORY.PATHS.CUPBOARD.FILES.RESIDENTFROG
        let FILE_Resident =  await this.READ_MODE({
            PARAMTER_BRANCH_MODE: 'FILE',
            PARAMETER_SUB_MODE: 'READ'
        });

        return `${STRING_Resident}${this.INSTANCE_DECORATOR.INSERTABLE(FILE_Resident.NAME)}${this.MEMORY(JSON.stringify(residentFile))}`;
    };
}