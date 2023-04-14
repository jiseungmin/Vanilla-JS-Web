function array() {
  var myArray = new Array();

  var unmber = ["one","two","three","four"] // 리터널을 사용한 배열
  var unmmber = new Array("one", "two", "three", "four") // array 객체를 사용한 배열

 // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array array 객체 함수들

  let arr = [1,2,3,4,5]
  arr.splice(n,m,x) // 특정요소지우고추가
  arr.slice(1,4) // n부터 m까지 반환 // 2 3 4
  arr.concat([6,7]) // 1 2 3 4 5 6 7

  let arr1 = [1,2,3,4,5,3]

arr1.forEach((item,index)=>{ // value와 index한번에 배열 반복
  console.log(item)
})
arr1.indexOf(3) // 3 // 배열자리 확인
aar1.lastIndexof(3) // 7

arr.includes(3) // 포함하는지 확인 true or false
arr.find(3) // 첫번째 true 값만 찾고 끝
arr.findIndex(3)
arr.reverse() // 배열을 역순으로 정리

arr.map() // 함수를 받아 특정기능을 시행하고 새로운 배열을 반환

arr.join("-") // 1-2-3-4-5-3
arr.split(",") // , 기준으로 나눈다.

arr.sort() // 배열 재정렬
let are = [6,1,3,62,3,21]
are.sort((a,b) => {
return a - b
}) // 매번 이렇게 정렬하기 귀찮기 때문에 라이브러리 LodaSh를 사용함
console.log(are)
}

