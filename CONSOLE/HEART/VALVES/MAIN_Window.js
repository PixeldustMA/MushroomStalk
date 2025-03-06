module.exports = class WINDOW {

    constructor() {};

    /**
     * ## QUIT THE APP
     * 
     * --------------------
     * 
     *  Close the application
     * 
     * Closes the active window
     * 
     * If the active window is not the only window, the application will not close
     * 
     * --------------------------
     * ### RETURNS -->> {NONE} Closed windows
     */
    async QUIT(PARAMETER_WINDOW) {
        PARAMETER_WINDOW.close();
    };
    /**
     * ## MAXIMISE THE APP
     * 
     * --------------------
     * 
     * Maximise the application
     * 
     * Maximises the active window
     * 
     * --------------------------
     * ### RETURNS -->> {NONE} Maximised windows
     */
    async MAXIMISE(PARAMETER_WINDOW) {
        PARAMETER_WINDOW.isMaximized() 
                    ? PARAMETER_WINDOW.unmaximize() 
                    : PARAMETER_WINDOW.maximize()
    };
    /**
     * ## MINIMISE THE APP
     * 
     * --------------------
     * 
     * Minimise the application
     * 
     * Minimises the active window
     * 
     * --------------------------
     * ### RETURNS -->> {NONE} Maximised windows
     */
    async MINIMISE(PARAMETER_WINDOW) {
        PARAMETER_WINDOW.minimize();
    }
}