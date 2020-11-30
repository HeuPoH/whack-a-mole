/**
 * Property isReady needed to prevent starting a few setInterval's
 * Property isStop needed to stop application
 * @returns {{isStop: boolean, setupToStart: setupToStart, isReady: boolean, upCount: upCount}}
 */
export const menu = {
    count: 0,
    isReady: true,
    isStop: false,

    upCount: function () {
        this.count += 1;
        document.getElementById('count').innerText = this.count.toString();
    },

    setupToStart: function () {
        const moles = document.getElementsByClassName('container__field-img-mole');
        for (const item of moles) {
            item.onclick = this.upCount.bind(menu);
        }
        this.isReady = false;
        this.isStop = false;
    }
};