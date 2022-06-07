// 템플릿 문자열

var cart = {name:'도서',pirce:"가격"};
var gettotal = function(cart){
  return `${cart.price}원`;
}
var mycart = `장바구니에 ${cart.name} 이 있습니다. 총 금액은 ${gettotal(cart)} 입니다`; // 문자열에 `${}을 이용해 변수포함