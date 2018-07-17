let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];


function addExcitement (theWordArray, symb) {

    let buildMeUp = "";
    let wordCount = 0;

    for (let i = 0; i < theWordArray.length; i++) {
        wordCount ++;
        let currentWord = theWordArray[i];
        buildMeUp += " " + currentWord;

        if(wordCount % 3 === 0){
            buildMeUp = buildMeUp + symb.repeat(wordCount/3);
        }
        console.log(buildMeUp);
    }

}

addExcitement(sentence, " ? "); 