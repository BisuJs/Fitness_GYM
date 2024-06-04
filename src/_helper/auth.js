export const setToken=(token)=>{
    localStorage.setItem('admin_token',JSON.stringify(token));
    
}
const getToken=()=>{
    const storageToken=localStorage.getItem('admin_token');
    if(!storageToken){
        return null;
    }else {
        const token= JSON.parse(storageToken);
        const isExpire=new Date(token.expiresIn) < new Date(Date.now());
        if(isExpire){
    return null;
        }
        else {
       return token;
        }
    }
    
}

export const authHeader=()=>{
    const token=getToken();
     const header= {
        'Content-Type':'application/json',
        authorization:`Bearer ${token}`

     }

    }
