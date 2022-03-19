const date=require('date-format');

const time= date.asString('hh:mm:ss.SSS', new Date());

console.log(time);


//Semantic Versioning

//Major.Minor.Patch=>Semantic Versioning

//1.0.0=>1.0.1=>1.0.2=>1.0.3=>Patch(Bug Fix)

//1.1.0=>1.2.0=>1.3.0=>Minor(Feature Add )

//2.0.0=>3.0.0=>4.0.0=>Major(Feature Remove or Structure Changed)