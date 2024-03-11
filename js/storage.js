// Maintenant qu'on a créé ce module, on n'a plus qu'à se dire qu'on l'utilisera toujours à la place du localStorage
// localStorage.setItem -> storage.setLocal
// localStorage.getItem -> storage.getLocal

export const storage = {
    /**
     * Remplaçant de localStorage.setItem() qui gère les types de valeur sans qu'on se pose de questions
     *
     * @param {String} key
     * @param {*} value
     */
    setLocal: function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    /**
     * Remplaçant de localStorage.getItem() qui gère les types de valeur sans qu'on se pose de questions
     *
     * @param {String} key
     *
     * @returns {*}
     */
    getLocal: function (key) {
        return JSON.parse(localStorage.getItem(key));
    },

    /**
     * Remplaçant de sessionStorage.setItem() qui gère les types de valeur sans qu'on se pose de questions
     *
     * @param {String} key
     * @param {*} value
     */
    setSession: function (key, value) {
       sessionStorage.setItem(key, JSON.stringify(value));
    },

    /**
     * Remplaçant de sessionStorage.getItem() qui gère les types de valeur sans qu'on se pose de questions
     *
     * @param {String} key
     *
     * @returns {*}
     */
    getSession: function (key) {
       return JSON.parse(sessionStorage.getItem(key));
    },

    /**
     * Remplaçant de document.cookie = "blabla" qui gère les types de valeur sans qu'on se pose de questions
     *
     * @param {String} key
     * @param {*} value
     * @param {Number|null} duration Durée de vie du cookie en secondes
     */
    setCookie: function (key, value, duration = null) {
        let cookie = key + "=" + JSON.stringify(value);

        if (duration !== null) {
            cookie += "; max-age=" + duration;
        }

        document.cookie = cookie;
    },

    /**
     * Remplaçant du mic mac immonde qui sert à récupèrer une valeur de cookie (Cf intro_stockage.js) qui gère les types
     * de valeur sans qu'on se pose de questions
     *
     * @param {String} key
     *
     * @returns {*}
     */
    getCookie: function (key) {
        const cookiesAsArray = document.cookie.split("; ");

        for (const cookie of cookiesAsArray) {
            if (cookie.startsWith(key + '=')) {
                const cookieInfo = cookie.split('=');

                return JSON.parse(cookieInfo[1]);
            }
        }

        return null;
    },
};