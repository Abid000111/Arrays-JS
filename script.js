// let marks = [11, 22, 33, 44, 55];
// console.log(marks);
// console.log(marks.length);  // length is a property in array
// // console.log(marks.charAt(2));   // not valid
// console.log(marks[2]);
// marks[0] = 99;
// console.log(marks[0]);


// let marks = [99, 22, 33, 44, 55];
// for(let i = 0; i < marks.length; i++){    // output : 99
//     console.log(marks[i]);                //          22
// }                                         //          33
//                                           //          44
//                                           //          55


// let marks = [99, 22, 33, 44, 55];
// for(let i in marks){                 // output : 0
//     console.log(i);                  //          1
// }                                    //          2
//                                      //          3
//                                      //          4


// let marks = [99, 22, 33, 44, 55];
// for (let i in marks) {               // output : [ 99, 22, 33, 44, 55 ]
//     console.log(marks);              //          [ 99, 22, 33, 44, 55 ]
// }                                    //          [ 99, 22, 33, 44, 55 ]
//                                      //          [ 99, 22, 33, 44, 55 ]
//                                      //          [ 99, 22, 33, 44, 55 ]


// let marks = [99, 22, 33, 44, 55];
// for(let i in marks){                 // output : 99
//     console.log(marks[i]);           //          22
// }                                    //          33
//                                      //          44
//                                      //          55

// let marks = [99, 22, 33, 44, 55];
// for (let i of marks){                // output : 99
//     console.log(i);                  //          22
// }                                    //          33
//                                      //          44
//                                      //          55


// let marks = [99, 22, 33, 44, 55];
// for (let i of marks){                // output : [ 99, 22, 33, 44, 55 ]
//     console.log(marks);              //          [ 99, 22, 33, 44, 55 ]
// }                                    //          [ 99, 22, 33, 44, 55 ]
//                                      //          [ 99, 22, 33, 44, 55 ]
//                                      //          [ 99, 22, 33, 44, 55 ]





// let marks = [99, 22, 33, 44, 55];
// for (let i of marks){                   // output : undefined
//     console.log(marks[i]);              //          undefined
// }                                       //          undefined
                                           //          undefined
                                           //          undefined



// let marks = [99, 22, 33, 44, 55];
// let sum = 0;
// for(i of marks){
//     sum = sum + i;
// }
// average = sum / marks.length;
// console.log(average);



// let price = [100, 200, 300, 400, 500];

// let sum = 0;

// for(let i of price){
//     let disc = i / 10;
//     discPrice = i - disc;
//     price[sum] = discPrice
//     sum = sum + 1;
// }
// console.log(price);



// let food = ["Burger", "Pizza", "Chips"];

// food.push("Noodles", "Sandwich", "French fry");
// console.log(food);
// food.push("Juice");
// console.log(food);
// food.pop();
// console.log(food);
// console.log(food.toString());

// let price = [100, 200, 300, 400, 500];
// console.log(price.toString());
// console.log(price);
// console.log(food);
// food.toString();
// console.log(food);

// let food = ["chips", "juice"];
// let fruit = ["apple", "banana"];
// let foodFruit = food.concat(fruit);
// console.log(foodFruit);

// food.unshift("cake");
// console.log(food);


// replace
// let num = [1, 2, 3, 4, 5, 6, 7];
// num.splice(1, 1, 777);
// console.log(num);

// add
// let num = [1, 2, 3, 4, 5, 6, 7];
// num.splice(2, 0, 111);
// console.log(num);

// delete
// let num = [1, 2, 3, 4, 5, 6, 7];
// num.splice(3, 2);
// console.log(num);

// to delete everything after a specific number
// let num = [1, 2, 3, 4, 5, 6, 7];
// num.splice(3);
// console.log(num);

