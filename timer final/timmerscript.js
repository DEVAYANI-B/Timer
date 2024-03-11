var seconds=0
var hours=0
var interval
var minutes=0
const getTime=(num)=>num.toString().padStart(2,"0")
function clock(){
    interval=setInterval(()=>{
        seconds++
        if(seconds===60)
        {
            minutes++
            seconds=0
        }
        if(minutes===60){
            hours++
            minutes=0
            seconds=0
        }
        document.getElementById('coun').innerText=`${getTime(hours)}:${getTime(minutes)}:${getTime(seconds)}`
       
    },1000
    //,console.log(${getTime(hours)}:${getTime(minutes)}:${getTime(seconds)})
    )
}
function sclock(){
    clearInterval(interval)
       // console.log(${getTime(hours)}:${getTime(minutes)}:${getTime(seconds)})
}
function rclock(){
    seconds=0
    minutes=0
    hours=0
    document.getElementById('coun').innerText=`${getTime(hours)}:${getTime(minutes)}:${getTime(seconds)}`
   // console.log(${getTime(hours)}:${getTime(minutes)}:${getTime(seconds)})
}
function fflage(){
    console.log(`${getTime(hours)}:${getTime(minutes)}:${getTime(seconds)}`)
}