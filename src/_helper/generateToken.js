export const generateToken=()=>{
    const list=['a','b','c','d','e','f','g','h',1,2,3,4,5,6,7,8,9,0];
    let token='';
    for(let i=0;i<=15;i++){
      const singleChar=list[Math.ceil((list.length-1)* Math.random())]
  token+=singleChar
    }
    return {token}
  }