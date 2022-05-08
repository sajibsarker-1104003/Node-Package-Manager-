//Promise=>resolve//

const p=new Promise((resolve,reject)=>{
 
  setTimeout(()=>{
    resolve("Promise will be fullfilled")

  },5000)
   //reject('Promise will be failure');

})

p.then((result)=>{
  console.log(result);
})
.catch((err)=>{
  console.log(err)
})

console.log('After');