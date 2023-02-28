class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? 0 + '' + hours : hours;
    minutes = minutes < 10 ? 0 + '' + minutes : minutes;
    seconds = seconds < 10 ? 0 + '' + seconds : seconds;

    let output = this.template
      .replace('h', hours)
      .replace('m', minutes)
      .replace('s', seconds);

    console.log(output);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }

  end() {
    clearInterval(this.timer);
  }
}

const clock = new Clock({ template: 'h:m:s' });
clock.start();
setTimeout(() => clock.end(), 10 * 1000);
