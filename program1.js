let arr =[1, [2], [3, [[4]]]]
const streamrollArray = (arr)=>{
let flattenarr = arr.reduce((acc,item)=>{
    if(Array.isArray(item)){
        acc =acc.concat(item)
    }
    else{
        acc.push(item)
    }
    return acc
},[])
return flattenarr
} 