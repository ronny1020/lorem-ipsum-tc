# what is this?

Creating creating Traditional Chinese lorem ipsum.

繁體中文測試文本生成工具

---

# example

const loremIpsumTC = require('lorem-ipsum-tc')

loremIpsumTC.createChar(charList)
loremIpsumTC.createLine(withLoren, numOfChar, charList)
loremIpsumTC.createParagraph(withLoren, numOfLine, charList)

---

# option

loremIpsumTC.createChar(charList)
loremIpsumTC.createLine(withLoren, numOfChar, charList)
loremIpsumTC.createParagraph(withLoren, numOfLine, charList)

● charList: string
There is a default charList, however you can use your own charList by String.
EX: loremIpsumTC.createChar("甲乙丙丁")
● withLoren: boolean
If withLoren is true, line or paragraph would start with "羅倫" which means lorem in Chinese.
Default is true.
● numOfChar
Number of characters would be created.("羅倫" is NOT counted.)
Default is random form 2 to 21.
● numOfLine
Number of lines would be created.
Default is random form 2 to 6.
