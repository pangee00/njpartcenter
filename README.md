site adress : http://pangee.dothome.co.kr/0_main/index_m1.html
////////

img 너비높이빼고 맥스위드값으로 100%  >> reset값 전체 설정으로 바꿔둠
사이즈 줄었을때 figure값 100으로 바꾸기 >> reset값에 width height 전부 fitContent 걸려있음 
position 빼기 (top left값 빼버리기) >> 상단왼쪽으로 사진 정렬됨 / position 유지
TTF말고 OTF파일 추가  >> ok

사진 부모 박스빼고 두번째 부모박스 위드값 100 MAXWIDTH:100 > 사이즈 정해주는게 설정하기 편함

사진에 position값 다 빼기

reset값 설정 다시  > 해봄
  img{
  	display: block;
  	max-width: 100%;
  }


  main flip 큰 부모박스 position 재설정하고 이거 눌렀을 경우 작은 부모박스가 뒤집어지도록 설정
  transform translate 180deg값으로 바꾸기 > 

  flip효과 제이쿼리 this.toggle로 뒤집기
  pp 한번에 뒤집힘
