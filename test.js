function Person (name,age) {
    this.name = name;
    this.age = age;
    console.log(this);
};

let obj1 = new Person('홍창기', 30);
Person('오지환',33);

// Person {name: '홍창기', age:30}
// <ref*1> Object [global] {
//     global: [Circular *1],
//     clearImmediate : [Function:clearImmediate],
//     crypto:[Getter],
//     name:'오지환',
//     age:33
// }








// let arr = [];
// let sum = 0;
// arr[0] = 23;
// arr[1] = 12;
// arr[2] = 34;
// for (let i = 0;i < arr.length;i++){
//     console.log(`arr[${i}] = ${arr[i]}`);
//     sum = sum + arr[i];
// }
// console.log(`배열을 더한 값은 ${sum}`);

// let sum = 0, count_ = 0;

// for (let num = 2; num <= 100;num++){
//     let count = 0;
//     for (let i = 1; i<=num;i++){ 
//         if (num % i == 0){ 
//             // num이 17일때 17 % 1~17까지인데 (1,17) 소수가 아니면 count가 3이상
//             // num이 16일때 1,2,4,8,16 이므로 count가 5개가 됨
//             count++;
//         }
//     }
//     // 중첩 for 문 밖에서 count를 확인 (3이상이면 소수가 아님)
//     if (count == 2){
//         sum += num;
//         count_ = count_ + 1;

//     }
// }
// console.log(sum,count_);
