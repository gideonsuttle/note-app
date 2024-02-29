const fs = require('fs')

const databuffer = fs.readFileSync('1-json.json')
const dataJSON = databuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.name,data.age)
data.name = 'Gideon Suttle'
data.age = 20
console.log(data.name,data.age)
const dataJSON2 = JSON.stringify(data)
fs.writeFileSync('1-json.json',dataJSON2)