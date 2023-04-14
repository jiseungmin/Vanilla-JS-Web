// 전개 연산자

// 1. 배열전개연산자

var array1 = ['one','two']
var array2 = ['three','four']
const combine = [...array1,...array2]; // combin[one,two,three,four] 전개연산자
const [first, second, three = 'empty', ...other] = array1 // ...other 추출하고 남은 요소 추출

// 2. 객체 전개 연산자

var objectone = { one: 1, two: 2, other : 0}
var objecttwo = {three: 3, four: 4 ,  other : -1}

var combined = {...objectone, ...objecttwo} // combined = {one: 1, two: 2, three: 3, four: 4, other: -1}