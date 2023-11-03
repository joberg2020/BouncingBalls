export class GameObject {
  #drawableShape;

  constructor(shape) {
    this.#drawableShape = shape;
  }
}