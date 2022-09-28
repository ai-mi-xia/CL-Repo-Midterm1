window.addEventListener('load',function(){
    console.log('page is loaded')

    let button = document.getElementById('enter-button');
    button.addEventListener('click',function(){
    fetch('quotes.json')

    .then(response => response.json())
    
    .then(data => {
        let quotesArray = data.Sheet1
        let randomNumber = Math.floor(Math.random()*quotesArray.length);
        let nameElement = document.getElementById('quote-name');
        nameElement.innerHTML = data.Sheet1[randomNumber].quotes
    })

    .catch(error => {
        console.log("Error:" + error);
    })
     
    })
    function removeButton() {
        let elem = document.getElementById('enter-button');
        elem.parentNode.removeChild(elem);
        return false;
    }
})



// //rewriting anonymous functions - fat arrow syntax 

// function(a){
//     return a+10;
// }

// //1. Remove the word function, replace with arrow =>

// (a) => {
//     return a+10;
// }

// //2. Remove the brackets if there's only one argument

// (a) => return a+10;

// //3. Remove "return" if that's the only thing happening in the function
// (a) => a+10; 