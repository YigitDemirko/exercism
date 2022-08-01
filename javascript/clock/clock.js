//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours , minutes = 0) {
    this.minutes = (60 + minutes % 60) % 60;
    let extraHours = Math.floor(minutes/60);
    this.hours = (24 + (extraHours + hours) % 24)  % 24;
  }

  toString() {
    return `${("0" + this.hours).slice(-2)}:${("0" + this.minutes).slice(-2)}`;
  }
    
  plus(minutes) {
    return new Clock(this.hours,this.minutes + minutes);
  }

  minus(minutes) {
    return this.plus(-minutes)
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }
}
