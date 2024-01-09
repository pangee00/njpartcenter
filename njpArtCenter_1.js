document.addEventListener('DOMContentLoaded', () => {

    //loading page
    const loadPage = document.getElementById('loadingpage');
    window.onload = function () {
        loadPage.style.display = 'none';
    };


    // mouse cursor event
    let moveCursor = document.querySelector('#njp_cursor');
    let cursorMenu = document.querySelectorAll('.header_menu a');

    window.addEventListener('mousemove', cursor);

    function cursor(e) {
        moveCursor.style.left = e.pageX - 2 + 'px';
        moveCursor.style.top = e.pageY - 2 + 'px';
    };

    cursorMenu.forEach(link => {
        link.addEventListener('mouseover', () => {
            moveCursor.classList.add('cursor_over');
            link.classList.add('hovered_link');
        });
        link.addEventListener('mouseleave', () => {
            moveCursor.classList.remove('cursor_over');
            link.classList.remove('hovered_link');
        });
    });


    // main img click card 2
    let flipAll = document.querySelectorAll('.main_picCon_pic_flip_all');
    let flipFlip = document.querySelector('.main_picCon_pic_flip:nth-child(2)');
    let cardFront = document.querySelector('.main_picCon_pic');
    let cardBack = document.querySelectorAll('.main_picCon_pic_back');

    document.querySelectorAll('.main_picCon_pic_flip').forEach((ii) => {
        ii.addEventListener('click', function () {
            if (ii.style.transform == 'rotateY(0deg)') {
                ii.style.transform = 'rotateY(180deg)'
            } else {
                ii.style.transform = 'rotateY(0deg)'
            }
        });
    });

    const fliporig = document.querySelectorAll('.main_picCon_pic_flip');
    const flipani = document.querySelector('.main_picCon_pic_flip_ani');
    document.getElementById("main_aria1").addEventListener('mouseover',()=>{
        fliporig.forEach((aa)=>{
                const flipInterval = setInterval(function(){
                    aa.classList.add("main_picCon_pic_flip_ani");
                    if(aa.style.transform == 'rotateY(180deg)'){
                        aa.classList.remove("main_picCon_pic_flip_ani");
                    }        
                },3*1000);
            
            setTimeout(()=>{
                aa.classList.remove("main_picCon_pic_flip_ani");
            },10000);

            function screenSize(){
                let originSize = window.innerWidth;
        
                if(originSize < 770){
                    clearInterval(flipInterval);
                }
            };
        
            screenSize();
        });
    });


    // 아카이브 clip-path
    window.addEventListener('scroll', function(){
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
    });

    
    // header fixed scroll
    window.addEventListener('wheel', e => {
        const headerTopWrap = document.querySelector('#header_top_wrap');
        const headerTop = document.querySelector('#header_top');
        let headerScroll = window.scrollY;
        let headerWheel = e.deltaY > 0;

        if (headerScroll > 700) {
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
    });

    closeBtn.addEventListener('click', () => {
        category.style.right = "-120%"
    });

    // 반응형 슬라이드 메뉴 / 사이트맵 클릭 시 카테고리 폴딩
    let sitemapFold = document.querySelector('#header_menu2_mini li:nth-child(3)');
    sitemapFold.addEventListener('click', () => {
        category.style.right = '-120%'
    })

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