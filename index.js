//Promise=>resolve//

const p=new Promise((resolve,reject)=>{
  //resolve("Promise will be fullfilled")
  reject('Promise will be failure');

})

p.then((result)=>{
  console.log(result);
})
.catch((err)=>{
  console.log(err)
})