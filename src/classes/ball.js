import { GameObject } from "./gameObject";
import { Circle } from "./shapes/circle";
import { Force } from "./utils/force";
import { Acceleration } from "./utils/acceleration";
import { Velocity } from "./utils/velocity";

export class Ball extends GameObject {

  #id;
  #mass;
  #force = new Force();
  #velocity = new Velocity();

  constructor(position, radius, mass, id) {
    if (!mass || typeof mass !== "number" || mass <= 0) {
      throw new Error("Mass must be a positive number");
    }

    super(new Circle(position, radius));
    this.#mass = mass;
    this.#id = id;
  }

  move(dx, dy) {
    this.drawableShape.move(dx, dy);
  }

  /**
   * Creates and returns a new Acceleration object based on the current force and mass of the ball.
   *
   * @return {Acceleration} Calculated from mass and force.
   */
  get acceleration() {
    return new Acceleration(this.#force.x / this.#mass, this.#force.y / this.#mass);
  }

  /**
   * Returns the current velocity of the ball.
   *
   * @returns {Velocity} The current velocity of the ball.
   */
  get velocity() {
    return this.#velocity;
  }

  get force() {
    return this.#force;
  }

  updateForce(force) {
    this.#force.x += force.x;
    this.#force.y += force.y;
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