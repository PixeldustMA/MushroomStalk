// ================================================ //
// ================================================ //
// ##           THE MUSHROOM STALK               ## //
// ================================================ //
// ==                                            == //
// ==                 ARCHIVE                    == //
// ##                 INSERT                     ## //
// ==                                            == //
// ================================================ //
// ================================================ //


export default class Insert {
    /**
     * ## INSERT CONSTRUCTOR
     */
    constructor(){};

    /**
     * ## REQUEST INSERT FUNCTION
     * 
     * --------------------------
     * 
     * Insert prepared data into archive regardless of module
     * 
     */
    async INSERT_ARCHIVE() {

        return await this.ARCHIVE_ADD();
    };
}