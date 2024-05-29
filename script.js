const secondshand = document.getElementById('seconds')
const minuteshand = document.getElementById('minutes')
const hourshand = document.getElementById('hours')

function getTIme(){
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours =  now.getHours()
    const timeInterval = 6

    secondshand.style.transform = 'rotate('+ (seconds * timeInterval) +'deg)'
    minuteshand.style.transform = 'rotate('+ (minutes * timeInterval + seconds/10) +'deg)'
    hourshand.style.transform = 'rotate('+ (hours * minutes/2) +'deg)'

}


setInterval(getTIme,100)
