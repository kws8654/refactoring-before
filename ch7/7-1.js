// const organization = { name: 'Acme Gooseberries', country: 'GB' };

// organization.name = 'Dream Coding';
// console.log(organization.name);
// console.log(organization.country);

class Oraganization {
  #name;
  #country;

  constructor(data) {
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  get country() {
    return this.#country;
  }

  set name(data) {
    this.#name = data.name;
  }

  set country(data) {
    this.#country = data.country;
  }

  get rawData() {
    // return { ...this.#data }; // setter가 없다면, 얕은 복사로 불변성 유지
    return { name: this.name, country: this.country }; // setter가 있다면
  }
}

const organization = new Oraganization({ name: 'Acme Gooseberries', country: 'GB' });

organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);
