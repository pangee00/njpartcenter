document.addEventListener('DOMContentLoaded', () => {

    // header fixed scroll
    window.addEventListener('wheel', e => {
        const headerTopWrap = document.querySelector('#header_top_wrap');
        const headerTop = document.querySelector('#header_top');
        let headerScroll = window.scrollY;
        let headerWheel = e.deltaY > 0;

        if (headerScroll > 700) {
            headerTopWrap.style.backgroundColor = '#f6f6f6';
        } else {
            headerTopWrap.style.backgroundColor = '#f6f6f600';
        };

        if (headerWheel) {
            headerTopWrap.style.top = '-12vh';
            headerTop.style.top = '-12vh';
        } else {
            headerTopWrap.style.top = '0';
            headerTop.style.top = '0';
        };

    });

    // 반응형 슬라이드 메뉴 : 모든 영역 공통
    const openBtn = document.querySelector('.header_all_category_openBtn');
    const closeBtn = document.querySelector('.header_all_category_closeBtn');
    const category = document.getElementById('header_all_category');

    openBtn.addEventListener('click', () => {
        category.style.right = "0"
    });
    closeBtn.addEventListener('click', () => {
        category.style.right = "-120%"
    });

    // 반응형 슬라이드 메뉴 / 사이트맵 클릭 시 카테고리 폴딩
    let sitemapFold = document.querySelector('#header_menu2_mini li:nth-child(3)');
    sitemapFold.addEventListener('click', () => {
        category.style.right = '-120%'
    });

    // popup 공통
    let sponOpenBtn = document.querySelector('.footer2_info2 li:last-child');
    let sponCloseBtn = document.querySelector('.footer2_infi_sponList_btn');
    let sponPopup = document.querySelector('#footer2_info2_sponsorList_wrap');
    sponOpenBtn.addEventListener('click', () => {
        sponPopup.style.display = 'block';
    });
    sponCloseBtn.addEventListener('click', () => {
        sponPopup.style.display = 'none';
    });

    // menu2 fixed scroll 공통
    document.querySelector('body').addEventListener('wheel', e => {
        let menu2 = document.getElementById('header_menu2');
        let footerLine = document.getElementById('footer_borderLine');
        let footHeight = footerLine.offsetTop;
        let menuScroll = window.scrollY;
        let menuWheel = e.deltaY;

        if (menuWheel < 0) {
            if ((footHeight - menuScroll) < 700) {
                menu2.style.display = 'none';
            } else {
                menu2.style.display = 'block';
            }
        } else if (menuWheel > 0) {
            if ((footHeight - menuScroll) < 700) {
                menu2.style.display = 'none';
            } else {
                menu2.style.display = 'block';
            }
        } else { }
    });

    // --------------------------------------------- sub2

});