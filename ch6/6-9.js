// const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

// export function acquireReading() {
//   return reading;
// }

// export function baseRate(month, year) {
//   if (year === 2017 && month === 5) return 0.1;
//   return 0.2;
// }

export class Reading {
  #customer;
  #quantity;
  #year;
  #month;

  constructor(data) {
    this.#customer = data.customer;
    this.#quantity = data.quantity;
    this.#year = data.year;
    this.#month = data.month;
  }

  get customer() {
    return this.#customer;
  }

  get quantity() {
    return this.#quantity;
  }

  get year() {
    return this.#year;
  }

  get month() {
    return this.#month;
  }

  get baseRate() {
    if (this.#year === 2017 && this.#month === 5) return 0.1;
    return 0.2;
  }

  get baseCharge() {
    return this.baseRate * this.quantity;
  }

  get taxThreshold() {
    return 0.1;
  }

  get taxableCharge() {
    return Math.max(0, this.baseRate - this.taxThreshold);
  }
}

const reading = new Reading({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
});

export function acquireReading() {
  return reading;
}
