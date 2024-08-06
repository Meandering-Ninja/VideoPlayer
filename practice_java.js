const wait =async()=>{
    setTimeout(()=>{
    
        console.log("Inside Wait")}
    ,4000)
}
const h = async()=>{
    await wait()
    console.log("Inside hi")
}
h();