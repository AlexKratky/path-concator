module.exports = {
    /**
     * Concat directory path with file, eg ('/usr/bin/', '/vlc') => /usr/bin/vlc
     * @returns {String} concated file path
     */
    pathConcat: function () {
        let args = [...arguments];
        args = args.map((el, index) => {
            if (index > 0) {
                return el.replace(/\\/g, '/').replace(/\/*$/, '').replace(/^\/*/, '')
            }
            return el.replace(/\\/g, '/').replace(/\/*$/, '')
        });

        return args.join('/');
    },

    /**
     * Concat directories, eg ('C:\Users\Alex\', '/Desktop/test') => C:/Users/Alex/Desktop/test/
     */
    dirConcat: function () {
        let args = [...arguments];
        args = args.map((el, index) => {
            if (index > 0) {
                return el.replace(/\\/g, '/').replace(/\/*$/, '').replace(/^\/*/, '')
            }
            return el.replace(/\\/g, '/').replace(/\/*$/, '')
        });

        return args.join('/') + '/';
    },

    /**
     * Concat url with uri, eg ('http://authserver.example.com/', '/api/login') => http://authserver.example.com/api/login/
     */
    urlConcat: function () {
        let args = [...arguments];
        args = args.map((el, index) => {
            if (index > 0) {
                return el.replace(/\/*$/, '').replace(/^\/*/, '')
            }
            return el.replace(/\/*$/, '')
        });

        return args.join('/') + '/';
    },
}