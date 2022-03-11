function checkWordDot(name) {
    let result = true

    name.split(' ').forEach(el => {
        if (el.length > 2) {
            if (el[el.length - 1] === '.') {
                result = false
            }
        }
    })

    return result
}

function checkPosisitionInitial(name) {
    let result = true
    const splitName = name.split(' ')

    splitName.forEach((el, index) => {
        const wordBefore = splitName[index - 1] ? splitName[index - 1] : null
        const wordAfter = splitName[index + 1] ? splitName[index + 1] : null
        if (wordBefore && wordAfter) {
            if (wordBefore.length <= 2 && el.length > 2) {
                result = false
            }
        } else if (index === splitName.length - 1) {
            if (el.length <= 2) {
                result = false
            }
        }
    })
    return result
}


function checkInitialCapital(name) {
    let result = true
    name.split(' ').forEach(el => {
        if (el.length <= 2) {
            if (el[0] !== el[0].toUpperCase()) {
                result = false
            }
        }
    })
    return result
}


function checkInitialDot(name) {
    let result = true
    name.split(' ').forEach(el => {
        if (el.length <= 2) {
            if (el[1] !== '.') {
                result = false
            }
        }
    })
    return result
}


function checkLongWord(name) {
    let result = true
    const splitName = name.split(' ')
    if (splitName.length <= 1) {
        result = false
    }
    return result
}

function validName(name) {
    let result = false
    const longWord = checkLongWord(name)
    const initialDot = checkInitialDot(name)
    const initialCapital = checkInitialCapital(name)
    const posisitionInitial = checkPosisitionInitial(name)
    const wordDot = checkWordDot(name)
    if (longWord && initialDot && initialCapital && posisitionInitial && wordDot) {
        result = true
    }
    console.log(result)
}



validName('A. Kesya')

validName('A. K. Putri')

validName('Angelina K. Putri')

validName('Angelina')
// Must be 2 or 3 words

validName('a. Kesya')
// Incorrect capitalization

validName('A Kesya')
// Missing dot after initial

validName('A. Putri Blala')
// Cannot have: initial first name + word middle name

validName('A. Kesya P.')
// Last name cannot be initial

validName('Angelina. Kesya Putri')
// Words cannot end with a dot (only initials can)

// test
