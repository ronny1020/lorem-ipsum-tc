const tcCharacterList = require('./characterList.js')

const loremIpsumTC = {
  tcCharList: tcCharacterList,

  createChar: function (charList = tcCharacterList) {
    pickedNum = Math.floor(Math.random() * charList.length)
    return charList[pickedNum]
  },

  createLine: function (
    withLoren = true,
    numOfChar = Math.floor(Math.random() * 20) + 1
  ) {
    let lineOfChar = ''
    for (let i = 0; i < numOfChar; i++) {
      lineOfChar += this.createChar()
    }
    return withLoren ? '羅倫' + lineOfChar : lineOfChar
  },

  createParagraph: function (
    withLoren = true,
    numOfLine = Math.floor(Math.random() * 5) + 1
  ) {
    let paragraph = ''

    return withLoren ? '羅倫' + lineOfChar : lineOfChar
  },
}

module.exports = loremIpsumTC
