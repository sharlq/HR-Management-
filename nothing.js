let pascal = (i,j)=>{
    
    if(j<=1||j===i||i<1){
        return 1
    }else{
        return pascal(i-1,j-1) + pascal(i-1,j)
    }
}
let row = (index)=>{
    index++
    let res =[]
    for(let j = 1; j<=index;j++){
        res.push(pascal(index,j))
    }
    return res
}
console.log(row(3))
//console.log(pascal(3,1))