import {Velocity} from './velocity';

export class Acceleration {

  #x;
  #y;

  constructor(x = 0, y = 0) {
    this.#x = x;
    this.#y = y;
  }

  /**
   * Returns the change in velocity by multiplying acceleration with time.
   *
   * @param {number} deltaTime A sclar value to multiply the acceleration by.
   * @returns {Velocity} Returns a new Velocity object representing the change in velocity, i.e deltaVelocity.
   */
  multiply(deltaTime) {
    return new Velocity(this.#x * deltaTime, this.#y * deltaTime);
  }

  get x() {
    return this.#x;
  }

  set x(value) {
    this.#x = value;
  }

  get y() {
    return this.#y;
  }

  set y(value) {
    this.#y = value;
  }
}