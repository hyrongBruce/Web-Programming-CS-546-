
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
        throw "use STRING ONLY"
    }

    var pattern = new RegExp("[`~!@#$^&*()=|{}/':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？\\'\\n\\\"-]");
    var textNoMarks = "";
    var words = "";
    const textArr =[];
    //iterate all, split each character & tolowercase
    for (let i = 0; i < text.length; i++) {
        //get each character
        var firstLetter = text.substr(i, 1);       
        //totalLetters
        if(firstLetter.match(/[a-zA-Z]/)){
            metricsObj.totalLetters++;
        }else{
            metricsObj.totalNonLetters++;
        }
        //nomarks text. but with "" and " "
        textNoMarks = textNoMarks + firstLetter.replace(pattern,"").toLowerCase();
        
        }
    for(i of text){
        if(i.match(/[a-Az-Z]/)){
            words+= i;
        }
        else{
            if(words ==""){
                continue;
            }
            textArr.push[words]
            words = "";
            console.log(textArr)
        }
    }

        //for Vowel & Consonants, uses both Unicode & ===(enum)
    for (let j =0;j <= textNoMarks.length;j++){
        if(textNoMarks[j]==='a'||textNoMarks[j]==='e'||textNoMarks[j]==='i'||textNoMarks[j]==='o'||textNoMarks[j]==='u'){
            metricsObj.totalVowels++;
        }
        else if((textNoMarks.charCodeAt(j)>=97 && textNoMarks.charCodeAt(j)<=122)  || (textNoMarks.charCodeAt(j)>=65 && textNoMarks.charCodeAt(j)<=90) ){
            metricsObj.totalConsonants++;
        }
    }

        // metricsObj.totalNonLetters = text.length - textNoMarks.length;
    // var textArr = textNoMarks.split(" ");
    console.log(textArr)
	for (let k = textArr.length - 1; k >= 0; k--) {
        if(textArr[k] === undefined || textArr[k] === ""){
            blankSum++;
        }
       

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
        metricsObj.totalWords = textArr.length-blankSum;
        metricsObj.averageWordLength = metricsObj.totalLetters / metricsObj.totalWords;
		metricsObj.averageWordLength = metricsObj.averageWordLength.toFixed(2);
		return metricsObj;
}
console.log(createMetrics("Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23"))

// module.exports ={
//     createMetrics
// }