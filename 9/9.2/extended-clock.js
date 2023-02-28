class ExtendedClock extends Clock {
  constructor(templatelObj) {
    super(templatelObj);
    let { precision = 1000 } = templatelObj;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}
