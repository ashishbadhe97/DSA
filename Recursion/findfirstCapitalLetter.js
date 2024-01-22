

const findFirstCapitalLetter = (str, index) => {

    if(index >= str.length){
        return -1;
    }

    if(str.charAt(index) >= "A" && str.charAt(index) <= "Z"){
        return str.charAt(index);
    }

    return findFirstCapitalLetter(str, index + 1);

}

console.log(findFirstCapitalLetter("geekS", 0));