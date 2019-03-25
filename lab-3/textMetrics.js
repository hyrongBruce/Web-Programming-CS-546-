
function createMetrics(text){
    var metricsObj ={
        totalLetters: 0,   //total number of letter characters in the text,
        totalNonLetters: 0,//total number of non-letters in the text,
        totalVowels: 0,//total number of vowels in the text (not counting y),
        totalConsonants: 0,//total number of consonants in the text (counting y),
        totalWords: 0,//total number of words in the text; a word is defined as any sequence of letters broken by any not-letter. For example, the phrase to-do is two words; a word does not start until a letter appears,
        uniqueWords: 0,//total number of unique words that appear in the lowercased text,
        longWords: 0,//number of words in the text that are 6 or more letters long; this is a total count of individual words, not unique words,
        averageWordLength: 0,//the average number of letters in a word in the text; this is counting the individual words, not unique words,
        wordOccurrences: {}//a dictionary of each word and how many times each word occurs in the text.
    }

    //Input valiadation
    if (text === undefined || typeof text !== "string"){
        throw "use STRING ONLY && not NULL"
    }
    
    var words = "";
    const textArr =[];
    //use toLowerCase to control
    //for(i in text),typeof i == "number"
    //for(i of text), typeof i == "string"----> i is every element it self------>whats more, \n \t and etc will be treated as a whole character
    for(i of text){
        let y = i.toLowerCase()
        if(y.match(/[a-z]/)){
            words+= y;
            metricsObj.totalLetters++;
        }
        else{
            metricsObj.totalNonLetters++;
            if(words ==""){
                continue;
            }
            textArr.push(words)
            words = "";
            
        }
    }

    // console.log(textArr)
    // vowel + consonants
    for(i of text){
        if(i.toLowerCase() ==="a"||i.toLowerCase() ==="e"||i.toLowerCase() ==="i"||i.toLowerCase() ==="o"||i.toLowerCase() ==="u"){
            metricsObj.totalVowels++;
        }else if(i.match(/[a-zA-Z]/)){
            metricsObj.totalConsonants++;
        }
    }
    //totalwords+ unique +avg
	for (let k = textArr.length - 1; k >= 0; k--) {
		if (textArr[k].length >= 6) {
				metricsObj.longWords++;
		}

			//wordOccurences
		if(metricsObj.wordOccurrences[textArr[k]]===undefined){
				metricsObj.wordOccurrences[textArr[k]] = 1;
				metricsObj.uniqueWords ++;
		}else{
				metricsObj.wordOccurrences[textArr[k]]++;
		}
    };
        metricsObj.totalWords = textArr.length
        metricsObj.averageWordLength = metricsObj.totalLetters / metricsObj.totalWords;
		return metricsObj;
}
// console.log(createMetrics("Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23"))

module.exports ={
    createMetrics
}