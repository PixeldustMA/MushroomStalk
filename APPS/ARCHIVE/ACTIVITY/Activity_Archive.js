import { Activity_Insert } from "./Activity_Insert.js";

class Activity {

    constructor() {
    }

    async addValues(data, tag) {
        switch (tag) {
            case 'MISC':
                let addMiscInstance = new Activity_Insert({
                    ACTIVITY: data.ACTIVITY,
                    SECTION: data.SECTION,
                    MISC_TASK: data.MISC_TASK
                });
                return await addMiscInstance.ACTIVITY_MISC_INSERT();
            case 'SPORTS':
            let addSportsInstance = new Activity_Insert({
                ACTIVITY: data.ACTIVITY,
                SECTION: data.SECTION,
                SPORT: data.SPORT,
                SPORT_ORGANISATION: data.ORGANISATION,
                SPORT_PROFESSIONAL: data.SPORT_PRO
            });
            return await addSportsInstance.ACTIVITY_SPORTS_INSERT();
            case 'MUSIC':
                let addMusicInstance = new Activity_Insert({
                    ACTIVITY: data.ACTIVITY,
                    SECTION: data.SECTION,
                    INSTRUMENT: data.INSTRUMENT,
                    BAND: data.BAND_NAME,
                    ORCHESTRA: data.ORCHESTRA_NAME,
                    MUSIC_PROFESSIONAL: data.MUSIC_PRO
                });
                return await addMusicInstance.ACTIVITY_MUSIC_INSERT();
            default:
                break;
        }

    };
};

export {Activity};