export class Velocity {

  #x;
  #y;

  constructor(x = 0, y = 0) {
    this.#x = x;
    this.#y = y;
  }

  add(deltaVelocity) {
    this.#x += deltaVelocity.x;
    this.#y += deltaVelocity.y;
  }

  /**
   * Multiplies the velocity by a scalar value representing delta time.
   *
   * @param {number} deltaTime Value to multiply velocity with, value should represent delta-time to be used for integration.
   * @returns {Position} Returns a new Position object wich represents a movement i.e. a delta-position. 
   */
  getPositionalChange(deltaTime) {
    return new Position(this.#x * deltaTime, this.#y * deltaTime);
  }

  get x() {
    return this.#x;
  }

  set x(value) {
    this.#x = value;
  }

  set y(value) {
    this.#y = value;
  }

  get y() {
    return this.#y;
  }
}