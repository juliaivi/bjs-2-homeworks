class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
         if (time == undefined || callback == undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
         }

         if (this.alarmCollection.findIndex((el) => el.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
         }

         this.alarmCollection.push({
            time: time,
            canCall: true,
            callback: callback,
         })
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((el) => el.time !== time);
        return this.alarmCollection;
    }

    getCurrentFormattedTime() {
        let currentDate = new Date();
        let h = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : currentDate.getHours();
        let m = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
        return `${h}:${m}`;
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((el) => {
                if (el.time === this.getCurrentFormattedTime()) {
                    el.canCall = false;
                    el.callback();
                };
            })   
        }, 1000)  
    }

    stop() {
       clearInterval(this.intervalId);
       this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((el) => el.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}