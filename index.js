let celciusinput=document.querySelector('#celcius > input')
let fahrninput=document.querySelector('#Fahernheit > input')
let kelinput=document.querySelector('#kelvin > input')

let butn = document.querySelector('.btn button')

function roundnum(number){
    return Math.round(number*100)/100
}

celciusinput.addEventListener('input',function(){
    let ctemp =parseFloat(celciusinput.value)
    let ftemp = (ctemp*(9/5))+32
    let ktemp = ctemp + 273.15

    fahrninput.value = roundnum(ftemp)
    kelinput.value = roundnum (ktemp)

})
fahrninput.addEventListener('input',function(){
    let ftemp =parseFloat(fahrninput.value)
    let ctemp = (ftemp-32)*(5/9)
    let ktemp = (ftemp-32)*(5/9) + 273.15

    celciusinput.value = roundnum(ctemp)
    kelinput.value = roundnum (ktemp)

})
kelinput.addEventListener('input',function(){
    let ktemp =parseFloat(kelinput.value)
    let ctemp = ktemp - 273.15
    let ftemp = (ktemp - 273.15) * (9/5) + 32

    celciusinput.value = roundnum(ctemp)
    fahrninput.value = roundnum (ftemp)

})

butn.addEventListener('click',()=>{
    celciusinput.value=" "
    kelinput.value=" "
    fahrninput.value=" "
})