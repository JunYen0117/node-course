let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWork = function (job, timer) {
  return new Promise((resolve, reject) => {
    // 做非同步工作
    setTimeout(() => {
      let dt = new Date();
      let result = `完成工作: ${job} at ${dt.toISOString()}`;
      resolve(result);
    }, timer);
  });
};

async function main() {
    const aa = await doWork('刷牙', 3000);
    console.log(aa);
    const bb = await doWork('吃早餐', 5000);
    console.log(bb);
    const cc = await doWork('寫功課', 3000);
    console.log(cc);
}
main();