
// var now = new Date
// now.toLocaleString()
// console.log(now.toLocaleString())


function doHomework(subject, callback){
	console.log((`Starting my ${subject} homework`))
    callback(); // callback 함수
}

doHomework('math', function(){ 
	console.log(('Finished my homework'))
});
//https://beconstant.tistory.com/2