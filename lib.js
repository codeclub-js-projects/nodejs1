function example1() {
    let arr = [10, 20, 30, 40, 50];
    let N = arr.length;
    for (let i = 0; i < N; i++) {
        console.log(arr[i]);
    }
}

function array_counter(array) {
    return array.length;
}

function array_sumator(array) {
    let s = 0;
    array.forEach((item) => { s += item; });
    return s;
}

module.exports.example = example1;
module.exports.counter = array_counter;
module.exports.sumator = array_sumator;
