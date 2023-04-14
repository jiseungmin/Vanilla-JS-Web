 //전개구문 배열
 let uesr = { name: "mike"}
 let info = {age:30}
 let fe = ["js","react"]
 let rang = ["korea", "english"]

 ser = {
   ...uesr,
   ...info,
   skills: [...fe, ...rang]
 }

 console.log(ser)