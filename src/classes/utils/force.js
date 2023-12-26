export class Force {
  #x;
  #y;

  constructor(x = 0, y = 0) {
    this.#x = x;
    this.#y = y;
  }

  /**
   * Adds a delta force to the force vector.
   *
   * @param {Force} force
   */
  add(force) {
    this.#x += force.x;
    this.#y += force.y;
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
