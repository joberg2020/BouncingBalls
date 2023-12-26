import { Drawable } from "./shapes/drawable";
export class GameObject {
  /**
   * @type {Drawable}
   */
  #drawableShape;

  constructor(shape) {
    this.#drawableShape = shape;
  }

  get drawableShape() {
    return this.#drawableShape;
  }

  overlaps(other) {
    return this.#drawableShape.overlaps(other.drawableShape);
  }
}