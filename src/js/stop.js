import {menu} from "./menu.js";
export {stop};

/**
 * Stop application
 */
function stop() {
    menu.isStop = true;
    menu.isReady = true;
}