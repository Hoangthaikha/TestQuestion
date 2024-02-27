let array = [[11,25],[45,50,55],[60,80]];

function totalArrayOfArray(arr){

    var arrAfterReducer= [];

    for(var i = 0; i < array.length; i++){
        console.log(array[i]);
        var arrSub;
        arrSub = array[i].reduce(function(a, c){
            return a + c;
        }, 0)

        console.log(arrSub);
        console.log("------------");

        arrAfterReducer.push(arrSub);

    }   
    

    return arrAfterReducer;
}

console.log(totalArrayOfArray(array));



