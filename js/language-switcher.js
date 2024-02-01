document.addEventListener('DOMContentLoaded', function () {
    var preferredLang = navigator.language || navigator.userLanguage;
    preferredLang = preferredLang.substr(0, 2).toLowerCase();
    console.log(preferredLang);

    var supportedLang = ['en', 'zh'];
    var defaultLang = 'en';

    if (supportedLang.indexOf(preferredLang) !== -1) {
        window.location.href = '/' + preferredLang + '/index.html';
    } else if (supportedLang.indexOf(preferredLang) == -1) {
        window.location.href = '/' + defaultLang + '/index.html';
    }
});