document.addEventListener('DOMContentLoaded', () => {

    //loading page
    const loadPage = document.getElementById('loadingpage');
    window.onload = function () {
        loadPage.style.display = 'none';
    };

    // mouse cursor event
    let moveCursor = document.querySelector('#njp_cursor');
    let cursorMenu = document.querySelectorAll('.header_menu a');
    // window.addEventListener('scroll', cursor);
    window.addEventListener('mousemove', cursor);

    function cursor(e) {
        moveCursor.style.left = e.pageX + 3 + 'px';
        moveCursor.style.top = e.pageY + 3 + 'px';
    };

    cursorMenu.forEach(link => {
        link.addEventListener('mouseover', () => {
            moveCursor.classList.add('cursor_over');
            link.classList.add('hovered_link');
            // moveCursor.style.zIndex = '-1';
        });
        link.addEventListener('mouseleave', () => {
            moveCursor.classList.remove('cursor_over');
            // moveCursor.computedStyleMap.zIndex = '100';
            link.classList.remove('hovered_link');
        });
    });

    // main img click card css
    let mainCardAll = document.querySelectorAll('.main_picCon_pic_flip_all');
    let mainCardFlip = document.querySelector('.main_picCon_pic_flip');
    let mainCardBack = document.querySelectorAll('.main_picCon_pic_back');

    mainCardAll.forEach(index =>{
        index.addEventListener('click', () => {
            mainCardFlip.classList.add('main_picCon_pic_flip_click');
        });
    });

    // 아카이브 clip-path
    function archiveClip() {
        const clipBg = document.querySelector('.main_archive');
        const clipBgvideo = document.querySelector('.bg_archive');
        const archiveScroll = window.scrollY;
        const clipBgValue = Math.max(0, archiveScroll - 50);
        const clipBgValue2 = Math.max(0, $('.main_picCon_pic_flip_all:nth-child(8)').offset().top + 50);

        if (clipBgValue > clipBgValue2) {
            clipBg.classList.add('archive_active');
            clipBgvideo.classList.add('bg_archive_active');
        } else if (clipBgValue < clipBgValue2) {
            clipBg.classList.remove('archive_active');
            clipBgvideo.classList.remove('bg_archive_active');
        } else { }
    };

    window.addEventListener('scroll', archiveClip);

    // custom cursor
    window.addEventListener('wheel', e => {
        const headerTopWrap = document.querySelector('#header_top_wrap');
        const headerTop = document.querySelector('#header_top');
        let headerScroll = window.scrollY;
        let headerWheel = e.deltaY > 0;

        if(headerScroll > 700){
            headerTopWrap.style.backgroundColor = 'rgb(0,0,0)';
        } else {
            headerTopWrap.style.backgroundColor = 'rgba(0,0,0,0)';
        };

        if (headerWheel) {
            headerTopWrap.style.top = '-12vh';
            headerTop.style.top = '-12vh';
        } else {
            headerTopWrap.style.top = '0';
            headerTop.style.top = '0';
        };

    });


    // 모든 페이지 공통
    // 반응형 슬라이드 메뉴 : 모든 영역 공통
    const openBtn = document.querySelector('.header_all_category_openBtn');
    const closeBtn = document.querySelector('.header_all_category_closeBtn');
    const category = document.getElementById('header_all_category');

    openBtn.addEventListener('click', () => {
        category.style.right = "0"
        category.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        category.style.right = "-80%"
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
});