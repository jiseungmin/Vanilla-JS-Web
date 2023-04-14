function parse(qs){
  const queryString = qs.substr(1);
  const chunk = queryString.split('&');
  let result = []
  chunk.forEach((chunk) => {
    const [key, value] = chunk.split('=');
    result[key] = value
  } )
}