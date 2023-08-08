const add = (numOne, numTwo) => {
    return Number(numOne) + Number(numTwo)   
}

const subtract = (numOne, numTwo) => {
    return Number(numOne) - Number(numTwo)   
}

const multiply = (numOne, numTwo) => {
    return Number(numOne) * Number(numTwo)   
}

const divide = (numOne, numTwo) => {
    return Number(numOne) / Number(numTwo)   
}

const operate = (operator, numOne, numTwo) => {
    
    if (operator === "+") {
        return add(numOne, numTwo)
    } else if (operator === "-") {
        return subtract(numOne, numTwo)
    } else if (operator === "*") {
        return multiply(numOne, numTwo)
    } else if (operator === "/") {
        return divide(numOne, numTwo)
    } else {
        return ""
    }
}