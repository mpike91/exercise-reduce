// Done
function extractValue(arr, key) {
    return arr.reduce(function(accumulator, currentObj){
        accumulator.push(currentObj[key]);
        return accumulator;
    }, [])
}

// Done
function vowelCount(str) {
    str = str.toLowerCase().split("");
    return str.reduce(function(accumulator, char){
        if (['a','e','i','o','u'].includes(char)) {
            accumulator[char] ? accumulator[char]++ : accumulator[char] = 1;
            return accumulator;
        }
        return accumulator;
    }, {});
}

// Done
function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accum, nextObj){
        nextObj[key] = value;
        accum.push(nextObj);
        return accum;
    },[])
}
// Also with map:
// function addKeyAndValue(arr, key, value) {
//     return arr.map(function(obj, i, arr){
//         obj[key] = value;
//         return obj;
//     })
// }


// Done
function partition(arr, callback) {
    return arr.reduce(function(accumulator, nextVal){
        if(callback(nextVal)) {
            accumulator[0].push(nextVal);
            return accumulator;
        }
        accumulator[1].push(nextVal);
        return accumulator;
    },[[],[]])
}