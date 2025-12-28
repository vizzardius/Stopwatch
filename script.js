let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
let miliseconds = document.querySelector(".miliseconds")
let startButton = document.querySelector(".startButton")
let stopButton = document.querySelector(".stopButton")
let resetButton = document.querySelector(".resetButton")
let secondsFirst = document.querySelector(".secondsFirst")
let minutesFirst = document.querySelector(".minutesFirst")
let savedTimeButton = document.querySelector(".savedTimeButton")
let savedTime = document.querySelector(".savedTime")

let secondsFirstValue = +secondsFirst.textContent
let minutesFirstValue = +minutesFirst.textContent
let milisecondsValue = +miliseconds.textContent
let secondsValue = +seconds.textContent
let minutesValue = +minutes.textContent
let stopwatchInterval = null



startButton.addEventListener("click",()=>{
   if(stopwatchInterval !== null) return;
   stopButton.textContent = "Pause"
   stopwatchInterval = setInterval(()=>{
      if(milisecondsValue>99){
         milisecondsValue = 0
         secondsFirstValue ++
      }
      if(secondsFirstValue>9){
         secondsFirstValue = 0
         secondsValue++
      }
      if(secondsValue > 5){
         secondsValue = 0
         minutesFirstValue++
      }
      if(minutesFirstValue>9){
         minutesFirstValue=0
         minutesValue++
      }
      milisecondsValue ++
      minutesFirst.textContent = minutesFirstValue
      secondsFirst.textContent = secondsFirstValue
      miliseconds.textContent = milisecondsValue
      seconds.textContent = secondsValue
      minutes.textContent = minutesValue
   },10) 
})

stopButton.addEventListener("click",()=>{
   if(stopwatchInterval === null) return;
   clearInterval(stopwatchInterval)
   stopwatchInterval = null
   startButton.textContent = "Continue"
})

resetButton.addEventListener("click",()=>{
   clearInterval(stopwatchInterval)
   stopwatchInterval = null
   minutesValue = 0
   secondsValue = 0 
   secondsFirstValue = 0
   minutesFirstValue= 0
   milisecondsValue = "00"
   minutesFirst.textContent = minutesFirstValue
   secondsFirst.textContent = secondsFirstValue
   miliseconds.textContent = milisecondsValue
   seconds.textContent = secondsValue
   minutes.textContent = minutesValue
})

savedTimeButton.addEventListener("click",()=>{
   let savedTimeValue = document.createElement('span')
   if(stopwatchInterval === null)return;
   savedTimeValue.className = "savedTimeValue"
   minutesFirst.textContent = minutesFirstValue
   secondsFirst.textContent = secondsFirstValue
   miliseconds.textContent = milisecondsValue
   seconds.textContent = secondsValue
   minutes.textContent = minutesValue
   savedTimeValue.textContent = minutes.textContent+minutesFirst.textContent+":"+seconds.textContent+secondsFirst.textContent+":"+miliseconds.textContent
   savedTime.appendChild(savedTimeValue)
})