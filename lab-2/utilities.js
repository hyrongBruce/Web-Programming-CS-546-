//deepEquality(obj1, obj2)
function deepEquality(obj1, obj2){
    if(arguments.length !=2){
        throw new EvalError("arguments.length MUST BE 2")
    }
   
    if (obj1 === obj2) {
        return true;
      } else if (isObject(obj1) && isObject(obj2)) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) { return false; }
        for (var prop in obj1) {
          if (!deepEquality(obj1[prop], obj2[prop])) {
            return false;
          }
        }
        return true;
      }
    
      //judege whether its object or not
      function isObject(obj) {
        if (typeof obj === "object" && obj != null) {
          return true;
        } else {
           
          return false;
        }
      }
}
//test code--------------------------
// var obj1 = {a:1, b:2}
// var obj2 = {a:1, b:2}
// var obj3 = {a:1, c:3}
// // const arr = [2,4,5]
// // console.log(typeof null)
// // // console.log(typeof obj.a)
// // console.log(obj.a)
// // // console.log(typeof 3)
// // // console.log(typeof arr)
// // console.log(Object.keys(obj))
// // console.log(obj === obj1)
// // console.log([1,2] === [2,1])
// console.log(deepEquality(obj1,obj2))
// console.log(deepEquality(obj1,obj3))
// // console.log(deepEquality(obj1,obj3,obj2))
// console.log(deepEquality(obj1,2))
//--------------------------

//uniqueElements(arr)
function uniqueElements(arr){
    if(arguments.length >1){
        throw new EvalError("arguments.length MUST BE 2")
    }
    if(arr ===null){
        throw new TyperError("arguments must be an ARRAY, and CANNOT BE null") 
    }
    if(typeof arr !== "object"){
        throw new TypeError("arguments must be an ARRAY, and CANNOT BE null")
    }
    else{
    let set = new Set(arr)
    return set.size;
    }
}

//countOfEachCharacterInString(str)
function countOfEachCharacterInString(str){
    if(typeof str != "string"){
        throw new TypeError("arguments must be an STRING")
    }
    if(arguments.length >1){
        throw new EvalError("arguments.length MUST BE 1, also CANNOT BE null")
    }
    if(str ===null){
        throw new TypeError("arguments.length MUST BE 1, also CANNOT BE null") 
    }
    let hashset = new Set(str)
    let obj = {}
     //first get every key: using set
    for(let ele of hashset){
        obj[ele] = 0;
    }
    //second value: iterate the string to get the frequency of each key, which is value;
    for(let i of str){
        obj[i]++;
    }
    return obj;
}

module.exports={
    deepEquality,
    uniqueElements,
    countOfEachCharacterInString
}