
const time = document.getElementById('time');
//  List of alarms
const alarmList = [];

let alarmTime = null;
let alarmTimeout = null;
var snooze = 0;


// function to show current time
function currentTime() {
  var today = new Date();
  const hours = formatTime(today.getHours());
  const minutes = formatTime(today.getMinutes());
  const seconds = formatTime(today.getSeconds());
  const day = today.toLocaleDateString("en-IN", {weekday: "long"});
  const now = `${hours}:${minutes}:${seconds} ${day}`;


  time.innerText = `${hours}:${minutes}:${seconds} ${day}`;

  if(alarmList.includes(now) ){
      ringing(now);
  }

}

//function to set correct format of time e.g. "1:2:3" to "01:02:03"

function formatTime(time) {
  if (time < 10 && time.length != 2) {
    return "0" + time;
  }

  return time;
}

setInterval(currentTime, 1000);


// alarm sound

const audio = new Audio("clock-alarm.mp3");
audio.loop = true;



const myList = document.querySelector('#myList');
const addAlarm = document.querySelector('.set-alarm');
const weekday = document.getElementById("weekdays");

// Function to add new alarm
function showNewAlarm(newAlarm){
    const html =`
    <li class = "time-list alarm">
        <span class="time">${newAlarm}</span>
        <button class="btn btn-warning deleteAlarm time-control" id="delete-button" onclick = "remove(this.value)" value=${newAlarm}>Delete</button>
    </li>`
    myList.innerHTML += html;
};

// event to set a new alarm on clicking submit button

addAlarm.addEventListener('submit', e=> {
    e.preventDefault();
    // const newAlarm = addAlarm.alarmTime.value;
    let new_h=formatTime(addAlarm.hour.value);
    if(new_h === '0'){
        new_h = '00'
    }
    let new_m=formatTime(addAlarm.minute.value);
    if(new_m === '0'){
        new_m = '00'
    }
    let new_s=formatTime(addAlarm.second.value);
    if(new_s === '0'){
        new_s = '00'
    }
    let new_d = addAlarm.weekdays.value;

    const newAlarm = `${new_h}:${new_m}:${new_s} ${new_d}`

//     add newAlarm to alarmList
    if(isNaN(newAlarm)){
        if(!alarmList.includes(newAlarm)){
            alarmList.push(newAlarm);
            showNewAlarm(newAlarm);
            addAlarm.reset();
        } else{
            alert(`Alarm for ${newAlarm} already set.`);
        }
    } else{
        alert("Invalid Time Entered")
    }
});

// removes an alarm from the unordered list and the webpage when "Delete Alarm" is clicked
myList.addEventListener('click', e=> {
    if(e.target.classList.contains("deleteAlarm")){
        e.target.parentElement.remove();
    }
})

// removes an alarm from the array when "Delete Alarm" is clicked
remove = (value) => {
    console.log(value);
    let newList = alarmList.filter((time) => time != value);
    alarmList.length = 0;                  // Clear contents
    alarmList.push.apply(alarmList, newList);

}

// Plays the alarm audio at correct time
function ringing(now){
    audio.play();
}

// function to clear/stop the currently playing alarm
function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
    }
}

function snoozeAlarm(){
  audio.pause();
  snooze++;
  if(snooze<3){
    setTimeout(() =>{
      var today = new Date();
      const hours = formatTime(today.getHours());
      const minutes = formatTime(today.getMinutes());
      const seconds = formatTime(today.getSeconds());
      const now = `${hours}:${minutes}:${seconds}`;

      ringing(now);
    },300000);
  }
}
