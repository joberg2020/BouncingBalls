import { Drawable } from "./drawable";
import { BoundingBox } from "./boundingBox";
import { Position } from "../utils/position";

export class Circle extends Drawable {
  #center;
  #radius;

  /**
   * Creates a new Circle.
   *
   * @param {Position} center The center position of the circle.
   * @param {Number} radius radius of circle.
   */
  constructor(center, radius) {
    super();
    this.#center = center;
    this.radius = radius;
    this.boundingBox = this.#initBoundingBoxCircle();
  }

  move(dx, dy) {
    this.#center.x += dx;
    this.#center.y += dy;
    this.boundingBox.move(dx, dy);
  }

  get center() {
    return this.#center;
  }

  set center(value) {
    this.#center = value;
  }

  get radius() {
    return this.#radius;
  }

  set radius(value) {
    if (typeof value == "number" && value > 0) {
      this.#radius = value;
    } else {
      throw new Error("Radius must be a positive number");
    }
  }

  #initBoundingBoxCircle() {
    return new BoundingBox(
      new Position(
        this.#center.x - this.#radius,
        this.#center.y - this.#radius,
      ),
      new Position(
        this.#center.x + this.#radius,
        this.#center.y + this.#radius,
      ),
    );
  }
}
