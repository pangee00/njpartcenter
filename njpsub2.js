document.addEventListener('DOMContentLoaded', () => {

    // 반응형 슬라이드 메뉴 : 모든 영역 공통
    const openBtn = document.querySelector('.header_all_category_openBtn');
    const closeBtn = document.querySelector('.header_all_category_closeBtn');
    const category = document.getElementById('header_all_category');

    openBtn.addEventListener('click',()=>{
        category.classList.add('active');
    });
    closeBtn.addEventListener('click',()=>{
        category.classList.remove('active');
    });

});