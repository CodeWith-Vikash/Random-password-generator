const input=document.querySelector("input")
const button=document.querySelector("button")
const copyBtn=document.querySelector("i")


button.addEventListener('click',()=>{
    createPassword()
})

copyBtn.addEventListener('click',()=>{
    input.select()
    input.setSelectionRange=(0,9999)
    navigator.clipboard.writeText(input.value)
})

const chars="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function  createPassword() {
    let passoword=""
    const passowordLength=10
    for (let index = 0; index < passowordLength; index++) {
        const random=Math.floor(Math.random()*chars.length)
        passoword +=chars.substring(random,random+1)
        
    }
    input.value=passoword
}