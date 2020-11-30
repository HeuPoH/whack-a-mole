import {menu} from "./menu.js";
import {settings} from "./settings.js";
export {start};

/**
 * Start application
 */
function start() {
    if(menu.isReady) {
        menu.setupToStart();
        const interval = setInterval(() => {
            const ceil = document.getElementById(getRandomNum(9));
            if(menu.isStop) {
                clearInterval(interval);
            }
            ceil.style.top = '7%';
            setTimeout(() => ceil.style.top = '40%', settings.hideTime);
        }, settings.revivalTime);
    }
}

/**
 * Random number from 0 to max
 * @param max int max number
 * @return {string}
 */
function getRandomNum(max) {
    return Math.floor(Math.random() * max).toString();
}
