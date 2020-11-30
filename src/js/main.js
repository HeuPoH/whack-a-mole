'use strict';
import {start} from "./start.js";
import {stop} from "./stop.js"

try {
    document.getElementById('btn-start').addEventListener('click', start);
    document.getElementById('btn-stop').addEventListener('click', stop);
}catch (e) {
    console.log(e.message);
}