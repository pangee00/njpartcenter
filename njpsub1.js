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

    // 오시는길 정보 버튼
    let getHereBtn1 = document.querySelector('.getHere_btn, .getHere_btn button');
    let getHereBtn2 = document.querySelector('.getHere_btn:nth-child(2) button');
    const getHereInfo1 = document.querySelector('.getHere_info');
    const getHereInfo2 = document.querySelector('.sub1_con_getHere_btn_wrap ul');

    // function clickGethereBtn(){

    // };

    getHereBtn1.addEventListener('click', ()=>{
        getHereInfo1.style.display = 'block'
    });

});

