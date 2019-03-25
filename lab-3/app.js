const textM = require('./textMetrics')
const fileD = require('./fileData')
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

// console.log('please input the PATH')
//----------------------------------need fix
//check if --->exist :  getFileAsJSON + print
async function main(){
    try{
        console.log(await fileD.getFileAsJSON('./chapter1.result.json'))
    

    }catch(e){
        if(e.code == 'ENOENT') {
            // console.log('123')
            var str = await fileD.getFileAsString('./chapter1.txt')
            var obj = await textM.createMetrics(str);
            await fileD.saveJSONToFile('./chapter1.result.json',obj)
            console.log(await fileD.getFileAsJSON('./chapter1.result.json'))
        }
        else {
            throw e
        }
    }
    try{
        console.log(await fileD.getFileAsJSON('./chapter2.result.json'))
    

    }catch(e){
        if(e.code == 'ENOENT') {
            // console.log('123')
            var str = await fileD.getFileAsString('./chapter2.txt')
            var obj = await textM.createMetrics(str);
            await fileD.saveJSONToFile('./chapter2.result.json',obj)
            console.log(await fileD.getFileAsJSON('./chapter2.result.json'))
        }
        else {
            throw e
        }
    }
    try{
        console.log(await fileD.getFileAsJSON('./chapter3.result.json'))
    

    }catch(e){
        if(e.code == 'ENOENT') {
            // console.log('123')
            var str = await fileD.getFileAsString('./chapter3.txt')
            var obj = await textM.createMetrics(str);
            await fileD.saveJSONToFile('./chapter3.result.json',obj)
            console.log(await fileD.getFileAsJSON('./chapter3.result.json'))
        }
        else {
            throw e
        }
    }
} 
main();

//check if --->not exist : content--getFileString + creatM + stores in JSON(Save String to JSON) + print