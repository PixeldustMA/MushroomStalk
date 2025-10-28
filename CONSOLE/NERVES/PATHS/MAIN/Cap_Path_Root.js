export default class PATHS_Root {

    constructor({
        ROOT_CONFIG_USERNAME = 0,
        ROOT_CONFIG_MUSHROOM = 0
    }) {

        this.PATH_MAIN = ROOT_CONFIG_USERNAME;
        this.PATH_MUSHROOM = ROOT_CONFIG_MUSHROOM;
    };

    GENERATE_ROOT_PATHS() {
        return {
            MUSHROOM: this.PATH_MUSHROOM,
            USERNAME: this.PATH_MAIN,
            ROUTES: this.#ROUTES(),
            SETTINGS: this.#SETTINGS(),
            LAVALAMPS: this.#LAVALAMPS(),
            MEDIA: this.#MEDIA(),
            NOVA: this.#NOVA(),
            DATABASE: this.#DATABASE()
        }
    };
    #ROUTES() {
        return {
            MAIN: `${this.PATH_MAIN}/ROUTES`
        }
    };
    #SETTINGS() {
        return {
            MAIN: `${this.PATH_MAIN}/SETTINGS`
        }
    }
    #LAVALAMPS() {
        return {
            MAIN: `${this.PATH_MAIN}/LAVALAMPS`,
            POKEMON: `${this.PATH_MAIN}/LAVALAMPS/POKEMON`
        }
    };
    #MEDIA() {
        return {
            MAIN:  `${this.PATH_MAIN}/MEDIA`,
            BOOKS:  `${this.PATH_MAIN}/MEDIA/BOOKS`,
            SONGS:  `${this.PATH_MAIN}/MEDIA/SONGS`,
            AUTHORS: `${this.PATH_MAIN}/MEDIA/AUTHORS`,
            ARTIST: `${this.PATH_MAIN}/MEDIA/ARTIST`,
            GENRE: `${this.PATH_MAIN}/MEDIA/GENRE`,
            STYLE: `${this.PATH_MAIN}/MEDIA/STYLE`,
            SERIES: `${this.PATH_MAIN}/MEDIA/SERIES`,
        }
    };
    #NOVA() {
        return {
            MAIN: `${this.PATH_MAIN}/NOVA`,
            BLUEPRINTS: `${this.PATH_MAIN}/NOVA/BLUEPRINTS`,
        }
    };
    #DATABASE() {
        return {
            MAIN: `${this.PATH_MAIN}/DATABASE`,
            ELEMENTS: `${this.PATH_MAIN}/DATABASE/ELEMENTS`
        }
    }
}