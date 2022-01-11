export const validateNumberStringWith2Decimals = value => {
    let countDots = 0
    let decimalPlaces = 0
    for (let i = 0; i < value.length; i++) {
        //counting quantity of dots
        if (value[i] === '.') {
            countDots++
        }
        //checking if character is different from 0-9 && '.'
        if ((value[i] < '0' || value[i] > '9') && value[i] !== '.') {
            return
        }
        //counting decimal places quantity
        if (countDots >= 1 && value[i] !== '.') {
            decimalPlaces++
        }
    }
    if (countDots <= 1 && decimalPlaces <= 2) {
        return value
    }
}