export const StringSlice = (strResponse)=>{
    //Only used for Page Numbering when outputting to Console
const strPage = "Page ";

//Number of pages required in the book
let intNumberOfPages = 4;

let intSentenceStart = 1;
let intSentenceEnd = 1;
let data = []

let strOutput = "";
let strSentenceText = "";

//Full text response from ChatGPT API

//Count the Number of Periods to determine the number of sentences in the response text
let intNumberOfSentences = strResponse.length - strResponse.replace(/['.']/g, '').length;

//Round Down the Number of Sentences erquired per page
let intSentencesPerPage = Math.floor(intNumberOfSentences / intNumberOfPages);

//And calculate the remaining sentences to display on the last page
let intSentencesRemaining = intNumberOfSentences % intNumberOfPages;

//If there are 'Sentences Remaining' then add another page
if (intSentencesRemaining > 0) {
    intNumberOfPages++;
}

//Break response text down into Sentences in an Array (Base 0)
const astrSentences = [];

//Iterate through the response string adding each sentence to an Array
for (let intSentenceCounter = 0; intSentenceCounter <= intNumberOfSentences; intSentenceCounter++) {
    
    //Find first Period character starting at beginning OR 2 character after the previous Period character
    intSentenceEnd = strResponse.indexOf('.', intSentenceStart);
    
    //Extract Sentence from full Response Text
    strSentenceText = strResponse.substr(intSentenceStart - 1, (intSentenceEnd - intSentenceStart) + 2);
    //console.log(strSentenceText.trim());
    
    //Store Sentence in Array
    astrSentences[intSentenceCounter] = strSentenceText.trim();
    
    //Add 2 to previous Period character position
    intSentenceStart = intSentenceEnd + 2;    
}

//Iterate through the Array outputting required Number of Sentences to the strOutput variable
for (let intCurrentPage = 1; intCurrentPage <= intNumberOfPages; intCurrentPage++) {
    strOutput = "";
    
    //If it is NOT the last page then output the required number of sentences
    if (intCurrentPage < intNumberOfPages || intSentencesRemaining == 0) {
    
        for (let intCurrentSentence = 1; intCurrentSentence <= intSentencesPerPage; intCurrentSentence++) {
            strOutput = strOutput.concat(" ", astrSentences[((intCurrentPage - 1) * intSentencesPerPage) + (intCurrentSentence - 1)]);
        }
    } // If it IS the last page then output the remaining sentences
    else {
        
        for (let intCurrentSentence = 1; intCurrentSentence <= intSentencesRemaining; intCurrentSentence++) {
            strOutput = strOutput.concat(" ", astrSentences[((intCurrentPage - 1) * intSentencesPerPage) + (intCurrentSentence - 1)]);
        }
    }
    
    // console.log(strPage.concat(" ", intCurrentPage, " ", strOutput.trim()));
    data.push(strOutput.trim())
}


return data

}