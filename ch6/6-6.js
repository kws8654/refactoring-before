let defaultOwner = { firstName: '마틴', lastName: '파울러' };
let defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

export function getDefaultOwner() {
  return defaultOwner;
}

// 자바스크립트
export function getDefaultOwner() {
  return { ...defaultOwner }; // 새로운 객체로 얕은 복사
}

// 일반적인 방법
class Person {
  #firstName;
  #lastName;

  constructor(data) {
    this.#firstName = data.firstName;
    this.#lastName = data.lastName;
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }
}
