const hamburger = document.querySelector ('.hamburger');
const navMenu = document.querySelector ('#menu-link');

hamburger.addEventListener ('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

document.querySelectorAll('a', 'body').forEach ((n) => n.
    addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })
    );

    document.getElementsByTagName('body')[0].forEach ((n) => n.
    addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })
    );
