const fs = require('fs');

fs.readFile('test11111.txt', 'utf-8', (err, data) => {
  if (err) {
    // 錯誤了
    console.log('喔喔喔，發生錯誤了');
    console.error(err);
  } else {
    // 因為沒有 err，所以是正確的
    console.log(data);
  }
});


async function main () {

}

try {
  
} catch (error) {
  
}

// let a = new Promise((resolve, reject) => {
//     const fs = require('fs');
//     fs.readFile('test.txt', 'utf-8', (err, data)=> {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       });
// });

// a.then((success)=>{
//     console.log(success);
// })
// .catch((error)=>{
//     console.log('喔喔喔，發生錯誤了');
// })

