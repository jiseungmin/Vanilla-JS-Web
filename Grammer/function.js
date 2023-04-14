function defonition(){
  function addNumber(){ // 매개변수 없는 함수
    var sum = 10 + 20
    console.log(sum)
  }
  addNumber()

  function aewNuber(a, b){ // 메개변수 있는 함수
    var dre = a+b
    console.log(sum)
  }
  aewNuber()

  function aweNumber(a,b){ // 매개 변수 있고 리턴값이 있는 함수
    var wer = a + b
    return wer
  }
  result = aweNumber(3,2)

  function cxvzc(){ // 매개변수가 없고 리턴값만 있는 함수
    const pal = 1000
    return pal;
  }
  xcxz = cxvzc()

}


function expression(){
  var add = function(a,b){ // 1. 익명 함수
    return a + b
  }
  var sum = add(10,20)
  console.log(sum)

  var result = (function(a,b){ //  2. 즉시 실행 함수
    return a + b
  })(10,20)

  const hi = function(){ // 3. 화살표 함수
    return "안녕하세요?"
  }
  const hi2 = () => {return "안녕하세요?"}
  const hi3 = () => "안녕하세요?" // 매개변수 없을때 화살표 함수
  const hi4 = (a,b) => "a+b" // 매개변수 a,b가 있고 리던값 a+b 로 반환하는 화살표 함수 
}

function book(author,pages,price, title){ //생성자 함수: 객체를 만들어내는 함수
  this.author = author
  this.pages = pages
  this.price = price
  this.title = title
}
jsbook = new book("홍길도",50,15000,"자바스크립트") // 인스턴스 만들기