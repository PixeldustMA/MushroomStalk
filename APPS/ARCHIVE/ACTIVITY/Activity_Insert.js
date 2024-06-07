import { Insert } from "../CONSOLE/Insert.js";

class Activity_Insert {

    constructor(
        activityData = {

            ACTIVITY: "",
            SECTION: "",

            MISC_TASK: "",
            SPORT: "",
            SPORT_ORGANISATION: "",
            SPORT_PROFESSIONAL: "",
            INSTRUMENT: "",
            BAND: "",
            ORCHESTRA: "",
            MUSIC_PROFESSIONAL: ""

        }) {
        this.ACTIVITY_MISC_DATA = [
            activityData.ACTIVITY,
            activityData.SECTION, 
            activityData.MISC_TASK
        ];
        this.ACTIVITY_SPORTS_DATA = [
            activityData.ACTIVITY,
            activityData.SECTION,
            activityData.SPORT,
            activityData.SPORT_ORGANISATION,
            activityData.SPORT_PROFESSIONAL
        ];
        this.ACTIVITY_MUSIC_DATA = [
            activityData.ACTIVITY,
            activityData.SECTION,
            activityData.INSTRUMENT,
            activityData.BAND,
            activityData.ORCHESTRA,
            activityData.MUSIC_PROFESSIONAL
        ];
    }

    async ACTIVITY_MISC_INSERT() {
        console.log(this.ACTIVITY_MISC_DATA)
        const inserting = new Insert({
            TABLE_NAME: "ACC_MISC",
            COLUMN_LIST: [
                "CODE", "SECTION", 
                "TASK"
            ],
            DATA: this.ACTIVITY_MISC_DATA
        });
        await inserting.INSERT_ARCHIVE();
    };
    async ACTIVITY_SPORTS_INSERT() {
        const inserting = new Insert({
            TABLE_NAME: "ACC_SPORTS",
            COLUMN_LIST: [
                "CODE", "SECTION", 
                "SPORT", "ORGANISATION",
                "PROFESSIONAL"
            ],
            DATA: this.ACTIVITY_SPORTS_DATA
        });
        await inserting.INSERT_ARCHIVE();
    };
    async ACTIVITY_MUSIC_INSERT() {
        const inserting = new Insert({
            TABLE_NAME: "ACC_MUSIC",
            COLUMN_LIST: [
                "CODE", "SECTION", 
                "INSTRUMENT", "BAND",
                "ORCHESTRA", "PROFESSIONAL"
            ],
            DATA: this.ACTIVITY_MUSIC_DATA
        });
        await inserting.INSERT_ARCHIVE();
    };
};

export {Activity_Insert};