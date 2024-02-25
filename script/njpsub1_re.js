document.addEventListener('DOMContentLoaded', () => {

    // 오시는길 정보 버튼
    let getHereBtn1 = document.querySelector('.sub1_con_getHere_btn_wrap1 .getHere_btn');
    let getHereBtn2 = document.querySelector('.sub1_con_getHere_btn_wrap2 .getHere_btn');
    const getHereInfo1 = document.querySelector('.sub1_con_getHere_btn_wrap1 .getHere_info');
    const getHereInfo2 = document.querySelector('.sub1_con_getHere_btn_wrap2 .getHere_info');

    getHereBtn1.addEventListener('click',()=>{
        getHereInfo1.classList.toggle('getHere_info_toggle');
    });

    getHereBtn2.addEventListener('click',()=>{
        getHereInfo2.classList.toggle('getHere_info_toggle');
    });

    // sub1 관람주의사항 팝업
    let alertOpenBtn1 = document.querySelector('.sub1_con_menuS .sub1_con_tit:first-child');
    let alertOpenBtn3 = document.querySelector('.sub1_con_menuS .sub1_con_tit:last-child');
    let alertCloseBtn1 = document.querySelector('#sub1_popup1_wrap .sub1_popup_btn');
    let alertCloseBtn3 = document.querySelector('#sub1_popup3_wrap .sub1_popup_btn');
    let alertPopup1 = document.getElementById('sub1_popup1_wrap');
    let alertPopup3 = document.getElementById('sub1_popup3_wrap');
    
    alertOpenBtn1.addEventListener('click', () => {
        alertPopup1.style.display = 'block';
    });
    
    alertOpenBtn3.addEventListener('click', () => {
        alertPopup3.style.display = 'block';
    });

    alertCloseBtn1.addEventListener('click', () => {
        alertPopup1.style.display = 'none';  
    });

    alertCloseBtn3.addEventListener('click', () => {
        alertPopup3.style.display = 'none';  
    });
});
