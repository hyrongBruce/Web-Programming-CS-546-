/**4 method, with error checking on each argument*/

//volumeOfRectangularPrism(length, width, height)
function volumeOfRectangularPrism(length, width, height){
    if(length == null || width == null || height == null){
        throw new TypeError("input CANNOT BE empty")
    }
    if(typeof length !== "number" || typeof width !== "number" || typeof height !== "number"){
        throw new TypeError("input MUST BE Type Number, NO others")
    }
    if(length <= 0 || width <= 0 || height <= 0){
        throw new RangeError("NO negative Nums input")
    }
    if(arguments.length > 3){
        throw new EvalError("arguments MUST BE 3")
    }
    else{
    return length*width*height;
    }
}
//-----------------------------testcode
// console.log(typeof 1)
// console.log(volumeOfRectangularPrism(1,2,3))
//-------------------------------------

//surfaceAreaOfRectangularPrism(length, width, height)
function surfaceAreaOfRectangularPrism(length, width, height){
    if(length == null || width == null || height == null){
        throw new TypeError ("input CANNOT BE empty")
    }
    if(typeof length !== "number" || typeof width !== "number" || typeof height !== "number"){
        throw new TypeError ("input MUST BE Type Number, No others")
    }
    if(length <= 0 || width <= 0 || height <= 0){
        throw new RangeError("NO negative Nums or 0 input")
    }
    if(arguments.length > 3){
        throw new EvalError("arguments MUST BE 3")
    }
    else{
    return (length*width+width*height+height*length)*2
    }
}
//-----------------------------testcode
// console.log(surfaceAreaOfRectangularPrism(1,2,3))
//-------------------------------------

//volumeOfSphere(radius)
function volumeOfSphere(radius){
    if(arguments.length > 1){
        throw new EvalError ("arguments number MUST BE 1")
    }
    if(typeof radius !== "number"){
        throw new TypeError ("input MUST BE Type Number, No others")
    }
    if(radius == null){
        throw new TypeError ("input CANNOT BE empty")
    }
    if(radius <=0){
        throw new RangeError("NO negative Nums or 0 input")
    }
    
    return radius*radius*radius*Math.PI*(4/3)
    
}
//-----------------------------testcode
// console.log(Math.PI)
// console.log(volumeOfSphere())
// console.log(volumeOfSphere(1))
// console.log(volumeOfSphere(1,2))
// console.log(volumeOfSphere('3'))
//-------------------------------------

//surfaceAreaOfSphere(radius)
function surfaceAreaOfSphere(radius){
    if(arguments.length > 1){
        throw new EvalError ("arguments number MUST BE 1")
    }
    if(typeof radius !== "number"){
        throw new TypeError ("input MUST BE Type Number, No others")
    }
    if(radius == null){
        throw new TypeError ("input CANNOT BE empty")
    }
    if(radius <=0){
        throw new RangeError("NO negative Nums or 0 input")
    }
    else{
    return 4*radius*radius*Math.PI
    }
}
//-----------------------------testcode
// console.log(surfaceAreaOfSphere())
// console.log(surfaceAreaOfSphere(1))
// console.log(surfaceAreaOfSphere(2,3))
// console.log(surfaceAreaOfSphere('3'))
// console.log(surfaceAreaOfSphere(true))
//-------------------------------------

module.exports={
    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
}