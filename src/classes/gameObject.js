export class GameObject {
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