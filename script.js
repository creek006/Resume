document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.getElementById('menu-button');
    var nav = document.getElementById('menu');

    menuButton.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
