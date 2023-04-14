function loop(){ //반복문

  var sum = 0;
  for(var i = 1; i< 6; i++ ){ // 기본적인 for 문
    sum+= i;
  }
  document.write("1부터 5까지 더하면"+sum);


  let season = ["봄","여름","가을","겨울"]
  for(let value of season) { // es6  향상된 for of 문
    console.log(value)
  }


  let i = 0
  while(i<10){ // while 문
      i+=1
  }
  console.log(i)
}