const inputContainer = document.getElementById('symbolizedInput');
const outputContainer = document.getElementById('englishOutput');

const symbolMatrix = {
    '@': "a",
    '3': 'e',
    '1': ['l', 'i']
}
function translateText() {
    // let gibberish = inputContainer.value.toLowerCase().split('');
    // let newStringArr = [];

    // for(let i = 0; i < gibberish.length; i++){
    //     if(symbolMatrix.hasOwnProperty(gibberish[i])){
    //         newStringArr.push(symbolMatrix[gibberish[i]]);
    //     } else {
    //         newStringArr.push(gibberish[i]);
    //     }
    // }

    let gibberish = inputContainer.value.toLowerCase();
    let translated = gibberish
    .replace(/@/g, 'a')
    .replace(/3/g, 'e')
    .replace(/[1!|]/g, 'i')
    .replace(/0/g, "o")
    .replace(/8/g, 'b')
    .replace(/[$]/g, 's')
    .replace(/9/g, 'g')
    .replace(/[+]/g, 't');

    outputContainer.value = translated;

}