// https://github.com/zafru241/assignment.js/blob/main/assignment.js

function kilometerToMeter(kilometer){
    let meter = kilometer* 1000;
    return meter;
}
let result = kilometerToMeter(10);
console.log(result);


let watchPrice = 50;
let mobilePrice = 100;
let laptopPrice = 500;

function budgetCalculator(watch, mobile, laptop){
    let watchPrice = watch * 50;
    let mobilePrice = mobile * 100;
    let laptopPrice = laptop * 500;
    return watchPrice + mobilePrice + laptopPrice;
}
   
let totalPrice = budgetCalculator(10, 10, 10);
console.log(totalPrice);




function hotelCost(rent){
    const totalRent = 100;
    let rent1 = totalRent-20;
    let rent2 = totalRent-50;

    if(rent<= 10){
        totalRent = rent * 100 ;
       
        }
        else if(rent<= 11){
            let rent1 = 11 * 80 ;
            totalRent = totalRent + rent1;
        }
        else if(rent<= 21){
            let rent2 = 21 * 50 ;
            totalRent = totalRent + rent2 + rent2;
        }   
        return totalRent;  
}
let result = hotelCost(rent);
console.log(result);


function megaFriend(str){
    let wordsArr = str['karim','Rahi','Dhali', 'Tony', 'Joy'];
    let longest = Infinity;
    // let longest = wordsArr[0].length
    for(let i=0; i<wordsArr.length; i++){
        let wordLength = wordsArr[i].length;
        if(wordLength> longest){
            longest = wordLength;
        }
    }
    return longest;
}
// let result = megaFriend(['karim','Rahi','Dhali', 'Tony', 'Joy']);
console.log(longest);