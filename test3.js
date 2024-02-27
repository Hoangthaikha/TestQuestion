let array = [11,25,45,50,55,60,80];

function smallestGreaterThanAverage(arr){
    var reducer = array.reduce(function (a,b){
        return a + b;
    }, 0);

    console.log(arr);

    console.log('Total Array: ' + reducer)

    var lengthArr = array.length

    var avarage = reducer / lengthArr;

    console.log("Avarage Array: " + avarage);

    // var min = array.filter(function(x){
    //     return x >= avarage && x < x[i];
    // });

    for(var i = 0 ; i < array.length; i++){
        for(var j = 0 ; j < array.length; j++){
            if(avarage <= array[i] && array[i] < array[j]){
                return "Smallest Greater Than Average: " + array[i];
            }
        }
    }
    return arr;
}

console.log(smallestGreaterThanAverage(array));

