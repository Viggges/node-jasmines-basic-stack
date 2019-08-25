// Write your cade below:
function caclRemaindar(left,right) {
    return left%right;
};

function caclSum(numArray) {
    let sum=0;
    for(let i=0;i<numArray.length; i++){
        sum+=numArray[i];
    }   
    return sum;
};

function caclSumInConditon(numArray,num) {
    let sum=0;
    for(let i=0;i<numArray.length; i++){
        if(numArray[i]<num)
            sum+=numArray[i];
    }   
    return sum;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}