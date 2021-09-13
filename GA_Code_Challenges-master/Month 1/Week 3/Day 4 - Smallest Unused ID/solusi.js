function nextId(ids){
    for (let i=0; i < ids.length+1; i++) {
      if(ids.indexOf(i) == -1) {
        return i;
      }
    }
  }

//my another answer
function nextId(ids){
  for(i = 0; i <= ids.length; i++) {
    if(!ids.includes(i)) {
      return i;
    }
  }
}