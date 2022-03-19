const date=require('date-format');

const time= date.asString('hh:mm:ss.SSS', new Date());

console.log(time);