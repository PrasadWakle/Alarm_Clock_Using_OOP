# alarmclock
Created an alarm clock using object oriented programming in JavaScript.

You can set the alarm either by giving inputs on website or through developer tools console.

### Steps to set an alarm through developer tools console.

**1. Create an object**

` const Alarm = new AlarmClock(hh,mm,ss,"zone","weekday"); ` 

e.g.

` const Alarm = new AlarmClock(02,10,00,"PM","Monday"); ` 

Your alarm is set for 02:10:00 PM Monday

**2. Set the alarm**

` Alarm.setAlarm(Alarm); `

**3. To stop the alarm**

` Alarm.stopTheAlarm(); `

**4. To pause the alarm**

` Alarm.pauseAlarm(); `

Note: Alarm will be snoozed for 5 minutes and you can snooze the alarm for maximum 3 times.

**5. To delete the alarm**

` clearAlarm(hh,mm,ss,"zone","weekday"); `

e.g.

` clearAlarm(02,10,00,"PM","Monday"); ` 

Alarm deleted!
