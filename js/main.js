let menuControl = function () {
    let menuIconOpen = document.querySelector('.header__menu-open');
    let menuIconClose = document.querySelector('.sidenav__close-zone');
    let sidenav = document.querySelector('.sidenav');

    menuIconOpen.addEventListener('click', function () {
        sidenav.classList.add('active')
    });

    menuIconClose.addEventListener('click', function () {
        sidenav.classList.remove('active');
    });

    document.addEventListener('click', function (evt) {
        if(sidenav.classList.contains('active') && !evt.target.closest('.sidenav__close-zone') &&
        !evt.target.closest('.header__menu-open')){
            sidenav.classList.remove('active');
        }
    })
};

//Адаптивный отступ для главного контента
let offsetMainContent = function(){
    let main = document.querySelector('.main');
    let header = document.querySelector('.header');
    let distanceBetweenMain;

    if(main){
        if(document.documentElement.offsetWidth > 991){
            distanceBetweenMain = 24
        } else {
            distanceBetweenMain = 16;
        }

        main.style.paddingTop = header.offsetHeight + distanceBetweenMain + 'px';

        window.addEventListener('resize', function () {
            main.style.paddingTop = header.offsetHeight + distanceBetweenMain + 'px';
        });

    }
};

//перемещаем баннер на экранах меньше 991 на главной странице
let moveBannerOnMainPage = function(){
    let banner = document.querySelector('.move-on-mobile');

    if(banner && document.documentElement.offsetWidth < 992){
        let copyOfBanner = banner.cloneNode(true);
        let lastElementMainNews = document.querySelector('.news-item--main:nth-child(4)');

        banner.remove();

        lastElementMainNews.insertAdjacentElement('afterend', copyOfBanner);

    }
};

//перемещаем баннер на экранах меньше 769 на странице газеты
let moveBannerOnNewspaperPage = function(){
    let banner = document.querySelector('.move-on-mobile--newspaper-page');

    if(banner && document.documentElement.offsetWidth < 769){
        let copyOfBanner = banner.cloneNode(true);
        let lastElementMainNews = document.querySelector('.to-print__item:nth-child(1)');

        banner.remove();

        lastElementMainNews.insertAdjacentElement('afterend', copyOfBanner);

    }
};

//перемещаем баннера на экранах < 769 на странице видео
let moveBannerOnVideoPage = function(){
    let banner = document.querySelector('.move-on-mobile--video-page');

    if(banner && document.documentElement.offsetWidth < 769){
        let copyOfBanner = banner.cloneNode(true);
        let lastElementMainNews = document.querySelector('.all-videos__item:nth-child(1)');

        banner.remove();

        lastElementMainNews.insertAdjacentElement('afterend', copyOfBanner);

    }
};

//перемещаем баннера на экранах < 769 на странице новостей
let moveBannerOnNewsPage = function(){
    let banner = document.querySelector('.move-on-mobile--news-page');

    if(banner && document.documentElement.offsetWidth < 769){
        let copyOfBanner = banner.cloneNode(true);
        let lastElementMainNews = document.querySelector('.news-page__news-container .news--main:nth-child(3)');

        banner.remove();

        lastElementMainNews.insertAdjacentElement('afterend', copyOfBanner);

    }
};

//перемещаем баннера на экранах < 769 на странице новостей
let moveBannerOnArchivePage = function(){
    let banner = document.querySelector('.move-on-mobile--archive');

    if(banner && document.documentElement.offsetWidth < 769){
        let copyOfBanner = banner.cloneNode(true);
        let lastElementMainNews = document.querySelector('.archive-page__items-container .archive-page__item:nth-child(2)');

        banner.remove();

        lastElementMainNews.insertAdjacentElement('afterend', copyOfBanner);

    }
};

let initFunctions  = function(){
    menuControl();
    offsetMainContent();
    moveBannerOnMainPage();
    moveBannerOnNewspaperPage();
    moveBannerOnVideoPage();
    moveBannerOnNewsPage();
    moveBannerOnArchivePage();
};

initFunctions();
