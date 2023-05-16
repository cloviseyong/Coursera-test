// function changeColor() {
//   document.getElementById("demo").style.color="red";
//   document.getElementById('demo').innerHTML=5+5;
//   document.write(11+3);
// }

// document.write(11+3);

// function myFunction(){
//   document.getElementById("demo1").innerHTML="Hello Dolly";
//   document.getElementById("demo2").innerHTML="How are you";
// }



let x;
x = 6;
document.getElementById("demo").innerHTML = x;

function myFunction(){
  document.getElementById("demo").style.color="red";
}

function myFunction1(){
  document.getElementById("demo1").innerHTML="hello thanks for coming";
}


function myFunction2(){
  document.getElementById("demo3").style.fontSize ="35px";
}

function myFunction3(){
  document.getElementById("demo4").innerHTML="I love you Kim";

}

// function myFunction4(){
//   let carName = "Volvo";
//   let carName1 ="Toyota";
//   let item = "car";
//   document.getElementById("demo5").innerHTML= "My,"+ item + "is"+ carName + carName1;

// }

// function myFunction4(){
//   let carName = "Volvo",carName1 ="Toyota",item = "car";
//   document.getElementById("demo5").innerHTML= "My,"+ item + "is"+ carName + carName1;

// }

// function myFunction4(){
//   let carName = "Volvo",
//   carName1 ="Toyota",
//   item = "";
//   document.getElementById("demo5").innerHTML= "My"+""+ item + "is"+ "" +carName + carName1;

// }

// function myFunction5(){
//   const cars =["Saab", "Volvo","BMW"];
//   cars[0] = "Toyota";
//   cars.push("Audi");
//   document.getElementById("demo6").innerHTML=cars;

// }


// // function myFunction6(){
// //   const cars ={type:"Fiat", model:"500", color:"white"};
// //   cars.color = "red";
// //   cars.owner = "Johnson";
// //   document.getElementById("demo7").innerHTML=cars.owner;

// // }

// function myFunction6(){
//   const date = new Date();
// //   document.getElementById("demo7").innerHTML=date;

// }

function myFunction(p1, p2) {
  return p1 * p2;
}

let result = myFunction(4, 3);
document.getElementById("demo").innerHTML = result;








