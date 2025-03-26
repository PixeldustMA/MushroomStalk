const { Console } = require('console');
const fs = require('fs');

module.exports = class STALK {

    constructor() {};

    // =========== //
    // << FILES >> //
    // =========== //

    async WRITE(PAAMETER_DETAILS, PARAMETER_PATH, STATUS_TEST) {
        const DATA_Details = JSON.stringify(PAAMETER_DETAILS, null, 4);
        return await fs.writeFile(PARAMETER_PATH, DATA_Details, 'utf8', err => {
            if (err)
                console.error(err);
            else {
                if (STATUS_TEST){
                    console.log('Data Successfully Written to File');
                };
            }
        });
    };
    async COPY(PARAMETR_ORIGIN, PARAMETER_DESTINATION) {
        return await fs.copyFileSync(PARAMETR_ORIGIN, PARAMETER_DESTINATION, 2);
    };
    async DELETE(PARAMETER_PATH) {
        return await fs.stat(PARAMETER_PATH, function (err, stats) {
            if (err) {return console.error(err);}
            fs.unlink(PARAMETER_PATH, function(err){
                if(err) return console.log(err);
            });  
    });
    };
    async READ(PARAMETER_PATH) {
        return await fs.readFileSync(PARAMETER_PATH, 'utf8', function(err, DATA_RAW){
            return JSON.parse(DATA_RAW);
        });
    };

    // ============= //
    // << FOLDERS >> //
    // ============= //

    async FOLDER(PARAMETER_PATH) {
        return await fs.readdirSync(PARAMETER_PATH)
    };
    async GENERATE_FOLDER(PARAMETER_PATH) {
        console.log('<<>><<>><<>> LOOK HERE!!!!!!!!! <><><><><><><><><>');
        console.log(PARAMETER_PATH)
        return await fs.promises.mkdir(PARAMETER_PATH, { recursive: true });
    }
    async DELETE_FOLDER(PARAMETER_PATH) {
        return await fs.rm(PARAMETER_PATH, { recursive: true, force: true }, err => {
            if (err) {throw err;}
        });
    };
    async COPY_FOLDER(PARAMETER_ORIGIN, PARAMETER_DESTINATION) {
        return await fs.cp(PARAMETER_ORIGIN, PARAMETER_DESTINATION, { recursive: true }, (err) => {
            if (err) {console.error(err);}
        });
    }
}