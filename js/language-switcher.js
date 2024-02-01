document.addEventListener('DOMContentLoaded', function () {
    var preferredLanguage = navigator.language || navigator.userLanguage;
    preferredLanguage = preferredLanguage.substr(0, 2).toLowerCase();

    var supportedLanguages = ['en', 'zh'];
    var defaultLanguage = 'en';

    if (supportedLanguages.indexOf(preferredLanguage) === -1) {
        window.location.href = '/index.html';
    } else {
        window.location.href = '/index_zh.html';
    }
});