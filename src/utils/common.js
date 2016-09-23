import {extend} from 'jquery'

function covertIntToBitArray(value) {
    return value
        .toString(2)
        .split('')
        .reverse()
        .map((v, i) => v === 1 ? i : null)
        .filter(i => i != null)
}

function convertBitArrayToInt(array) {
    if (!Array.isArray(array)) throw TypeError('{array} is not an Array object.')
    if (array.length === 0) return null
    array = extend([], array).sort((x, y) => y - x)
    let bitString = ''
    for (let i = array[0]; i >= 0; i--) {
        if (array.indexOf(i) === -1) {
            bitString += '0'
        }
        else {
            bitString += '1'
        }
    }
    return parseInt(bitString, 2)
}

function ensureNotNullString(value) {
    if (typeof value === 'string' && value !== '') {
        return value
    } else {
        return ''
    }
}

module.exports = {
    covertIntToBitArray: covertIntToBitArray,
    convertBitArrayToInt: convertBitArrayToInt,
    ensureNotNullString: ensureNotNullString,
}