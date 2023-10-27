export const isLoggedIn=()=>{
    if(localStorage.getItem("token")!=null){
        return true
    }else{
        return false
    }
}

export function isStrictAlphanumeric(e) {
    // Regular expression to match at least one letter and any number of letters and digits
    const regex = /^(?=.*[a-zA-Z])[a-zA-Z0-9]*$/;
    if(regex.test(e.target.value)){
        return
    }else{
        e.preventDefault()
    }
     ;
  }