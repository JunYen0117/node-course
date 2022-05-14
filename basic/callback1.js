let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWork = function (job, timer, cb) {
  setTimeout(() => {
    let dt = new Date();
    let result = `完成工作: ${job} at ${dt.toISOString()}`;
    cb(result);
  }, timer);
  console.log(`在 setTimeout 之後 ${job}`);
};

// 刷牙 (3000) -> 吃早餐 (5000) -> 寫功課 (3000)

let work1 = doWork('刷牙', 3000, function (result) {
  console.log(result);
});

let work2 = doWork('吃早餐', 5000, function (result) {
  console.log(result);
});

let work3 = doWork('寫功課', 3000, function (result) {
  console.log(result);
});

if(work1===true){
  console.log(work2);
}

if(work2===true){
  console.log(work3);
}
