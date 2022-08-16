let arr =[1, [2], [3, [[4]]]]
const streamRoll = (arr)=>{
let newArr =arr.reduce((acc,item)=>{
    if(Array.isArray(item)){
        acc =acc.concat(streamRoll(item))
    }
    else{
        acc.push(item)
    }
    return acc
},[])
return newArr
}