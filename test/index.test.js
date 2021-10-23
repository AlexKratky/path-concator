const assert = require('assert');
const pathConcator = require('../index')
describe('PathConcator', () => {
    it('pathConcat', () => {
        assert.equal('/usr/bin/vlc', pathConcator.pathConcat('/usr/bin/', '/vlc/'));
        assert.equal('/usr/bin/vlc', pathConcator.pathConcat('/usr/bin///', 'vlc/'));
        assert.equal('/usr/bin/vlc', pathConcator.pathConcat('/usr/bin', 'vlc'));
        assert.equal('C:/Users/Alex/Desktop/test/vlc.exe', pathConcator.pathConcat('C:\\Users\\Alex\\Desktop\\test', '/vlc.exe'));
    });

    it('dirConcat', () => {
        assert.equal('/usr/bin/vlc/', pathConcator.dirConcat('/usr/bin/', '/vlc/'));
        assert.equal('/usr/bin/vlc/', pathConcator.dirConcat('/usr/bin///', 'vlc/'));
        assert.equal('/usr/bin/vlc/', pathConcator.dirConcat('/usr/bin', 'vlc'));
        assert.equal('C:/Users/Alex/Desktop/test/vlc/test/', pathConcator.dirConcat('C:\\Users\\Alex\\Desktop\\test', '/vlc//', '/test'));
    });

    it('urlConcat', () => {
        assert.equal('http://authserver.example.com/api/login/', pathConcator.urlConcat('http://authserver.example.com/', '/api/login'));
    });
});