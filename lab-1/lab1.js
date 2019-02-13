const questionOne = function questionOne(arr) {
    // Implement question 1 here:If arr becomes bigger
    // var sum =0;
    // for(let i=0;i<= arr.length;i++){
    //     sum = sum + arr[i]**2;
    // }
    // return(sum);
    return(arr[0]**2+arr[1]**2+arr[2]**2)
}


const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    //First, judge if break the border
    if (num<0){
        console.log('no negtive');
        return(0);
    }
    if (num == 0 || num == 1){
        return num;
    }
    if(num>=25){
        console.log('plz dont....bigger num is too slow, will waste u lots of time');
        return(-1);
    }
    //calculate:
    else{ 
        return questionTwo(num - 1) + questionTwo(num - 2);
    }
}


const questionThree = function questionThree(text) {
    // Implement question 3 here: if can use this function.
    //first I used: 'let arra = (text.toLocaleLowerCase()).includes(/a/g);' ---which totally forget includes() returns boolean.....
    let arra = (text.toLocaleLowerCase()).match(/a/g);
    let arre = (text.toLocaleLowerCase()).match(/e/g);
    let arri = (text.toLocaleLowerCase()).match(/i/g);
    let arro = (text.toLocaleLowerCase()).match(/o/g);
    let arru = (text.toLocaleLowerCase()).match(/u/g);
    //calculate
    let sumVowel = arra.length + arre.length + arri.length + arro.length + arru.length;
        return sumVowel;
   
}


const questionFour = function questionFour(num) {
    // Implement question 4 here
    if(num < 0){
        return NaN;
    }
    if(num == 0){
        return 1;
    }
    else{
        var total = 1;
        for(let i =0; i<num;i++){
            total = total *(num-i);
        }
        return total;
    }
}


 module.exports = {
    firstName: "Haoyu", 
    lastName: "Rong", 
    studentId: "10438329",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
 };