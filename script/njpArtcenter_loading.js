document.addEventListener('DOMContentLoaded', () => {

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
});
