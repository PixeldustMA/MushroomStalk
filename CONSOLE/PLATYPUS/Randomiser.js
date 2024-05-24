class spin {

    constructor() {};

    NUMBER(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}

export {spin};