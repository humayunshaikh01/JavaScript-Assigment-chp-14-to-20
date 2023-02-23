// document.write("hellow")


// Chapter 14 to 16

// Question No 1

// var students = [];
// console.log (students);

// Question 2 
// var students = new stu ();

// Question No 3

// var students = ["Humayun" , "Basit" , "Abdullah" , "Hafeez" , "Meer"]
// console.log(students.length)
// console.log(students)

// Question No 4

// var students = [10 , 20 , 30]
// console.log(students.length)
// console.log(students)

// Question No 5

// var students = [ ];
// for(var i = 0; i < 5; i+=1){
//     students.push(true);
// }
// console.log(students)

// Question No 6

// var students = ["humayun" , 10 , "Bilal" , 100];
// console.log(students)

// Question No 7

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// for(var i = 0; i < qualifications.length ; i++){
//     document.write(qualifications[i] + " <br /> ");
// }

// Question No 8 incomplete


// Question No 9
//  var colorNames = ["RED", "Green", "Blue"]
// document.write(colorNames)

// A)
// var colorNames = ["Red", "Green", "Blue"]
// colorNames.unshift("Black");
// document.write(colorNames);

// B)
// var colorNames = ["Red", "Green", "Blue"];
// colorNames.push("Black");
// document.write(colorNames)

// C)
// var colorNames = ["Red", "Green", "Blue"];
// colorNames.unshift("Black", "Purple")
// document.write(colorNames)

// D)
// var colorNames = ["Red", "Green", "Blue"];
// colorNames.shift(0,1)
// document.write(colorNames)

// E)
// var colorNames = ["Red", "Green", "Blue"];
// colorNames.pop(2)
// document.write(colorNames)

// F)
// var colorNames = ["Red", "Green", "Blue"];
// colorNames.splice(2, 0, "Black")
// document.write(colorNames)

// G)
// var colorNames = ["Red", "Green", "Blue", "Pink"];
// colorNames.splice(2,2)
// document.write(colorNames)


// Question No 10

// var scores = [320, 230, 480, 120];
// scores.sort()
// document.write(scores);

// Question No 11

// var cities = ["karachi", "Lahore", "islamabad", "R.Pindi"];
// console.log(cities)
// var citiesCopy = cities.slice(1,3)
// console.log(citiesCopy)

// Question No 12

// var fArray = ["This", "is", "my", "dog"];
// document.write(fArray + "<br />")
// var strArr = ["This", "is", "my", "dog"];
// document.write(strArr.join(" "))

// Question No 13


// var devices = []
// devices.push("keyboard")
// devices.push("Mouse")
// devices.push("Printer")
// devices.push("Monitor")

// document.write("device" + " <br />" + devices);

// for(var i = 0; i <= 3; i++){
//     document.write("<br />" + devices.shift())
// }


// Question No 14 

// var devices = []
// devices.push("keyboard")
// devices.push("Mouse")
// devices.push("Printer")
// devices.push("Monitor")

// document.write("device" + " <br />" + devices);

// for(var i = 0; i <= 3; i++){
//     document.write("<br />" + devices.pop())
// }

// Question No 15

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>")

// for(var i = 0; i <manufacturers.length; i++){
//     document.write("<option>" + manufacturers[i] + "<option/>")
// }
// document.write("/select")

// Chapter 17 To 20

// Question No 1
// var empArr = [[]];

// Question No 2 

// var matrixArr = [
//     [0, 1, 2, 3]
//     [1, 0, 1, 2]
//     [2, 1, 0, 1]
// ]

// Question No 3
// for(var k = 0; k <= 10; k++){
//     document.write(k + "<br />")
// }

// Question No 4
// var tableNumber = +prompt("Enter Table Number");
// var tableLength = +prompt("Enter Table length Number");

// for(var num = 1; num <= tableLength; num++){
//     document.write(tableNumber + " x " +  " " + num + " " + "=" + " " + tableNumber * num + "<br />")
// }

// Question No 5
// var fruits = ["apple", "banana", "mango", "orange", 
// "strawberry"];

// for(var i = 0; i < fruits.length; i++){
//    document.write(fruits[i] + "<br />")
// }

// Question No 6
// A)
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(var i = 1; i <= 10; i++){
//     document.write(i)
// }

// B)
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(var i = 10; i >= 1; i--){
//     document.write(i)
// }

// C)
// for(var i = 0 ; i <= 10; i+=2){
//     document.write(" " + i);
// }

// D)
// for(var i = 1 ; i <= 9; i+=2){
//     document.write(" " + i);
// }

// e)
// for(var i = 10; i <= 50; i+=10){
//     document.write(" " + i + "k")
// }

// Question No 7 incomplete

// var bak = prompt("WellCome to ABC Bakery! Do you want Something?")

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
// // var isMatch = false
// for(var i = 0; i <= bakery.length; i++){
//     document.write(i)
// }



// if(bak = bakery){
//     document.write("This item is Available")
// }
// else{
//     document.write("Sorry! This is item is not Available")
// }




// for(var i = 0; i < bakery; i++){


//     // if(bakery[i] === "Milk Poweder"){
//     //     // isMatch = true
//     //     document.write("not matched")
//     // }
// }



// Question No 8

// var array = [24, 53, 78, 91, 12];
// var largest= 0;

// for (i=0; i<array.length; i++){
//     if (array[i]>largest) {
//         largest=array[i];
//     }
// }
// document.write(largest);


// Question No 9
// var arr = [24, 53, 78, 91, 12];
// var min = Math.min(...arr)
// document.write(min)

// Question No 10 

// for(var i = 1; i <= 100; i++){
//     if(i % 5 === 0){
//         document.write(" " + i)
//     }
// }