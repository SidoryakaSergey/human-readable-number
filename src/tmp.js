function toReadable(number) {
    let wordNumbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };

    let strNumber = number.toString();

    if (number < 20) {
        return wordNumbers[number];
    }
    if (number < 100) {
        if (strNumber[1] > 0) {
            return `${wordNumbers[parseInt(strNumber[0] + "0")]} ${
                wordNumbers[parseInt(strNumber[1])]
            }`;
        } else {
            return wordNumbers[number];
        }
    }
    const hundred = `${wordNumbers[parseInt(strNumber[0])]} ${
        wordNumbers[100]
    }`;
    strNumber = strNumber.slice(1);
    number = parseInt(strNumber);

    if (number < 20) {
        return `${hundred} ${wordNumbers[number]}`;
    } else if (strNumber[1] > 0) {
        return `${hundred} ${wordNumbers[parseInt(strNumber[0] + "0")]} ${
            wordNumbers[parseInt(strNumber[1])]
        }`;
    } else {
        return `${hundred} ${wordNumbers[number]}`;
    }
}

console.log(toReadable(405));
