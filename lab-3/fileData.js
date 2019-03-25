const bluebird = require("bluebird");
const Promise = bluebird.Promise;

// We use bluebird to make a copy of fs
// that has all its normal methods, and
// {methodName}Async method versions that return
// promises as well; ie, you will have a copy
// of fs with fs.stat(path, callback) and
// fs.statAsync(path), which returns a promise
// thus allowing us to await it.
const fs = bluebird.promisifyAll(require("fs"));

//function body
async function  getFileAsString(path){
    let str = "";
    if(!path)throw"provide a real PATH dude!";
    str = await fs.readFileAsync(path, 'utf8')
    return str    
}


async function getFileAsJSON(path){
    let json ={}
    let str =""
    if(!path)throw"We need a real PATH dude!";
    str = await fs.readFileAsync(path,"utf-8");
    json = JSON.parse(str)
    return json
}

async function  saveStringToFile(path, text){
    if(!path)throw"We need a PATH dude!";
    if (text === undefined || typeof text !== "string"){
        throw "use STRING ONLY && not NULL"
    }
    await fs.writeFileAsync(path, text)
    // if(!fs.readFile(path)){
    //     console.log("path not exist, Creating now")
    //     // await fs.openSync(path)//creat file
    //     console.log("writing in")
       
    // }else{
    //     // console.log("path exist, append now")
    //     // await fs.appendFileSync(path,text) 
    //     throw "path is already exist"
    // }
    return true

}

async function saveJSONToFile(path, obj){
    if(!path)throw"We need a PATH dude!";
    if(typeof obj!=="object"||obj ===""){
        throw"Hey, show me the OBJECT"
    }
    let str = JSON.stringify(obj)

    await fs.writeFileAsync(path, str)
    return true
}
// async function main () {
//     console.log(await getFileAsString('./chapter1.txt'))
//     console.log(await getFileAsJSON('./test.txt'))
//     console.log(await saveJSONToFile('./chapter11.jason',{obj:1}))
//     console.log(await saveStringToFile('./chapter12.txt',"123"))
// }
// // console.log(await getFileAsString("./chapter1.txt"))
// main()


module.exports={
   getFileAsString,
   getFileAsJSON,
   saveStringToFile,
   saveJSONToFile
}