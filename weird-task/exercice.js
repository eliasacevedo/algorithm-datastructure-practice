// From a text-string sentence, 
// 1. inverse all words with even number of characters, 
// 2. remove duplicate words with uneven number of characters and 
// 3. return as fast as possible the length-sorted words as a new string sentence

const sentence = "with un even use number of characters and even return as fast car and as possible use"

function inverseWord(word) {
    let newWord = ""
    for (let index = word.length - 1; index >= 0; index--) {
        const char = word[index];
        newWord += char
    }
    return newWord
}

function invert(sentence) {
    const array = sentence.split(' ')
    const words = {}

    array.forEach(word => {
        let newWord = word
        const isEvenWord = word.length % 2 === 0

        if (isEvenWord) 
            newWord = inverseWord(word)
        else 
            if (words[newWord])
                return
        
        const wordReference = words[newWord]

        if (!wordReference) {
            words[newWord] = {original: word, text: newWord, length: newWord.length, quantity: 1}
            return
        }

        wordReference.quantity++
    })
    return words
}

function getString(objectInverted) {
    const index = Object.keys(objectInverted)
    return index
        .sort((wordA, wordB) => objectInverted[wordA].length - objectInverted[wordB].length)
        .reduce((pv, cv) => `${pv} ${`${cv} `.repeat(objectInverted[cv].quantity).trim()}`, '')
}

console.log(getString(invert(sentence)))