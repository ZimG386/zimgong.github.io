var btns = [...document.querySelectorAll('.card .openBtn')];
var modals = [...document.querySelectorAll('.modal')];
var close_btns = [...document.querySelectorAll('.close')];

btns.forEach(function (btn) {
    btn.onclick = function () {
        var projId = btn.closest('.card').getAttribute('data-target');
        var proj = document.getElementById(projId);
        console.log(proj);
        proj.style.display = "block";
    }
});

close_btns.forEach(function (btn) {
    btn.onclick = function () {
        proj = btn.closest('.modal');
        proj.style.display = "none";
    }
});

window.onclick = function (event) {
    if (event.target.className == 'modal') {
        event.target.style.display = "none";
    }
}

var icon_linkedin = document.getElementsByClassName("fa-linkedin")[0];

icon_linkedin.onclick = function () {
    window.open("https://www.linkedin.com/in/zim-gong/", "_blank");
}

var icon_github = document.getElementsByClassName("fa-github")[0];

icon_github.onclick = function () {
    window.open("https://github.com/zimgong/", "_blank");
}