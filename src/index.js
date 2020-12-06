const csv = require('csv-parser');
const fs = require('fs');
var d=[]


const c=async ()=>
{
    let path='C:/Users/Soucer/Downloads/archive/vgsales - Copia.csv'
    
    let Opath='C:/Users/Soucer/Downloads/archive/vdsales.txt'

    await fs.createReadStream(path)
    .pipe(csv())
    .on('data',(row)=>{
 
        d.push(`${row.Rank};${row.Name};${row.Year}`+"/n")
    
    }).on('close',()=>{
        fs.createWriteStream(Opath,{autoClose:true}).write(JSON.stringify(d))
    })
    

}


c()