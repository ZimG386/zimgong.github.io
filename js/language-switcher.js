document.addEventListener('DOMContentLoaded', function () {
    var preferredLanguage = navigator.language || navigator.userLanguage;
    preferredLanguage = preferredLanguage.substr(0, 2).toLowerCase();

    var supportedLanguages = ['en', 'zh'];
    var defaultLanguage = 'en';

    var currentLang = window.location.pathname.split('/')[-1];
    print(currentLang);

    if (supportedLanguages.indexOf(preferredLanguage) === -1 && currentLang !== preferredLanguage) {
        window.location.href = '/' + preferredLanguage + '/index.html';
    } else if (supportedLanguages.indexOf(preferredLanguage) !== -1) {
        window.location.href = '/' + defaultLanguage + '/index.html';
    }
});