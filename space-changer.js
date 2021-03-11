let phraseListText;
let phraseListArray = [];
let symolArray = [];
let spaceParsedArray = [];
let numberSymbolsParsedArray = [];
let finalParsedArray = [];

const generateButton = document.getElementById('generate');
const wordListInput = document.getElementById('word-list');
const symbolListInput = document.getElementById('symbol-list');
const txtOutput = document.getElementById('txt-output');

function generatePhraseList() {
  phraseListArray = wordListInput.value
    .toLowerCase()
    .replace(/, /g, ',')
    .split(',');
  symbolArray = symbolListInput.value.replace(/, /g, ',').split(',');
  symbolArray.push(' ', '');
  //   console.log(phraseListArray, symbolArray);
  replaceSpaces(phraseListArray, symbolArray);
  useNumberSymbols(spaceParsedArray);
  finalParsedArray.push(...spaceParsedArray, ...numberSymbolsParsedArray);
  txtOutput.value = finalParsedArray.join(', ');
}

function replaceSpaces(wordArr, symbolArr) {
  for (let word = 0; word < wordArr.length; word++) {
    if (wordArr[word].includes(' ')) {
      for (let i = 0; i < symbolArr.length; i++) {
        let tempWord = wordArr[word].replace(/\s/g, symbolArr[i]);
        tempWord = `"${tempWord}"`;
        spaceParsedArray.push(tempWord);
      }
    } else {
      spaceParsedArray.push(`"${wordArr[word]}"`);
    }
  }
}

function useNumberSymbols(wordArr) {
  for (let x = 0; x < wordArr.length; x++) {
    let tempWord = wordArr[x].replace(/a/g, '@').replace(/o/g, '0');
    numberSymbolsParsedArray.push(tempWord);
  }
  console.log('Use Number Array', numberSymbolsParsedArray);
}
