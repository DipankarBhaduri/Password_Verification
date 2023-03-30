/*
let userName = window.prompt("What's is your Name ?") ;
console.log(userName) ;

let age = window.prompt("How Old are You ?") ;
// let userName = window.prompt("What's your name ?") ;
age = Number(age) ;
age += 1 ;
console.log("Happy birthday! You are", age ,"years old" ) ;

let x ;
let y ;
let z ;

x = Number ("234") ;
y = String (234) ;
z = Boolean ("er") ;

console.log(x ,typeof x ) ;
console.log(y ,typeof y ) ;
console.log(z ,typeof z ) ;
*/

// --------------------------------------------------------

/*
let radius = Number(window.prompt("Enter the redius of a circle")) ;
const pi = 3.14 ;
let area ;

area = 2 * radius * pi ;
console.log("The area is :",area) ;
*/

// --------------------------------------------------------

/*

let x = 3.99 ;
let y = 5.35 ;
let z = 1.44 ;


let max ;
let min ;


max = Math.max ( x,y,z) ;
min = Math.min(x,y,z) ;
console.log(max) ;
console.log(min) ;

*/

// --------------------------------------------------------

/*

let a ;
let b ;
let c ;


a = Number(window.prompt("Enter side A : ")) ;
b = Number(window.prompt("Enter side B : ")) ;

c = a*a + b*b ;
c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2)) ;
console.log("Side C :" ,c) ;

*/

// --------------------------------------------------------

/*
let userName = window.prompt("What's is your Name ?") ;
console.log(userName) ;
*/

let a ;
let b ;
let c ;

document.getElementById("submitButton").onclick = function function1 () {
 
    a = document.getElementById("aTextBox").value ;
    
    let space = 0 ;
    for ( let i = 0 ; i < a.length ; i++ ){
        let ch1 = a[i] ;
        if ( ch1 ==' '){
            space++ ;
        }
    }

    let name1 = "Pls Write Full Name" ;
    let name2 = "Looks Good" ;

    if (space == 0 ){
        document.getElementById("p1").innerHTML = name1 ;
        console.log(name1) ;
    } else {
        document.getElementById("p1").innerHTML = name2 ;
        console.log(name2) ;
    }





    b = document.getElementById("bTextBox").value ;
    let lowerChar = 0 ;
    let upperChar = 0 ;
    let digitCount = 0 ;
    let specialChar = 0 ;

    for ( let i = 0 ; i < b.length ; i++ ){

        let ch2 = b[i] ;

        if ( ch2 >= '0' && ch2 <= '9' ){
            digitCount++ ;
        }

        if ( ch2 >= 'a' && ch2 <= 'z' ){
            lowerChar++ ;
        }

        if ( ch2 >= 'A' && ch2 <= 'Z' ){
            upperChar++ ;
        }

        if ( ch2 == '@' || ch2 == '#' || ch2 == '$' || ch2 == '%' || ch2 == '&' ){
            specialChar++ ;
        }

    }

    let name3 = "Yes , Password is to Good" ;
    let name4 = "At least One special , Lower , Upper , Digit required" ;

    if ( lowerChar > 0 && upperChar > 0 && specialChar > 0 && digitCount > 0 ){
        document.getElementById("p2").innerHTML = name3 ;
    } else {
        document.getElementById("p2").innerHTML = name4 ;
    }

}