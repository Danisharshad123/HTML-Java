/* function JavaScript() {

    document.getElementById('demo').innerHTML = "this is working";
    
} */


/* let x,y,z;

x=4;
y=6;
z = x + y;

function myFunction() {
    document.getElementById('demo').innerHTML = "The value of z is " + z + ".";
} */


const Fruits = ['Apple','Banana','Grapes'];
document.getElementById('demo').innerHTML = Fruits;

function myFunction() {
    Fruits.push ('lemon');
    document.getElementById('demo').innerHTML=Fruits;
}
