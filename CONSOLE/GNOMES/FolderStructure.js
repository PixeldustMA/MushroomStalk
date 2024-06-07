const fs = require('fs');

// TheMushroomStalk
// UserName
// Archive
// Memory
    //-ActiveCharacter //=empty==//
    //-Alphabet
    //-NewCharacter
// Explorer
// Head Category
// Console
    //- All_(Category Name) //=empty==//
    //-All_Planets //=empty==//
    //-All_Types //=empty==//
// Description
// Library
// Planets
// Type


class Construction{

    constructor(){};

    CONSTRUCT(userName, rootPath){
        this.CREATE_MEMORY_FOLDER(rootPath);
        this.CREATE_USERNAME_FOLDER(rootPath, userName);
        this.CREATE_ARCHIVE(rootPath, userName);
    };

    // == OPERATIONS == //
    FOLDER_EXISTANCE(folderPath) {
        return fs.existsSync(folderPath);
    };
    FOLDER_CREATION(folderPath) {
        return fs.mkdirSync(folderPath);
    };
    FILE_CREATION(filePath, newdetails){
        const newdetails = JSON.stringify(details, null, 4);
        fs.writeFileSync(filePath, newdetails, 'utf8', err => {
            if (err) 
                console.error(err);
            else 
                console.log('Data Successfully Written to File');
        });
    };
    READ_FILE(filePath){
        const Messages = fs.readFileSync(filePath, 'utf8', function(err, data){
            let formattedData = JSON.parse(data);
            return formattedData;
        })
        return Messages;
    };
    FORMAT_PATH(){
        let bucket = []
        if (!testing) {
            if(relative[0] === ('£')) {
                bucket = [appMemoryPath];
                relative = relative.replace("£££-", "");
            }
            else{
                bucket = [__dirname];
            };
            let relativeArray = relative.split("/");
            pathloop: for (let index = 0; index < relativeArray.length; index++) {
                bucket.push(relativeArray[index])
            };
            let pathResult = path.join(...bucket);
            return pathResult;
        }
        else if (testing) {
            if(relative[0] === ('£')) {
                bucket = [appMemoryPath];
                relative = relative.replace("£££-", "");
                relative = relative.replace("UserMemory", "TestMemory");
            }
            else{
                bucket = [__dirname];
            };
            let relativeArray = relative.split("/");
            pathloop: for (let index = 0; index < relativeArray.length; index++) {
                bucket.push(relativeArray[index])
            };
            let pathResult = path.join(...bucket);
            return pathResult;
        };
    };
    COPY_FILE(originPath, destPath) {
        fs.copyFileSync(originPath, destPath, 2);
    };

    // == EDITING == //
    EDIT_PATHWAYS(){
        // READ THE ROUTE FILE
        // ADD A FILE PATH
    };

    // == CREATE == //
    CREATE_MEMORY_FOLDER(rootPath){
        this.FOLDER_CREATION(rootPath);
    };
    CREATE_USERNAME_FOLDER(rootPath, userName){
        let newPath = rootPath + "/" + userName;
        this.FOLDER_CREATION(newPath);

        let routePath = newPath + "/" + "ARCHIVE";
        let explorerPath = newPath + "/" + "EXPLORER";
        let archivePath = newPath + "/" + "ARCHIVE";
        let settingsPath = newPath + "/" + "SETTINGS";
        let userPath = newPath + "/" + "USERS";

        this.FOLDER_CREATION(routePath);
        this.FOLDER_CREATION(explorerPath);
        this.FOLDER_CREATION(archivePath);
        this.FOLDER_CREATION(settingsPath);
        this.FOLDER_CREATION(userPath);

    };
    CREATE_TREE (tree) {
        FOLDER_CREATION(`${pathString}${tree.HEADER}/`);
        tree.SUBHEADERS.forEach(subheading => {
            FOLDER_CREATION(`${pathString}${tree.HEADER}/${subheading}/`);
            FOLDER_CREATION(`${pathString}${tree.HEADER}/${subheading}/CONSOLE/`);
            FOLDER_CREATION(`${pathString}${tree.HEADER}/${subheading}/DESCRIPTION/`);
            FOLDER_CREATION(`${pathString}${tree.HEADER}/${subheading}/LIBRARY/`);
            FOLDER_CREATION(`${pathString}${tree.HEADER}/${subheading}/PLANETS/`);
            FOLDER_CREATION(`${pathString}${tree.HEADER}/${subheading}/TYPE/`);
            // CREATE FOLDERS IN PATHWAYS          
        });
    };
    CREATE_ARCHIVE(rootPath, userName) {
        let archivePath = rootPath + "/" + userName + "/" + "ARCHIVE";
        let memoryFolderPath = archivePath + "/" + "MEMORY";
        let sqliteFolderPath = archivePath + "/" + "SQLITE";

        let activeCharacterPath = memoryFolderPath + "/" + "ActiveCharacter.json";
        let alphabetPath = memoryFolderPath + "/" + "Alphabet.json";
        let newCharacterPath = memoryFolderPath + "/" + "NewCharacter.json";

        this.FOLDER_CREATION(memoryFolderPath);
        this.FOLDER_CREATION(sqliteFolderPath);

        this.FILE_CREATION(activeCharacterPath, {});
        this.FILE_CREATION(alphabetPath, this.#ALPHABET());
        this.FILE_CREATION(newCharacterPath, this.#NEW_CHARACTER());

        let archiveOrigin = 'CONSOLE/MEMORY/CLEAN/Archive.sqlite';
        let archiveDestination = archivePath + "/" + "Archive.sqlite";
        this.COPY_FILE(archiveOrigin, archiveDestination);
    };
    CREATE_ROUTES(rootPath, userName) {
        // EXPLORER
        // USERS
    };
    // == TEMPLATES == //
    #CULTURE_TREE() {
        return {
            CULTURE: ["FOOD"]
        }
    };
    #ALPHABET () {
        return {
            "A": "0",
            "B": "0",
            "C": "0",
            "D": "0",
            "E": "0",
            "F": "0",
            "G": "0",
            "H": "0",
            "I": "0",
            "J": "0",
            "K": "0",
            "L": "0",
            "M": "0",
            "N": "0",
            "O": "0",
            "P": "0",
            "Q": "0",
            "R": "0",
            "S": "0",
            "T": "0",
            "U": "0",
            "V": "0",
            "W": "0",
            "X": "0",
            "Y": "0",
            "Z": "0"
        }
    };
    #NEW_CHARACTER() {
        return {
            REQUIRED: "NONE",
            ACTIVITY: "NONE",
            PERSONAL: "NONE",
            ANCESTRY: "NONE",
            EDUCATION: "NONE",
            HALEX: "NONE",
            EMPLOYMENT: "NONE",
            SECTION: "NONE"
        }
    };
}

export {Construction}