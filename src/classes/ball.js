import { GameObject } from "./gameObject";
import { Circle } from "./shapes/circle";
import { Force } from "./utils/force";
import { Acceleration } from "./utils/acceleration";

export class Ball extends GameObject {

  #id;
  #mass;
  #force = new Force();

  constructor(position, radius, mass, id) {
    super(new Circle(position, radius));
    if (!mass || mass <= 0) {
      throw new Error("Mass must be a positive number");
    }
    this.#mass = mass;
    this.#id = id;
  }

  move(dx, dy) {
    this.drawableShape.move(dx, dy);
  }

  get acceleration() {
    return new Acceleration(this.#force.x / this.#mass, this.#force.y / this.#mass);
  }

  get mass() {
    return this.#mass;
  }

  get id() {
    return this.#id;
  }

  get force() {
    return this.#force;
  }

  /**
   * Sets the current force acting on the ball.
   *
   * @param {Force} The force to apply to the ball.
   */
  set force(value) {
    this.#force.x = value.x;
    this.#force.y = value.y;
  }
}