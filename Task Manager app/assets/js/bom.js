/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 

const collection = document.querySelectorAll('.collection');
const locationInformations= collection[0];
const browserInformations = collection[1];
const screenInformations = collection[2];
const historyInformations = collection[3];







// Display the BOM Information on the innerHTML of the elements
// ----------- Location ---------------
for (let locationInfo of locationInformations.children) {
    var key = locationInfo.childNodes[0].wholeText.toLowerCase();
    locationInfo.querySelector(".badge").innerHTML = eval(`location.${key}`);
}


// // ----------- Browser - navigator ---------------
for (let browserInfo of browserInformations.children) {
    var key = browserInfo.childNodes[0].wholeText.toLowerCase();
    if (key == "appname") key = "appName";
    if (key == "appversion") key = "appVersion"
    if (key == "cookieenabled") key = "cookieEnabled"

    browserInfo.querySelector(".badge").innerHTML = eval(`navigator.${key}`);
}


// // ----------- screen  ---------------
for (let screenInfo of screenInformations.children) {
    var key = screenInfo.childNodes[0].wholeText.toLowerCase();
    if (key == "pixeldepth") key = "pixelDepth";
    screenInfo.querySelector(".badge").innerHTML = eval(`screen.${key}`);
}

// // ----------- history  ---------------
for (let historyInfo of historyInformations.children) {
    var key = historyInfo.childNodes[0].wholeText.toLowerCase();
    history.pushState({name: 'Example'}, "pushState example", 'index.html');
    // const name = key[name].tostring();
    historyInfo.querySelector(".badge").innerHTML = eval(`history.${key}`);
}