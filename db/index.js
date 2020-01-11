var fs = require('fs');

const data = require('./dataset.json')
let output =[]
for (const od in data) {
    output.push({"id":od,...data[od]})

}
var json = JSON.stringify(output);
fs.writeFile('clean.json', json, 'utf8', (err,data)=>{
    if (err){
        console.log(err)
    }else{
        console.log('ya')
    }
});