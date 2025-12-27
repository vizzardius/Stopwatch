let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
let miliseconds = document.querySelector(".miliseconds")
let startButton = document.querySelector(".startButton")
let stopButton = document.querySelector(".stopButton")
let resetButton = document.querySelector(".resetButton")

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
         secondsValue ++
      }
      if(secondsValue > 59){
         secondsValue = 0
         minutesValue++
      }
      milisecondsValue ++
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
   window.location.href = "index.html"
})
