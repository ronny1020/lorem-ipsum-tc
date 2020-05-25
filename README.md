# lorem-ipsum-tc

Creating Traditional Chinese lorem ipsum.

繁體中文測試文本生成工具

## example

```javascript
const loremIpsumTC = require('lorem-ipsum-tc')

loremIpsumTC.createChar()
// Create a random character.

loremIpsumTC.createLine()
// Create a random line.

loremIpsumTC.createParagraph()
// Create a random paragraph.
```

## Installation

```bash
npm i lorem-ipsum-tc
```

## option

```javascript
loremIpsumTC.createChar(charList)
loremIpsumTC.createLine(withLoren, numOfChar, charList)
loremIpsumTC.createParagraph(withLoren, numOfLine, charList)
```

- charList: string

  There is a default charList, however you can use your own charList by String.
  EX: loremIpsumTC.createChar("甲乙丙丁")

- withLoren: boolean

  If withLoren is true, line or paragraph would start with "羅倫" which means lorem in Chinese.
  The default is true.

- numOfChar: number

  The number of characters would be created.(ps. "羅倫" is NOT counted.)
  The default is random from 2 to 21.

- numOfLine: number

  The number of lines would be created.
  The default is random from 2 to 6.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
