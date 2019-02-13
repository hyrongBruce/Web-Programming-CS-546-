var x = require('./geometry')
var y = require('./utilities')
/*********************************************************test of geometry.js****************************************************************************************/

//--------------volumeOfRectangularPrism-------------------------------------------------------------
console.log(x.volumeOfRectangularPrism(1,2,3))
try{
    console.log(x.volumeOfRectangularPrism())
}catch(e){
    if(e instanceof TypeError){
        console.log(e);
    }
}
try{
    console.log(x.volumeOfRectangularPrism(2,3,4,5,6))
}catch(e){
    if(e instanceof EvalError)
    console.log(e)
}
try{
    console.log(x.volumeOfRectangularPrism('2','3','4'))
}catch(e){
    if(e instanceof TypeError)
    console.log(e)
}
try{
    console.log(x.volumeOfRectangularPrism(-2,3,4))
}catch(e){
    if(e instanceof RangeError)
    console.log(e)
}

//--------------surfaceAreaOfRectangularPrism()----------------------------------------------
console.log(x.surfaceAreaOfRectangularPrism(2,3,4))
try{
    console.log(x.surfaceAreaOfRectangularPrism())
}catch(e){
    if(e instanceof TypeError){
        console.log(e);
    }
}
try{
    console.log(x.surfaceAreaOfRectangularPrism(2,3,4,5,6))
}catch(e){
    if(e instanceof EvalError)
    console.log(e)
}
try{
    console.log(x.surfaceAreaOfRectangularPrism('2','3','4'))
}catch(e){
    if(e instanceof TypeError)
    console.log(e)
}
try{
    console.log(x.surfaceAreaOfRectangularPrism(-2,3,4))
}catch(e){
    if(e instanceof RangeError)
    console.log(e)
}

//--------------volumeOfSphere()--------------------------------------------------------
console.log(x.volumeOfSphere(5))
try{
    console.log(x.volumeOfSphere())
}catch(e){
    if(e instanceof TypeError)
    console.log(e)
}
try{
    console.log(x.volumeOfSphere(2,3,4,5,6))
}catch(e){
    if(e instanceof EvalError)
    console.log(e)
}
try{
    console.log(x.volumeOfSphere('2'))
}catch(e){
    if(e instanceof TypeError)
    console.log(e)
}
try{
    console.log(x.volumeOfSphere(-2))
}catch(e){
    if(e instanceof RangeError)
    console.log(e)
}


//--------------surfaceAreaOfSphere()------------------------------------------------------------------------
console.log(x.surfaceAreaOfSphere(5))
try{
    console.log(x.surfaceAreaOfSphere())
}catch(e){
    if(e instanceof TypeError)
    console.log(e)
}
try{
    console.log(x.surfaceAreaOfSphere(2,3,4,5,6))
}catch(e){
    if(e instanceof EvalError)
    console.log(e)
}
try{
    console.log(x.surfaceAreaOfSphere('2'))
}catch(e){
    if(e instanceof TypeError)
    console.log(e)
}
try{
    console.log(x.surfaceAreaOfSphere(-2))
}catch(e){
    if(e instanceof RangeError)
    console.log(e)
}



/*********************************************************test of utilities.js****************************************************************************************/
//--------------deepEquality()--------------------------------------------------------------------------------
const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
console.log(y.deepEquality(first, second)); 
console.log(y.deepEquality(first, third)); 
try{
    console.log(y.deepEquality(first,'3')); 
}catch(e){
    console.log(e)//I used loop here ....so I cant difine TyperError for wrong input
} 
console.log(y.deepEquality(second, third));
try{
    console.log(y.deepEquality()); 
}catch(e){
    if (e instanceof EvalError)
    console.log(e)
}

//--------------uniqueElements()-----------------------------------------
const testArr0 = ["a", "a", "b", "a", "b", "c"];
const testArr1 = [1,2,3,4,5,5,5]
console.log(y.uniqueElements(testArr0)); // outputs 3
console.log(y.uniqueElements(testArr1))
try{
    console.log(y.uniqueElements()); 
}catch(e){
    if (e instanceof TypeError)
    console.log(e)
}
try{
    console.log(y.uniqueElements('asvabasbnmiknai')); 
}catch(e){
    if (e instanceof TypeError)
    console.log(e)
}
try{
    console.log(y.uniqueElements(testArr0,testArr1)); 
}catch(e){
    if (e instanceof EvalError)
    console.log(e)
}

//--------------countOfEachCharacterInString()--------------------------------------------------------------------
const test = "Hello, the pie is in the oven";
const anothertest ="Oh god, I finally finished 12344444";
const charMap = y.countOfEachCharacterInString(test); 
console.log(charMap);
const anothercharMap = y.countOfEachCharacterInString(anothertest);
console.log(anothercharMap);
try{
    y.countOfEachCharacterInString();
}catch(e){
    if (e instanceof TypeError)
    console.log(e)
}
try{
    y.countOfEachCharacterInString(test,anothertest);
}catch(e){
    if(e instanceof EvalError)
    console.log(e)
}
try{
    y.countOfEachCharacterInString(123123144123);
}catch(e){
    if(e instanceof TypeError)
    console.log(e)
}