const path  = require('path');
const fs = require('fs');
module.exports = class PATHWAYS {

    constructor(){

        // ============ //
        // << ROUTES >> //
        // ============ //

        this.PATH_MUSHROOM_FROG = 'The Mushroom Stalk/CUPBOARD/USERS/ResidentFrog.json';
        this.PATH_TESTING_FROG = 'The Testing Stalk/CUPBOARD/USERS/ResidentFrog.json';
        this.PATH_ROUTES_BASE = '../../VEINS/Pockets.json';
        this.PATH_ROUTES_ASSETS = '../../VEINS/Assets.json';
        this.PATH_ROUTES_FONTS = '£££-UserMemory/USERNAME/ROUTES/Fonts.json';
        this.PATH_ROUTES_PLANETS = '£££-UserMemory/USERNAME/ROUTES/Fonts.json';
        this.PATH_ROUTES_USERS = '£££-UserMemory/CUPBOARD/ROUTES/User.json';
    };

    async USERNAME(PARAMETER_PATH_APP, PARAMETER_STATUS) {
        let PATH_Frog = "";
        let PATH_Relative = "";
        let ARRAY_Bucket = [PARAMETER_PATH_APP];
        if (!PARAMETER_STATUS) {
            PATH_Relative = this.PATH_MUSHROOM_FROG;
        }
        else {
            PATH_Relative = this.PATH_TESTING_FROG;
        }
        let ARRAY_Path_Relative = PATH_Relative.split('/');
        let ARRAY_Bucket_Finished = await this.LOOP_PATH(ARRAY_Path_Relative, ARRAY_Bucket);
        return path.join(...ARRAY_Bucket_Finished);
    };
    async LOOP_PATH(PARAMETER_ARRAY, PARAMETER_BUCKET){

        const ARRAY_Bucket = PARAMETER_BUCKET;
        pathloop: for (let INDEX_Path = 0; INDEX_Path < PARAMETER_ARRAY.length; INDEX_Path++) {
            ARRAY_Bucket.push(PARAMETER_ARRAY[INDEX_Path])
        };
        return ARRAY_Bucket;

    };
    async GENERATE_PATH(PARAMETER_PATH, PARAMETER_STATUS, PARAMETER_PATH_APP) {

        console.log('GNERATING PATH!!!!!!!')
        console.log(PARAMETER_PATH)
        this.USERNAMEM = 'PIXEL';
        let ARRAY_Bucket = [];
        let PATH_Relative = PARAMETER_PATH;
        if (PARAMETER_PATH.includes('USERNAME')) {
            let NAME_User = await this.USERNAME(PARAMETER_PATH_APP, PARAMETER_STATUS);
            PATH_Relative = PARAMETER_PATH.replace('USERNAME', this.USERNAMEM);
        };

        if(PATH_Relative[0] === ('£')) {
            ARRAY_Bucket = [PARAMETER_PATH_APP];
            PATH_Relative = PATH_Relative.replace("£££-", "");
            if (!PARAMETER_STATUS) {
                PATH_Relative = PATH_Relative.replace('UserMemory', 'The Mushroom Stalk');
            }
            else {
                PATH_Relative = PATH_Relative.replace("UserMemory", "The Testing Stalk");
            };

        }
        else{
            ARRAY_Bucket = [__dirname];
        };
        let ARRAY_Path_Relative = PATH_Relative.split("/");
        ARRAY_Bucket = await this.LOOP_PATH(ARRAY_Path_Relative, ARRAY_Bucket);
        return path.join(...ARRAY_Bucket);
    };
    async ROUTE(PARAMETER_STATUS, PARAMETER_PATH_APP, REQUEST) {
        console.log(PARAMETER_STATUS);
        console.log(PARAMETER_PATH_APP);
        console.log(REQUEST)
        let PATH_Root = "";
        let TAG_Route = '';
        switch (REQUEST) {
            case "MEMORY":
                TAG_Route = this.PATH_ROUTES_BASE;
                break;
            case "PLANETS":
                TAG_Route = this.PATH_ROUTES_PLANETS;
                break;
            case "USERS":
                TAG_Route = this.PATH_ROUTES_USERS;
                break;
            case "ASSETS":
                TAG_Route = this.PATH_ROUTES_ASSETS;
                console.log(TAG_Route);
                break;
            case "FONTS":
                TAG_Route = this.PATH_ROUTES_FONTS;
                break;
            default:
                break;
        };
        PATH_Root = await this.GENERATE_PATH(TAG_Route, PARAMETER_STATUS, PARAMETER_PATH_APP);
        console.log(PATH_Root)
        let x = fs.readFileSync(PATH_Root, 'utf8', function(err, DATA_DETAILS) {
            let DATA_Formatted = DATA_DETAILS;
            return DATA_Formatted;
        });
        return JSON.parse(x);
    };
    STATUS(PARAMETER_PATH) {
        try {
            return fs.existsSync(PARAMETER_PATH);            
        } catch (error) {
            return false;
        }
        // if (stats.isFile()) {
        //     return "FILE";
        // }
        // else if (stats.isDirectory()) {
        //     return "FOLDER";
        // }
        // else {
        //     return "AN ALIEN HAS ENTERED YOUR MACHINE"
        // };
    };
}