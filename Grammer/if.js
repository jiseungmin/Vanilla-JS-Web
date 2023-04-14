function jsif(a){
  if(a==5){ // 조건문
    console.log("맞습니다.")
  }else if (a==4){
    console.log("맞습니다.")
  }else {
    console.log("틀립니다.")  
  }

  var score = 75;
  (score>=60)? console.log("맞습니다."): console.log("틀립니다.")   // 조건 연산자
}

function switchs(){ // 스위치 문
  var session = prompt("값의 세션을 선택해주세요 1.마케팅, 2.개발, 3.디자인");
  switch(session){
    case "1" : console.log("마케팅을 고르셧습니다.")
      break
    case "2" : console.log("개발을 선택하셧습니다.")
      break
    case "3" : console.log("디자인을 선택하셨습니다.")
  }

}