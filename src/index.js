module.exports = function toReadable (number) {
    let lastChar;
    let secondChar;
    let thirdChar;
    let tenNineten
    let result;
    const numToStr = String(number)
    const splitNumStr = numToStr.split('');

// Задаю последнюю цифру

  if (splitNumStr[splitNumStr.length - 1] === '0') {
      lastChar = ''
       } else if (splitNumStr[splitNumStr.length - 1] === '1') {
      lastChar = 'one'
       } else if (splitNumStr[splitNumStr.length - 1] === '2') {
      lastChar = 'two'    
    }
  else if (splitNumStr[splitNumStr.length - 1] === '3') {
      lastChar = 'three'
    } else if (splitNumStr[splitNumStr.length - 1] === '4') {
      lastChar = 'four'
    } else if (splitNumStr[splitNumStr.length - 1] === '5') {
      lastChar = 'five'
    } else if (splitNumStr[splitNumStr.length - 1] === '6') {
      lastChar = 'six'
    } else if (splitNumStr[splitNumStr.length - 1] === '7') {
      lastChar = 'seven'
    } else if (splitNumStr[splitNumStr.length - 1] === '8') {
      lastChar = 'eight'
    } else if (splitNumStr[splitNumStr.length - 1] === '9') {
      lastChar = 'nine'
    } 

    // задаю переменную если  числа от 10 до 19

    if (splitNumStr[splitNumStr.length - 2] === '1' && splitNumStr[splitNumStr.length - 1] === '0') {
        tenNineten = 'ten'
    } else if (splitNumStr[splitNumStr.length - 2] === '1' && splitNumStr[splitNumStr.length - 1] === '1') {
        tenNineten = 'eleven'
    } else if (splitNumStr[splitNumStr.length - 2] === '1' && splitNumStr[splitNumStr.length - 1] === '2') {
        tenNineten = 'twelve'
    } else if (splitNumStr[splitNumStr.length - 2] === '1' && splitNumStr[splitNumStr.length - 1] === '3') {
        tenNineten = 'thirteen'
    } else if (splitNumStr[splitNumStr.length - 2] === '1' && splitNumStr[splitNumStr.length - 1] === '4') {
        tenNineten = 'fourteen'
    } else if (splitNumStr[splitNumStr.length - 2] === '1' && splitNumStr[splitNumStr.length - 1] === '5') {
        tenNineten = 'fifteen'
    } else if (splitNumStr[splitNumStr.length - 2] === '1' && splitNumStr[splitNumStr.length - 1] === '6') {
        tenNineten = 'sixteen'
    } else if (splitNumStr[splitNumStr.length - 2] === '1' && splitNumStr[splitNumStr.length - 1] === '7') {
        tenNineten = 'seventeen'
    } else if (splitNumStr[splitNumStr.length - 2] === '1' && splitNumStr[splitNumStr.length - 1] === '8') {
        tenNineten = 'eighteen'
    } else if (splitNumStr[splitNumStr.length - 2] === '1' && splitNumStr[splitNumStr.length - 1] === '9') {
        tenNineten = 'nineteen'
    } 

     //   задаю десятки
if (splitNumStr[splitNumStr.length - 2] === '0') {
      secondChar = ''
  } else
  if (splitNumStr[splitNumStr.length - 2] === '2') {
      secondChar = 'twenty'
  } else if (splitNumStr[splitNumStr.length - 2] === '3') {
      secondChar = 'thirty'
  } else if (splitNumStr[splitNumStr.length - 2] === '4') {
      secondChar = 'forty'
  } else if (splitNumStr[splitNumStr.length - 2] === '5') {
      secondChar = 'fifty'
  } else if (splitNumStr[splitNumStr.length - 2] === '6') {
      secondChar = 'sixty'
  } else if (splitNumStr[splitNumStr.length - 2] === '7') {
      secondChar = 'seventy'
  } else if (splitNumStr[splitNumStr.length - 2] === '8') {
      secondChar = 'eighty'
  } else if (splitNumStr[splitNumStr.length - 2] === '9') {
      secondChar = 'ninety'
  }
  
//  задаю сотни

if (splitNumStr[splitNumStr.length - 3] === '1') {
    thirdChar = 'one hundred'
} else if (splitNumStr[splitNumStr.length - 3] === '2') {
    thirdChar = 'two hundred'
} else if (splitNumStr[splitNumStr.length - 3] === '3') {
    thirdChar = 'three hundred'
} else if (splitNumStr[splitNumStr.length - 3] === '4') {
    thirdChar = 'four hundred'
} else if (splitNumStr[splitNumStr.length - 3] === '5') {
    thirdChar = 'five hundred'
} else if (splitNumStr[splitNumStr.length - 3] === '6') {
    thirdChar = 'six hundred'
} else if (splitNumStr[splitNumStr.length - 3] === '7') {
    thirdChar = 'seven hundred'
} else if (splitNumStr[splitNumStr.length - 3] === '8') {
    thirdChar = 'eight hundred'
} else if (splitNumStr[splitNumStr.length - 3] === '9') {
    thirdChar = 'nine hundred'
}

    //   рузультат если число меньше 10
if (number < 10 ) {
        result = lastChar
    } 

// рузультат если число от 10 до 20
      if (number === 0) {
        result = 'zero'
      } else
      if (number === 10) {
        result = 'ten'
      } else if (number === 11) {
        result = 'eleven'
      } else if (number === 12) {
        result = 'twelve'
      } else if (number === 13) {
        result = 'thirteen'
      } else if (number === 14) {
        result = 'fourteen'
      } else if (number === 15) {
        result = 'fifteen'
      } else if (number === 16) {
        result = 'sixteen'
      } else if (number === 17) {
        result = 'seventeen'
      } else if (number === 18) {
        result = 'eighteen'
      } else if (number === 19) {
        result = 'nineteen'
      } 
      
//результат если число от 20 до 100
      
      if (number >= 20 && number < 100 && splitNumStr[splitNumStr.length - 1] === '0') {
      result = secondChar
    } else if (number >= 20 && number < 100) {
      result = `${secondChar} ${lastChar}`
    } 
    
// результат если число от 100 до 999
    
if (number >= 100 && number < 1000 && splitNumStr[splitNumStr.length - 2] < 2 && splitNumStr[splitNumStr.length - 2] !== '0') {
    result = `${thirdChar} ${tenNineten}`
  } else if (number >= 100 && number < 1000 && splitNumStr[splitNumStr.length - 1] === '0' && splitNumStr[splitNumStr.length - 2] === '0') {
    result = `${thirdChar}`
  } else  if (number >= 100 && number < 1000 && splitNumStr[splitNumStr.length - 1] === '0') {
    result = `${thirdChar} ${secondChar}`
  } else if (number >= 100 && number < 1000 && splitNumStr[splitNumStr.length - 2] === '0') {
    result = `${thirdChar} ${lastChar}`
  } else if (number >= 100 && number < 1000) {
    result = `${thirdChar} ${secondChar} ${lastChar}`
}
    
// вывод результата

     return result
  }

