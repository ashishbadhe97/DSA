const skipLetter = (str, index) => {
    
    if(index >= str.length){
        return "";
    }
    
    let myStr = str.charAt(index);
    
    if(myStr === "a"){
        myStr = "";
    }
    
    let nextStr = skipLetter(str, index + 1);
    
    return myStr + nextStr;
}

let str = "bacasasaasaaasdsfdfasasaaasadcad";
console.log(skipLetter(str, 0));