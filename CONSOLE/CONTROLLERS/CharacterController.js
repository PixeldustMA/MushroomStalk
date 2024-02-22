import { CodeCreator } from "../../APPS/ARCHIVE/CODES/CodeCreator.js";
import { DatabaseDuck } from "../PLATYPUS/DatabaseRenderer.js";
import { Duck } from "./DuckController.js";
import { Stalk } from "./StalkController.js";

class Character {
    
    constructor(first = "firstname", 
                last = "lastname", 
                year = "1000", 
                planet = "planet") {
        this.duck = new DatabaseDuck();
        this.first = first
        this.last = last
        this.year = year
        this.planet = planet
        this.codes = new CodeCreator(this.first, this.last, this.year, this.planet);
        this.stalk = new Stalk();
        this.quack = new Duck("X0XX0000XXXX");
        this.activeSection = "Dragon";
        this.mushy = "";
        }
    async buildAPerson() {
        this.mushy = await this.findMushroom();
        return {
            CODES: {
                MUSHROOM: this.mushy,
                PERSONAL: await this.getPersonalCode(this.mushy),
                ACTIVITY: await this.getActivityCode(this.mushy),
                DRAGON: await this.getDragonCode(this.mushy)
            },
            FIRSTNAME: this.first,
            LASTNAME: this.last
        }
    }

    async loadCharacter() {
        
    }
    async findMushroom() {

        let potentialCharacters = await this.duck.select("PERSONAL_Names", "*", this.first, "First");
        if (potentialCharacters[0]["Family"] === this.last) {
            let MushroomCode = await this.duck.select("MUSHROOM_Codes", "*", potentialCharacters[0]["Personal-Code"], '"Personal-Code"')
            console.log(MushroomCode[0]["Mushroom-Code"]);
            return MushroomCode[0]["Mushroom-Code"];
        }
        // TODO RETURN ERROR CODE NOT FOUND
    }
    async getPersonalCode(mushroom) {
        let code = await this.duck.select("MUSHROOM_Codes", '"Personal-Code"', mushroom, '"Mushroom-Code"');
        return code[0]["Personal-Code"];
    }
    async getActivityCode(mushroom) {
        let code = await this.duck.select("MUSHROOM_Codes", '"Activity-Code"', mushroom, '"Mushroom-Code"')
        return code[0]["Activity-Code"];
    }
    async savePerson() {
        const characterRoute = await this.stalk.machete("ACTIVECHARACTER");
        this.stalk.path = characterRoute;
        this.stalk.data = await this.buildAPerson();
        this.stalk.Save()
    }
    async update(category, dataToChange) {

        let section = ""

        switch (category) {
            case "ACTIVITY-MISC":
                this.buildAPerson()
                    .then((ACTIVITY) => {
                        if (this.activeSection === "Dragon") {
                            section = ACTIVITY.CODES.DRAGON;
                        }
                        this.quack.mushroom - ACTIVITY.CODES.MUSHROOM;
                        this.quack.InsertActivity(section, ACTIVITY.CODES.ACTIVITY, dataToChange, "Misc")
                    })
                // FIND ACTIVITY CODE
                // ADD SECTION CODE AND ACTIVITY
                // THIS SHOULD ALWAYS ADD NEW NOT UPDATE
                
                // this.stalk.update(dataToChange, "Activity-Name", "ACTIVITY_Misc", 'Activity-Code', conditionValue);
                // this.stalk.update(section, "Section-Code", "ACTIVITY_Misc", 'Activity-Code', conditionValue);
                break;

            default:
                break;
        }
        // switch on category
        // add datatochange to the correct category
        // TODO CHECK HOW UPDATING DATA WORKS COMPARED TO INSERTING
        // return await this.stalk.update(dataToChange, column, table, conditionColumn, conditionValue);
    }
    async getDragonCode(mushroom) {
        let code = await this.duck.select("MUSHROOM_Areas", '"FinalTimelineCode"', mushroom, '"MushroomCode"')
        console.log(code)
        return code[0]["FinalTimelineCode"];
    }
}

export { Character };