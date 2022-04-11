function nameShuffler(str){
    //Find the Space seperating the words
    let findSpace = str.indexOf(' ')
    //split the string from the first character to the space
    let firstName = str.slice(0, findSpace)
    //split the string from the space to the end, but also add one to ignore the space. 
    let lastName = str.slice(findSpace + 1)
    //return last part of string followed by a space then the first part of the string. 
    return lastName + ' ' + firstName
  }

  nameShuffler('John McClane')