var obj = {
    do : "This is a message"
};

console.log(obj.do);
console.log(obj["do"]);

var prop = "do";

console.log(obj[prop]);

var arr = []

arr.push(() => {
    console.log("This is the first element into the array");
});

arr.push(() => {
    console.log("This is the second element into the array");
});

arr.push(() => {
    console.log("This is the thrid element into the array");
});

arr.forEach((item) => {
    item();
});