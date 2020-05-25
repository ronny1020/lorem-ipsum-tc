const tcCharacterList = require('./characterList.js')

const loremIpsumTC = {
  tcCharList: tcCharacterList,

  createChar: function (charList = tcCharacterList) {
    pickedNum = Math.floor(Math.random() * charList.length)
    return charList[pickedNum]
  },

  createLine: function (
    withLoren = true,
    numOfChar = Math.floor(Math.random() * 20) + 2,
    charList = tcCharacterList
  ) {
    let lineOfChar = ''
    for (let i = 0; i < numOfChar; i++) {
      lineOfChar += this.createChar()
    }
    return withLoren ? '羅倫' + lineOfChar : lineOfChar
  },

  createParagraph: function (
    withLoren = true,
    numOfLine = Math.floor(Math.random() * 5) + 2,
    charList = tcCharacterList
  ) {
    let paragraph = ''
    for (let i = 0; i < numOfLine - 1; i++) {
      paragraph += this.createLine(false) + '，'
    }
    paragraph += this.createLine(false) + '。'
    return withLoren ? '羅倫' + paragraph : paragraph
  },
}

module.exports = loremIpsumTC
