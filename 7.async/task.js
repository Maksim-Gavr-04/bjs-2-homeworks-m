class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(hourMinutes, action) {
    if (!hourMinutes || !action) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.alarmCollection.some(alarm => alarm.time === hourMinutes)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push(
      {
        callback: action,
        time: hourMinutes,
        canCall: true
      }
    );
  }

  removeClock(timeAlarm) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== timeAlarm);
  }

  getCurrentFormattedTime() {
    let time = new Date();
    let h = String(time.getHours()).padStart(2, "0");
    let m = String(time.getMinutes()).padStart(2, "0");
    return h + ':' + m;
    // return new Date().toLocaleTimeString("ru-RU").slice(0, -3);
  }

  start() {
    if (this.intervalId) {
      return;
    }

    const startAlarm = () => {
      this.alarmCollection.forEach(alarm => {
        if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
          alarm.canCall = false;
          alarm.callback();
        };
      });
    }

    this.intervalId = setInterval(startAlarm, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}