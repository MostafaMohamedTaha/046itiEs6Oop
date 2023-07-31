let helloPromise=document.getElementById("promiseHello")
let userImage=document.getElementById("userImage")
let showWelcome=()=>{

    window.addEventListener('load',()=>{
        return new Promise(()=>helloPromise.innerHTML=`welcome to our website`)
    })
}
let showImage=async()=>{
    await showWelcome()
    setTimeout(()=>{userImage.hidden=false},3000)
}
let thanks=async()=>{
    await showImage()
    setTimeout(()=>helloPromise.innerHTML=`thanks for visiting our website`,3000)
}
let redirect=async()=>{
    await thanks()
    setTimeout(()=>window.location.href="http://www.youtube.com",3000)
}

redirect()