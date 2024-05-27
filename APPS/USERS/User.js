import { Stalk } from "../../CONSOLE/CONTROLLERS/StalkController.js";

class User extends Stalk {

    constructor() {
        super();
        this.pathString = "£££-UserMemory/USERS/FROGS/";
        this.userName = "";
        this.password = "";
        this.userData = {};
    }
    async SAVE_USER(newUser = false) {
        if (newUser) {
            await this.NEW_USER();
        }
        await this.SET_RESIDENT_FROG();
    }
    async ALL_CURRENT_USERS() {
        const frogs = this.GET_FROG_LIST();
        let users = []
        for (const userKey in frogs) {
            if (Object.hasOwnProperty.call(frogs, userKey)) {
                const user = frogs[userKey];
                users.push(user.NAME);
            }
        };
        return users;
    };
    async UPDATE_USER(tag, newValue, resident) {
        if (resident) {
            let residentFile = await this.GET_RESIDNT_FROG();
            this.userName = residentFile['NAME'];
            this.path = await this.INIT_ROUTE({
                TAG: this.userName.toUpperCase(),
                SECTION: '',
                USER: 1
            });
            let userData = await this.READ();
            userData[tag] = newValue;
            this.data = userData;
            await this.SAVE();
            await this.SET_RESIDENT_FROG();
        };
    };
    async CHECK_LOGGED_IN() {
        let frog = await this.GET_RESIDNT_FROG();
        return frog.LOGGED;
    }
    async GET_FROG_LIST() {
        this.path = await this.INIT_ROUTE({
            TAG: 'FROGS',
            SECTION: 'MEMORY', 
            SUBSECTION: 'USERS'});
        return await this.READ();
    };
    async INSERT_FROG_LIST() {
        let existingUsers = await this.GET_FROG_LIST();
        let userNumber = Object.keys(existingUsers);
		existingUsers[userNumber.length + 1] = {
			NAME: this.userName,
			PASSWORD: this.password
		};
        this.data = existingUsers;
        await this.SAVE();
    };
    async GET_RESIDNT_FROG() {
        this.path = await this.INIT_ROUTE({TAG: 'RESIDENT', SECTION: 'MEMORY', SUBSECTION: 'USERS'});
        return this.READ();
    };
    async SET_RESIDENT_FROG() {
        this.path = await this.INIT_ROUTE({TAG: this.userName.toUpperCase(), SECTION: "", USER: 1});
        let newResident = await this.READ();
        newResident["NAME"] = this.userName;
        this.data = newResident;
        this.path =  await this.INIT_ROUTE({TAG: 'RESIDENT', SECTION: 'MEMORY', SUBSECTION: 'USERS'});
        return await this.SAVE();
    };
    async NEW_USER() {
        this.password = this.userData.PASSWORD
        await this.UPDATE_MEMORY();
        await this.INSERT_FROG_LIST();
        this.path = await this.INIT_ROUTE({TAG: this.userName.toUpperCase(), SECTION: "", USER: 1});
        this.userData.LOGGED = false;
        this.userData.NAME = this.userName;
        this.data = this.userData;
        await this.SAVE();
    };
    async UPDATE_MEMORY() {
        const pathObject = JSON.parse(await this.READ_MEMORY());
        let newPath = this.pathString + this.userName + ".json";
        pathObject[this.userName.toUpperCase()] = newPath;
        this.path = await this.INIT_ROUTE({TAG: 'USERS', SECTION: "MEMORY", SUBSECTION: "ROUTES"});
        this.data = pathObject;
        return await this.SAVE();
    };
    async READ_MEMORY() {
        return await this.AVAILABLE_ROUTES('USERS');
    };
    async CLEAR_USERS() {
        this.path = await this.INIT_ROUTE({
            TAG: 'USERS',
            SECTION: 'FOLDERS',
            SUBSECTION: 'MEMORY'
        });
        const files = await this.READ_FOLDERS();
        files.forEach(userFile => {
            let userFileName = userFile.replace('.json', '');
            this.INIT_ROUTE({
                TAG: userFileName.toUpperCase(),
                SECTION: '',
                USER: 1
            }).then((RESULT) => {
                this.path = RESULT;
                this.REMOVE().then((RESULT) => {return RESULT});
            });
        });
    };
    async RESET_FROGS() {
        this.path = await this.INIT_ROUTE({TAG: 'FROGS', SECTION: 'MEMORY', SUBSECTION: 'USERS'});
        this.data = this.#FROGLIST();
        await this.SAVE();
    };
    async RESET_RESIDENT() {
        this.path =  await this.INIT_ROUTE({TAG: 'RESIDENT', SECTION: 'MEMORY', SUBSECTION: 'USERS'});
        this.data = this.#RESIDENTFROG();
        await this.SAVE();
    };
    async RESET_USER_MEMORY() {
        this.path = await this.INIT_ROUTE({TAG: 'USERS', SECTION: "MEMORY", SUBSECTION: "ROUTES"});
        this.data = this.#USERMEMORY();
        return await this.SAVE();
    };

    #FROGLIST(){
        return {
            "1": {
                "NAME": "TestUser",
                "PASSWORD": "Password"
            }
        }
    };
    #RESIDENTFROG(){
        return {};
    };
    #USERMEMORY() {
        return {};
    };
}

export {User};