var monMenu = document.getElementById('menu');
var monBurger = document.getElementById('menu-bars');
var monMenuCache = 1;

monBurger.addEventListener('click', function () {
    if(monMenuCache == 0) {
        monMenu.style.display = 'none';
        monMenuCache = 1;
    }
    else  {
        monMenu.style.display = 'block';
        monMenuCache = 0;
    }
});
