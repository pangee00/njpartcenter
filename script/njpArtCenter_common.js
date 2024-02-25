$(document).ready(function () {

    // header
    let scrollT;
    let scrollP = 0;
    let delta = 5;
    let headerHeight = $("#header_top_wrap").outerHeight();

    $(window).scroll(function (e) {
        scrollT = true;
    });

    setInterval(function () {
        if (scrollT) {
            hasScrolled();
            scrollT = false
        }
    }, 250);

    function hasScrolled() {
        let st = $(this).scrollTop();

        if (Math.abs(scrollP - st) <= delta)

            return;

        if (st > scrollP && st > headerHeight) {
            $("#header_top_wrap").removeClass('navD').addClass('navU');
        } else {
            if (st + $(window).height() < $(document).height()) {
                $("#header_top_wrap").removeClass('navU').addClass('navD')
            }
        }
        scrollP = st;
    };

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
    window.addEventListener('scroll', function () {
        let footerLine = document.getElementById('footer_borderLine');
        let footHeight = footerLine.offsetTop;
        let menu2 = document.getElementById('header_menu2');
        let scrollP = window.scrollY;

        if (scrollP > 0) {
            if ((footHeight - scrollP) < 700) {
                menu2.style.display = 'none';
            } else {
                menu2.style.display = 'block';
            }
        } else if (scrollP <= 0) {
            if ((footHeight - scrollP) < 700) {
                menu2.style.display = 'none';
            } else {
                menu2.style.display = 'block';
            }
        } else { }
    });
});