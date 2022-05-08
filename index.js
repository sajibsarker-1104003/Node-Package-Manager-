//Promise=>resolve//

const p=new Promise((resolve,reject)=>{
  resolve("Promise will be fullfilled")

})

p.then((result)=>{
  console.log(result);
})
.catch((err)=>{
  console.log(err)
})