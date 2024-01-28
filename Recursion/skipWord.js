const skipWord = (str) => {
  if (str.length === 0) {
    return str;
  }

  let myString = "";

  if (str.startsWith("app") && !str.startsWith("apple")) {
    let passingString = str.substring(3);

    return skipWord(passingString);
  } else {
    myString = str.substring(0, 1);
    return myString + skipWord(str.substring(1));
  }
};

console.log(skipWord("dsdqwqwappwqwqappleapp"));
