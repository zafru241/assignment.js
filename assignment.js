// function kilometerToMeter(kilometer){
//     let meter = kilometer* 1000;
//     return meter;
// }
// let result = kilometerToMeter(10);
// console.log(result);


// let watchPrice = 50;
// let mobilePrice = 100;
// let laptopPrice = 500;

// function budgetCalculator(watch, mobile, laptop){
//     let watchPrice = watch * 50;
//     let mobilePrice = mobile * 100;
//     let laptopPrice = laptop * 500;
//     return watchPrice + mobilePrice + laptopPrice;
// }
   
// let totalPrice = budgetCalculator(10, 10, 10);
// console.log(totalPrice);

let  = 


function hotelCost(rent){
    const totalRent = 100;
    let rent1 = totalRent-20;
    let rent2 = totalRent-50;

    if(rent<= 10){
        building = floor * 15 * brickPerFeet;
       
        }
        else if(floor<=20){
            let floor1 = 10 * 15 *brickPerFeet;
            let remainingFloor = floor-10;
            let floor2 = remainingFloor *12 * brickPerFeet;
            building = floor1 + floor2;
        }
        else{
            let floor1 =  10 * 15 *brickPerFeet;
            let floor2 = 10 * 12 * brickPerFeet;
            let remainingFloor = floor-20;
            let floor3 = remainingFloor * 10 * brickPerFeet;
            building = floor1 + floor2 + floor3;
        }   
        return building;  
}
let result = brickCalculator(22);
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