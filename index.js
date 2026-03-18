// function x(y) {
//             console.log("x");
//             y();
//         }

//         function y() {
//             console.log("y");
//         }

// x(y);


    
// function d(){
//     var counter = 0;
//     const btn = document.getElementById("clickMe")
//     btn.addEventListener("click", function xyz() {
//         counter++;
//         console.log(counter)
//     });

// }

// d();
// var a = 20;


const bdy = document.querySelector("body");

// document.body.classList.add('black');

document.getElementById("clickMe").addEventListener("click", function xyz () {
    document.body.classList.toggle('black')
})


const arry = [2,4,5,6,7,8,9];

const output = arry.map(double)


function double (x) {

    return x * 2;
    
}

console.log(output)