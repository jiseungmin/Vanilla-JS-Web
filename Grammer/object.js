function object(){ // 객채에 안에 있는 미리 정의되어 있는 함수는 메서드라고 부른다.
  var now = new Date // 내장 객체 인스턴스
  console.log(now.toLocaleString())

  var book = {  // book 객체 // 사용자 설정 객체 // 리터널 표기법
    title: "자바스크립트",
    author: "고썜",  // 속성이름 author , 속성값 고썜
    pages: 500,
    price: 15000,
    info: function(){ // info라는 함수
      console.log("안녕하십니까" + this.title)
    }
  }
  book.title // book.title .을 이용하여 사용
}

let a = 'age'
const user = {
  name : 'Mike',
  [a]: 30 //age : 30  계산된 프로퍼티
}
const youuser = Object.assign({gender:'female'}, user) // 객체 복사
console.log(youuser)
console.log(Object.values(youuser)) // value 값만 나옴
console.log(Object.keys(youuser)) // key 값만 나옴
console.log(Object.entries(youuser)) // 키값 배열 반환

function symbol(){
  //다른 개발자가 만들어 놓은 객체
  const User = {
    name: "Mike",
    age: 30
  }

  // 내가 작업
  const showname = Symbol("show name")
  User[showname] = function(){
    console.log(this.name)
  }
  User[showname]()

  // 사용자에게 보이는 메세지
  for (let key in User){
    console.log(`his ${key} is ${User[key]}.`) // symbol 안보임
  }
}